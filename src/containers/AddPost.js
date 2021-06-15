import React,{useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import AddPostView from '../components/AddPostView';
import { postAction } from '../redux/actions/postActions';

const AddPost = (props) => {
    const [updatedData,setUpdatedData] = useState(null)
    const history = useHistory()
    const [id,setId] = useState(null)
    const {getDetail} = useSelector(state=>state.postReducer)
    const dispatch = useDispatch()
    const onSubmit = (data)=>{
        if(id){
            data.id = id;
            return dispatch(postAction.updatePost(data,()=>{
                history.push('/')
            }))
        }
      dispatch(postAction.addPost(data,()=>{
          history.push('/')
      }))

    }
    function patchValue(data){
        const patchData = {}
        Object.keys(data.data).forEach(key=>{
            if(!['_id','_v'].includes(key)) patchData[key] = data.data[key]
        })
        setUpdatedData(patchData)
    }
    useEffect(()=>{
        if(props.match.params.id){
            setId(props.match.params.id)
            dispatch(postAction.getDetails(props.match.params.id))
        }

    },[id])
  
    useEffect(()=>{
        if(getDetail.data) patchValue(getDetail.data)
    },[getDetail])
    return (
        <AddPostView submit={onSubmit} updatedData= {updatedData}/>
            
    )
}

export default AddPost
