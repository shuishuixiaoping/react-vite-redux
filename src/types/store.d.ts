type RootState = ReturnType<typeof import('../store').getState>
type AppDispatch = typeof import('../store').dispatch
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:Function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:Function;
}