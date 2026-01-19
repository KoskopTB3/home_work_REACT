const backendUrl = 'https://simple-store-d3a6.onrender.com/api'

export default {
  productsList: `${backendUrl}/products`,
  addProduct: `${backendUrl}/products`,
  getUpdateProductLink: (id) => `${backendUrl}/products/${id}`,
  getProductById: (id) => `${backendUrl}/products/${id}`,
  getDeleteProductLink: (id) => `${backendUrl}/products/${id}`,
}
