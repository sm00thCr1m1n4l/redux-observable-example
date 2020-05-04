export type TheAction<P = any, M = any>={
  action: string,
  payload?:P,
  meta?: M,
}
export const genSetPrefix=(prefix:string)=>(action:string)=>`${prefix}/${action}`