import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { getUserInfo } from '../../services/user'
import { toast } from 'react-toastify';


const initialState = { user: {}, haveError: false, isLoading: false, error: '' }

export const fetchUserByUsername = createAsyncThunk('users/fetchUserByUsername', async (username) => {
    const response = await getUserInfo(username);
    return response.data
})

const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUserByUsername.fulfilled]: (state, action) => {
            state.user = action.payload;

        },
        [fetchUserByUsername.rejected]: (state, action) => {
            state.haveError = true;
            state.isLoading = false;
            state.error = action.error
            toast.error(`Oops, something went wrong \n ${state.error.message}`);
        }
    }
})
export const getUserData = (state) => state.users.user


export default usersReducer.reducer