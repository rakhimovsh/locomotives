import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from './reducers/auth';
import teacher from './reducers/teacher';
import subject from './reducers/subject';
import news from './reducers/news';
import laboratory from './reducers/laboratory';


const rootReducer = combineReducers({ auth, teacher, subject, news, laboratory });


export default configureStore({ reducer: rootReducer });