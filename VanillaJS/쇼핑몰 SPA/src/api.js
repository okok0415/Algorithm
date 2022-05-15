const API_ENDPOINT = "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products"

const api = {
    fetchProduct: async () => {
        return await fetch(`${API_ENDPOINT}`)
            .then(res => res.json())
            .catch(e => alert(`ERROR! ${e}`))

    },

    fetchProductDetail: async (id) => {
        return await fetch(`${API_ENDPOINT}/${id}`)
            .then(res => res.json())
            .catch(e => alert(`ERROR! ${e}`))
    }

};

export default api;