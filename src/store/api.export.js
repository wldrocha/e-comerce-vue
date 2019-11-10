export default {
    baseUrl: 'http://127.0.0.1:3000',
    baseUrlPublic: 'http://127.0.0.1:3000/public/',

    loginMethod: 'POST',
    loginRequest: '/logins',


    getUserMethod: 'GET',

    registerMethod: 'POST',
    registerRequest: '/signup',
    getUserRequest: '/user',
    getAllUsersRequest: '/users',
    updateUserMethod: 'PUT',
    updateUserRequest: '/update',

    getSupplierRequest: '/supplier',
    getAllSuppliersRequest: '/suppliers',
    getAllSuppliersMehtod: 'GET',
    addSupplierRequest : '/supplier',
    addSupplierMethod: 'POST',

    getProductRequest: '/product',
    getAllProductsRequest: '/products',
    getAllProductsMehtod: 'GET',
    addProductRequest : '/product',
    addProductMethod: 'POST',
}