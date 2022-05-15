const API_ENDPOINT = "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev"

const cache = {}

const api = {
    fetchKeywords: async (keywords) => {
        if (cache[keywords]) {
            return cache[keywords]
        }
        return await fetch(`${API_ENDPOINT}/languages?keyword=${keywords}`)
            .then(res => res.json())
            .then(res => cache[keywords] = res)
            .catch(e => alert(`ERROR! ${e}`))

    }
}

export default api