import { createSlice } from '@reduxjs/toolkit';
import cricket from '../api/cricket';

const CricketSlice = createSlice({
    name: 'cricket',
    initialState: {
        isLoading: false,
        isError: false,
        errors: null,
        isLogin: false,
        crickets: null,
    },

    extraReducers: (builder) => {
        // get all users
        builder.addCase(cricket.allUser.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(cricket.allUser.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.crickets = data.data;
        });

        builder.addCase(cricket.allUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export default CricketSlice.reducer;