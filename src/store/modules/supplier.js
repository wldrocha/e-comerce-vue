import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Api from '../api.export'


Vue.use(VueAxios, Axios);

export default {

    state: {
        suppliers: [],
        supplier: {}
    },
    mutations: {
        CLEAN_SUPPLIERS(state) {
            state.supplier = [];
        },
        SET_SUPPLIERS(state, suppliers) {
            state.suppliers = suppliers
        },
        SET_SUPPLIER(state, supplier) {
            state.suppliers.push(supplier)
        }
    },
    actions: {
        GetSuppliers({commit}){
            return new Promise((resolve,reject) => {
                Vue.axios({ url: Api.baseUrl + Api.getAllSuppliersRequest, method: Api.getAllSuppliersMehtod })
                .then(response => {
                    commit('CLEAN_SUPPLIERS');
                    commit('SET_SUPPLIERS', response.data.suppliers)
                    resolve(response)

                }).catch(err => {
                    reject(err)
                })
            }); 
        },
        
        AddSupplier({getters, commit}, supplier){
            return new Promise((resolve, reject) =>{
                Vue.axios({ url: Api.baseUrl+Api.addSupplierRequest, data: supplier, method: Api.addSupplierMethod, headers: getters.getHeader})
                .then( response => {
                    commit('SET_SUPPLIER', response.data.supplier)
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
            })
        },
        
    },
    getters: {
        getAllSuppliers(state) {
            return state.suppliers;
        },
        getSupplier(state) {
            return state.suspplier;
        }
    }
}