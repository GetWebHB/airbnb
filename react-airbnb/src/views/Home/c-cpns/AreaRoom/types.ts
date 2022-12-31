export interface VerifyInfo {
  messages: string[]
  text_color: string
}

export interface BottomInfo {
  content: string
  content_color: string
  font_size: string
  visibility: string
}

export interface RoomData {
  id: string
  picture_url: string
  verify_info: VerifyInfo
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  bottom_info: BottomInfo
  lat: number
  lng: number
  image_url: string
}
