<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn round class="mt-5" @click="pickFile" outline color="white">agregar nueva imagen</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        overflow-hidden
        v-for="(image, i) in options.imageFiles"
        :key="i"
        class="pa-2 image-container"
      >
        <v-card>
          <v-img :src="checkIsBase64(image.img) ? image.img : options.assetsUrl + image.img">
            <v-container class="backface darken-2" fill-height>
              <v-row>
                <v-btn
                  @click="checkIsBase64(image.img) ?  removeImageFiles(i) : removeInUpdateImageFiles(i)"
                  outline
                  round
                  class="mt-5"
                  color="white"
                  icon
                  large
                >
                  <v-icon medium>delete</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <input hidden type="file" ref="image" accept="image/*" @change="onFilePicked" />
  </v-container>
</template>

<script>
export default {
  name: "app-upload-images",
  props: ["options"],
  data: () => ({
    deleted: []
  }),
  methods: {
    checkIsBase64(image) {
      let base64Matcher = new RegExp(
        "^data:image/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}"
      );
      if (base64Matcher.test(image)) {
        return true;
      } else {
        return false;
      }
    },
    pickFile() {
      let vm = this;
      vm.options.clear = false;
      vm.$refs.image.click();
    },
    onFilePicked(e) {
      let vm = this;
      let multiple = vm.options.multiple;
      let files = e.target.files[0];
      let sizeLimit = vm.options.size;
      let limitFile = vm.options.limitFile;
      let imageFiles = vm.options.imageFiles;
      let imageWidth = vm.options.width;
      let imageHeight = vm.options.height;

      let fr = new FileReader();

      if (multiple) {
        fr.onload = el => {
          // var image = new Image();
          // image.src = el.target.result;
          // image.onload = es => {
          //   console.log(es);
          //   if (es.width < 200 || es.width > 2500) {
          //     alert(
          //       es.width
          //     );
          //   } else {
          imageFiles.push({
            img: el.target.result,
            filetype: files.type.split("/")[1],
            action: "add"
          });
          vm.$emit("GetImageFile", imageFiles);
          //   }
          // };
        };
        fr.readAsDataURL(files);
      } else {
        fr.onload = el => {
          let image = new Image();
          image.src = el.target.result;
          image.onload = es => {
            let imgWidth = es.path[0].width;
            let imgHeight = es.path[0].height;
            if (imgWidth !== imageWidth || imgHeight !== imageHeight) {
              vm.$emit(
                "ErrorImageFile",
                "La imagen no cumple con la resolucion requerida!!"
              );
            } else {
              if (files.size > sizeLimit) {
                console.log("peso excedido");
                vm.$emit("ErrorImageFile", "Peso exedido!!");
                imageFiles = [];
              } else {
                imageFiles.splice(0, 1, {
                  img: el.target.result,
                  filetype: files.type.split("/")[1],
                  action: "add"
                });
                vm.$emit("GetImageFile", imageFiles);
              }
            }
          };
        };
        fr.readAsDataURL(files);
      }
    },
    removeInUpdateImageFiles(i) {
      let vm = this;
      let imageFiles = vm.options.imageFiles;
      let containerImage = document.getElementsByClassName("image-container")[
        i
      ];
      containerImage.remove();
      imageFiles[i].action = "delete";
    },
    removeImageFiles(i) {
      let vm = this;
      let imageFiles = vm.options.imageFiles;
      imageFiles.splice(i, 1);
    }
  }
};
</script>
