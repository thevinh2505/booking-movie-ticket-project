import { createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import bookingSlice from 'features/booking/utils/bookingSlice'
import authSlice from 'features/authentication/utils/authSlice'
// import loadingReducer from 'common/utils/LoadingReducer'
const rootReducer=combineReducers({
    booking:bookingSlice,
    auth:authSlice,
    // loading:loadingReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store