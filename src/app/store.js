import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducer/userStore'
import gistReducer from './reducer/gistStore'

export default configureStore({
  reducer: {
    users: usersReducer,
    gist: gistReducer
  },
});
