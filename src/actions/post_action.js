import getPostsRequest from '../services/post_api'
const loadPosts = async (dispatch) => {
    const res = await getPostsRequest();
    dispatch({
        type: 'LOAD_POSTS',
        payload: res.data
    })
}
export default loadPosts;