import * as types from './post.types';


let initState={
    isLoading:false,isError:false,posts:[]
}

export const postReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.CREATE_POST_LOADING:return{...state,isLoading:true,isError:false}
        case types.CREATE_POST_SUCCESS:return{...state,isLoading:false,isError:false,posts:payload}
        case types.CREATE_POST_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}