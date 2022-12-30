import {applyMiddleware, createStore} from "redux";
import createSaga from 'redux-saga';
import reducer from './reducer'
import rootSaga from "@/saga"


const Saga = createSaga();
const store = createStore(reducer,applyMiddleware(Saga))
Saga.run(rootSaga)

export default store

