import { memo, useEffect } from "react";
import requestStates from '../../store/modules/requestStates'
import { useAppDispatch, useAppSelector } from "../../type";
const Home =  ()=>{
    const getUrl = '/api/all'
    const dispatch = useAppDispatch()
    const {list, isLoading} = useAppSelector((state: RootState)=>{
        return {
            list: state.requestStates[getUrl],
            isLoading: state.requestStates[`${getUrl}_loading`],
        };
    })
   
    useEffect(()=>{
        dispatch(requestStates.asyncAction.getReqAction({url: getUrl, params: {size: 20}})) 
    }, [])

    return <div>
        {isLoading || !list ? <div>加载中</div> : <div>
            {list.map((item, index)=>{
                return <div key={index}>{item.collection_name}</div>
            })}
            </div>}
       
    </div>
}
export default memo(Home)