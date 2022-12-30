/* eslint-disable   no-unused-vars */
import {put,call,select,take,fork,takeEvery} from "redux-saga/effects";
import action from "@/action"
export default function* rootSaga(){
    yield wacthEffect()
}

function* wacthEffect(){
    yield takeEvery(action.asyncAdd().type, asyncAdd)
    yield takeEvery(action.asyncSub().type, asyncSub)
}

function* asyncAdd(){
    const data = yield call(set)
    yield put({type:'add'})
}

function* asyncSub() {
    const data = yield call(set)
    yield put({ type: 'sub' })
}


function set(){
    return new Promise(res=>{
        setTimeout(()=>{
            res(1)
        },2000)
    })
}


