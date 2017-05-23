import axios from 'axios'

export const i2xLogin = (email, password) => {
  return axios.post(
    'https://i2x-challenge.herokuapp.com/core/login/',
    {
      email: email,
      password: password
    })
  .then((res) => res)
  .catch((err) => console.log(err))
}

export const i2xGetMedia = (token) => {
  return axios.get(
    'https://i2x-challenge.herokuapp.com/ai/recording/list/', {
      headers: { Authorization: 'JWT ' + token }
    }
  )
  .then((res) => res.data.results)
}
