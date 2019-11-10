import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Api from '../api.export'


Vue.use(VueAxios, Axios);

export default {

    state: {
        products: [],
        product: {}
    },
    mutations: {
        CLEAN_PRODUCTS(state) {
            state.product = [];
        },
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_PRODUCT(state, product) {
            state.products.push(product)
        }
    },
    actions: {
        GetProducts({commit}){
            return new Promise((resolve,reject) => {
                Vue.axios({ url: Api.baseUrl + Api.getAllProductsRequest, method: Api.getAllProductsMehtod })
                .then(response => {
                    commit('CLEAN_PRODUCTS');
                    commit('SET_PRODUCTS', response.data.products)
                    resolve(response)

                }).catch(err => {
                    reject(err)
                })
            }); 
        },
        
        AddProduct({getters, commit}, product){
            // console.log(Api.baseUrl+Api.addProductRequest,Api.addProductMethod, getters.getHe)
            return new Promise((resolve, reject) =>{
                Vue.axios({ url: Api.baseUrl+Api.addProductRequest, data: product, method: Api.addProductMethod, headers: getters.getHeader})
                .then( response => {
                    commit('SET_PRODUCT', response.data.product)
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
            })
        },
        
    },
    getters: {
        getAllProducts(state) {
            return state.products;
        },
        getProduct(state) {
            return state.product;
        }
    }
}