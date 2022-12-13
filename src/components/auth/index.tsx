import { useAppDispatch, useAppSelector } from "../../type"

const Auth =  ()=>{
    const dispatch = useAppDispatch()
    const {name,balance } = useAppSelector((state: RootState)=> {
        return {
          name: state.authStates.name,
          balance: state.authStates.balance
        }
      })
    const changeName = ()=>{
        dispatch({type: 'setName', value: 'doris'})
        dispatch({type: 'setBalance', value: balance + 200})
    }
    
    return <div>name: {name}-{balance}<br></br>
    <button onClick={changeName}> change name</button></div>
}
export default Auth