// File này có nhiệm vụ: Export file xung quanh ra ngoài => bên ngoài chỉ cần import './store' k cần chỉ định rõ file nữa

export { default as StoreProvider } from './Provider'
export { default as StoreContext } from './Context'
// export tất cả trong hooks
export * from './hooks'
// export * actions nhưng dùng alias name | actions là obj | => lấy tất cả bên trong file -> quy thành obj
export * as actions from './actions'