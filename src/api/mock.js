import Mock from 'mockjs'
import homeApi from '@/api/mockServerData/home'

Mock.mock('/api/home/getData', homeApi.getStatisticalData)
