import * as types from './user.types';


let initState={
    isLoading:false,isError:false,users:[]
}

export const userReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.CREATE_USER_LOADING:return{...state,isLoading:true,isError:false}
        case types.CREATE_USER_SUCCESS:return{...state,isLoading:false,isError:false,users:payload}
        case types.CREATE_USER_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}