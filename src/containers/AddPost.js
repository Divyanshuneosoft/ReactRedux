import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import AddPostView from '../components/AddPostView';
import { postAction } from '../redux/actions/postActions';

const AddPost = (props) => {
    const [id,setId] = useState(null)
    const history = useHistory()
    useEffect(()=>{
        if(props.match.params){
            setId(props.match.params.id)
        }

    },[])
  
    const dispatch = useDispatch()
    const onSubmit = (data)=>{
        if(id){
            data.id = id;
            console.log(data)
            return dispatch(postAction.updatePost(data,()=>{
                history.push('/')
            }))
        }
      dispatch(postAction.addPost(data,()=>{
          history.push('/')
      }))

    }
    return (
        <AddPostView submit={onSubmit} id= {id}/>
            
    )
}

export default AddPost
