import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import PostView from '../components/PostView';
import { postAction } from '../redux/actions/postActions';
const Post = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(postAction.getPost())
    },[])
    const {getData} = useSelector((state)=>state.postReducer)
     return (
         <>
         {getData.data?.data?.length ?(
           <PostView data={getData.data.data}/>
         ):''
         }
        
        </>
    )
}

export default Post
