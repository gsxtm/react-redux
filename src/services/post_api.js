import axios from 'axios';
//发送api请求
const getPostsRequest=()=>{
  return axios.get('http://jsonplaceholder.typicode.com/posts')
}
export default getPostsRequest;