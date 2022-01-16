import axios from './axios'

export const getMenu = () => {
  return axios.request({
    url: 'menu',
    methods: 'get'
  })
}

export const getHome = () => {
  return axios.request({
    url: '/home/getData',
    methods: 'get'
  })
}
