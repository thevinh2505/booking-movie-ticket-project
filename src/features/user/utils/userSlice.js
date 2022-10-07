const { default: produce } = require("immer")

const initialState={
    userInfo:null,
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'USER_INFO':
            return produce(state,draft=>{
                draft.userInfo=action.payload
            })
        default:
            return {...state}
    }
}
export default reducer