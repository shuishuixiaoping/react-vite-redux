export default {
    state: {
        name: '',
        balance: 0
    },
    action: {
        setName: (state: {name: string}, action: {value: string})=>{
            state.name = action.value
        },
        setBalance: (state: {balance: number}, action: {value: number})=>{
            state.balance = action.value
        }
    }
}