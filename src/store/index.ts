import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'

//const modulesFiles = require['context']('./modules', true, /\.ts$/); //webpack
const modulesFiles:{} = import.meta.glob('./modules/*.ts', { eager: true })
const reducers = {}
const modules = {}
for (const key in modulesFiles) {
    let moduleName = key.replace(/(\.\/module\/|\.ts)/g, '').split('/')[2]
    modules[moduleName] =  modulesFiles[key]['default']
    let reducer = (state = modules[moduleName].state, action: {type: string})=> {    
        if (modules[moduleName].action[action.type]){
            let newState = JSON.parse(JSON.stringify(state));
            modules[moduleName].action[action.type](newState, action)
            return newState
        }
        return state;
       }
    reducers[moduleName] = reducer     
}

const combine = combineReducers(reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const store = legacy_createStore(combine, composeEnhancers(applyMiddleware(reduxThunk)))
export default store