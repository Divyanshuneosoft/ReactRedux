import axios from "axios"

const makeAPICall = async(params)=>{
  try {
      params.dispatch({type:params.defaultAction})
      let data;
      if(params.obj){
          data = params.obj
      }
      let response  = await axios[params.type](params.url,data)
      params.dispatch({type:params.successAction,payload:response?.data})
      params.callback(response?.data);
  } catch (error) {
      params.dispatch({type:params.failAction,payload:error.response?.data})
  }
}
export default makeAPICall