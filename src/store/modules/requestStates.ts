import { getReq, postReq } from "../../api/server/abstract"

const states = {
    state: {
        
    },
    action: {
        asyncLoading: (state: any, action:{value: { loading: boolean, url: string}} ) =>{
            state[`${action.value.url}_loading`] =  action.value.loading
        },
        asyncStates: (state, action: {value: {url: string, res: any}})=>{
            state[`${action.value.url}`] =  action.value.res
        },
    },
    asyncAction: {
        getReqAction: (payload: {url: string, params})=>{
            return (dispatch) =>{
                dispatch({type: 'asyncLoading', value: {url: payload.url, loading: true}})
                getReq(payload).then((response)=>{
                    dispatch({type: 'asyncLoading', value: {url: payload.url, loading: false}})
                    dispatch({type: 'asyncStates', value: {url: payload.url, res: response}})
                })
            }
        },
        postReqAction: (payload: {url: string, data?, params?})=>{
            return (dispatch) =>{
                dispatch({type: 'asyncLoading', value: {url: payload.url, loading: true}})
                postReq(payload).then((response)=>{
                    dispatch({type: 'asyncLoading', value: {url: payload.url, loading: false}})
                    dispatch({type: 'asyncStates', value: {url: payload.url, res: response}})
                })
            }
        }
    }
}

export default states