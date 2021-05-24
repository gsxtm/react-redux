import React , {Component} from 'react';
import {connect} from 'react-redux';
import loadPosts from '../actions/post_action';
class PostList extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }
    componentDidMount(){
        this.props.dispatch(loadPosts); //加载服务器数据
    }
    render(){
        const {list}=this.props.post_lists;
      
            const posts=list.map(post=>{
                return (<li key={post.id}>{post.title}</li>)
            })
            return(
                <div>
                    <ul>
                        {posts}
                    </ul>
                </div>
            )
        
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        post_lists: state.post
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }
// 通过连接组件connect
export default connect(mapStateToProps)(PostList)