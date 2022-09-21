import { createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import bookingSlice from 'features/booking/utils/bookingSlice'
import authSlice from 'features/authentication/utils/authSlice'
const rootReducer=combineReducers({
    booking:bookingSlice,
    auth:authSlice,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export default store