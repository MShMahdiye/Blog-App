import { ADD_NAME } from "../ActionType";
import {ADD_BLOG} from "../ActionType";

export function AddName(name){
  console.log("received name in redux : ",name);
  return {type:ADD_NAME,name}
}

export function AddBlog(blog){
  console.log("received blog in redux : ",blog);
  return {type:ADD_BLOG,blog}
}