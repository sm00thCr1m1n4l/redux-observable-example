import {Todo} from './types'
const response=async <T>(data:T)=>{
await new Promise((resolve,reject)=>{
  setTimeout(resolve, 2000);
})
  return data
}
export const fetchTodos=()=>{
  const todos:Todo[]=new Array(10).fill(undefined).map((i,index)=>{
    return {
      id:index,
      realName:`this is reale name ${index}`,
      email: `email${index}@some.com`
    }
  })
  return response(todos)
}