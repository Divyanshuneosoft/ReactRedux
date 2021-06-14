const initialState = {
        addData:{
            loading:false,
            error:null,
            data:null
    
        },
        getData:{
            loading:true,
            error:null,
            data:null
        },
        getDetail:{
            loading:false,
            error:null,
            data:null
        }

}
const postReducer = (state=initialState,action)=>{
 switch(action.type){
   case 'POST_DATA_SUCCESS':
       return {
           ...state,
           addData:{
            loading:false,
            error:null,
            data:action.payload,

           }
       }
    case 'POST_DATA_FAILED':
        return {
            ...state,
            addData:{
                loading:false,
                error:"Something went wrong",
                data:null
            }
           
        }  
    case 'POST_DATA_DEFAULT':
        return {
            ...state,
            addData:{
                loading:false,
                error:null,
                data:null
            }
           
        }
    case 'GET_POST_DATA_DEFAULT':
        return {
            ...state,
            getData:{
                loading:true,
                error:null,
                data:null

            }

        }   
        case 'GET_POST_DATA_SUCCESS':
            return {
                ...state,
                getData:{
                    loading:false,
                    error:null,
                    data:action.payload
                }
    
            }    
            case 'GET_POST_DATA_FAILED':
                return {
                    ...state,
                    getData:{
                        loading:true,
                        error:'something went wrong',
                        data:null
        
                    }
                }  
            case 'DETAIL_POST_DATA_DEFAULT':
                return {
                    ...state,
                    getDetail:{
                        loading:true,
                        error:null,
                        data:null
                    }
                } 
            case 'DETAIL_POST_DATA_SUCCESS':
                return {
                    ...state,
                    getDetail:{
                        loading:false,
                        error:null,
                        data:action.payload
                    }
                } 
            case 'DETAIL_POST_DATA_FAILED':
                return {
                    ...state,
                    getDetail:{
                        loading:false,
                        error:null,
                        data:action.payload
                    }
                }
                case 'UPDATE_DATA_SUCCESS':
                    return {
                        ...state,
                        addData:{
                         loading:false,
                         error:null,
                         data:action.payload,
             
                        }
                    }
                 case 'UPDATE_DATA_FAILED':
                     return {
                         ...state,
                         addData:{
                             loading:false,
                             error:"Something went wrong",
                             data:null
                         }
                        
                     }  
                 case 'UPDATE_DATA_DEFAULT':
                     return {
                         ...state,
                         addData:{
                             loading:false,
                             error:null,
                             data:null
                         }
                        
                     }             
    default:
        return state
 }

}
export default postReducer