import makeAPICall from "../../utils/apicall"

class PostAction{
   addPost(obj,callback){
      return async(dispatch)=>{
          const params = {
              url:'http://localhost:2007/api/add',
              type:'post',
              dispatch,
              obj,
              callback,
              defaultAction:'POST_DATA_DEFAULT',
              successAction:'POST_DATA_SUCCESS',
              failAction:'POST_DATA_FAILED'
          }  
          await makeAPICall(params)

  }
}
updatePost(obj,callback){
    return async(dispatch)=>{
        const params = {
            url:'http://localhost:2007/api/update',
            type:'post',
            dispatch,
            obj,
            callback,
            defaultAction:'UPDATE_DATA_DEFAULT',
            successAction:'UPDATE_DATA_SUCCESS',
            failAction:'UPDATE_DATA_FAILED'
        }  
        await makeAPICall(params)

}
}
getPost(){
    return async(dispatch)=>{
        const params = {
            url:'http://localhost:2007/api/get',
            type:'get',
            dispatch,
            defaultAction:'GET_POST_DATA_DEFAULT',
            successAction:'GET_POST_DATA_SUCCESS',
            failAction:'GET_POST_DATA_FAIL'
        }
        await makeAPICall(params)
    }
}
getDetails(id,callback){
    return async(dispatch)=>{
        const params = {
            url:`http://localhost:2007/api/details/${id}`,
            type:'get',
            dispatch,
            callback,
            defaultAction:'DETAIL_POST_DATA_DEFAULT',
            successAction:'DETAIL_POST_DATA_SUCCESS',
            failAction:'DETAIL_POST_DATA_FAIL'
        }
        await makeAPICall(params)
    }
}
}
export let postAction = new PostAction()