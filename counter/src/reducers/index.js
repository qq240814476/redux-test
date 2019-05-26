import axios from 'axios'

axios.defaults.withCredentials = true

const initalState = {
  num: 0,
  httpData: '暂无数据'
}
export const changeHttpData = (data) => ({
  type:'CHANGE',
  data: data.data
})
export const getHttpData = (state, action) => {
  return (dispatch) => {
    axios.get('http://localhost:3001/list.json').then(res => {
      dispatch(changeHttpData(res.data))
    }).catch(e=>{
      dispatch(changeHttpData('出错了'))
    })
  }
}
export default (state = initalState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        num: state.num +1
      }
    case 'DECREMENT':
      return {
        ...state,
        num: state.num -1
      }
    case 'CHANGE':
      return {
        ...state,
        httpData: action.data
      }
    default:
      return state
  }
}
