import axios from '@/network/axios'

// 首页信息
export const queryfirst = () => {
    return axios.request({
        url: '/home/multidata',
        method: 'get'
    })
}

// 首页流行信息
export const queryhomepop = ({ id }) => {
    return axios.request({
        url: '/home/pop',
        method: 'get',
        params: { id }
    })
}

// 首页精选信息
export const queryhomesell = ({ id }) => {
    return axios.request({
        url: '/home/sell',
        method: 'get',
        params: { id }
    })
}

// 首页新款信息
export const queryhomenews = ({ id }) => {
    return axios.request({
        url: '/home/news',
        method: 'get',
        params: { id }
    })
}

// 详情页的数据
export const querydetail = ({ goodsId }) => {
    return axios.request({
        url: '/detail',
        method: 'get',
        params: { goodsId }
    })
}

// 详情页的推荐信息
export const querydetailrecommend = () => {
    return axios.request({
        url: '/detail/recommend',
        method: 'get',
    })
}

// 分类标题信息
export const querycategorytitle = () => {
    return axios.request({
        url: '/category/title',
        method: 'get'
    })
}

// 分类详细信息
export const querycategoryitem = ({ maitKey }) => {
    return axios.request({
        url: '/category/item',
        method: 'get',
        params: { maitKey }
    })
}