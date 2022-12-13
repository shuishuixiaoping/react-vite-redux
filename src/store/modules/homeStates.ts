export default {
    state: {
        list: [],
    },
    action: {
        setList: (state: {list: []}, action: {value: []})=>{
            state.list = action.value
        },
    }
}