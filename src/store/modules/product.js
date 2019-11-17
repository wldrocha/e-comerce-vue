import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Api from '../api.export'


Vue.use(VueAxios, Axios);

export default {

    state: {
        products: [],
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
        getProductById : (state)=>(id) =>{
            return state.products.find(product => product._id == id)
        }
    }
}