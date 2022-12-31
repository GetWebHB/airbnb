import request from '../request'

enum homeUrl {
  goodPrice = 'home/goodprice',
  discount = 'home/discount',
  hotRecommendDest = 'home/hotrecommenddest',
}

const getGoodPrice = () => request.get({ url: homeUrl.goodPrice })
const getDisCount = () => request.get({ url: homeUrl.discount })
const getHotRecommendDest = () => request.get({ url: homeUrl.hotRecommendDest })

export { getGoodPrice, getDisCount, getHotRecommendDest }
