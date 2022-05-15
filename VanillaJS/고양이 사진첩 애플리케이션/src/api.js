const API_ENDPOINT = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev"

const api = {
  fetchRoot: async () => {
    return await fetch(`${API_ENDPOINT}`)
      .then(res => res.json())
      .catch(e => alert(`ERROR! ${e}`))

  },
  fetchId: async (id) => {
    return await fetch(`${API_ENDPOINT}/${id}`)
      .then(res => res.json())
      .catch(e => alert(`ERROR! ${e}`))
  }
};
