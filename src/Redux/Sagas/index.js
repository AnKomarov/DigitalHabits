import { call, put, takeLeading } from 'redux-saga/effects'
export async function getInitialData () {
  const request = await fetch('http://164.90.161.80:3000/api/content')
  const data = await request.json()
return data
}

export async function getFolderData (dirId) {
  const request = await fetch(`http://164.90.161.80:3000/api/content?dirId=${dirId}`)
  const data = await request.json()
return data
}

export function* loadAdditionalData(action) {
  const folderData = yield call(getFolderData, action.parent_id)
  yield put({ type: 'ADD_DATA', payload: folderData })
}

export default function* rootSaga() {
  const initialData = yield call(getInitialData)
  yield put({type: 'LOAD_INITIAL_DATA', payload: initialData})

  yield takeLeading('ADD_DATA', loadAdditionalData)
}