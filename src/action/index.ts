type Action = {
    type:string,
    payload?:any
}
export interface ActionFn {
    [string: string]: (payload: number) =>Action 
}

const action: ActionFn = {
    asyncAdd: (payload: number) => ({
        type: "asyncAdd",
        payload
    }),
    asyncSub: (payload: number) => ({
        type: "asyncSub",
        payload
    }),
}
export default action