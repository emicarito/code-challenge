import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { getAllGist, getGist } from '../../services/gist'
import { toast } from 'react-toastify';


const initialState = { gists: [], gist: {}, error: '', isLoading: false, haveError: false }


export const getAllGistByUser = createAsyncThunk('gist/getAllGistByUser', async (username) => {
    const response = await getAllGist(username);
    return response.data
})


const gistReducer = createSlice({
    name: 'gist',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllGistByUser.fulfilled]: (state, action) => {
            state.gists = action.payload;
        },
        [getAllGistByUser.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllGistByUser.rejected]: (state, action) => {
            state.haveError = true;
            state.isLoading = false;
            state.error = action.error
            toast.error(`Oops, something went wrong \n ${state.error.message}`);
        },
    }
})

export const getGists = (state) => state.gist.gists
export const haveError = (state) => state.gist.haveError
export const error = (state) => state.gist.error
export const isLoading = (state) => state.gist.isLoading
export default gistReducer.reducer