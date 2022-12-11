import createSlice from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },

    reducer: {
        increment: (state) => {
            count: state.count + 1
        },
        decrement: (state) => {
            count: state.count - 1
        },
        reset: (state, action) => {
            count: 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

