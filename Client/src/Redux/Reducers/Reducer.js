import { ADD_NAME } from "../ActionType";
import {ADD_BLOG} from "../ActionType";

const initialState = {
  name : '',
  blog : ''
}

function RootReducer(state=initialState,action){

  // const arr = JSON.parse(JSON.stringify(state.blog))

  // console.log("before : ",arr.length);

  // arr.push(action.blog)

  if(action.type == ADD_NAME){
    return Object.assign({},state,{
      name : action.name
    })
  }else if(action.type == ADD_BLOG){
    return Object.assign({},state,{
      blog : action.blog
    })
  }
  return state
}

export default RootReducer;