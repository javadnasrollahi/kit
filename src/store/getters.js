
export default  {
  axios : state => require('axios').create({
    baseURL: HttpProtc + BaseURL,
    withCredentials: true,
    headers: {
        'Authorization-Token': state.user.token,
        'X-USER': state.user.uid,
    }
  }),


}
