import { configureStore } from '@reduxjs/toolkit';
import reducer from '../Redux/counterSlice';

const store = configureStore({
    reducer: {
        counter: reducer
    }
})

export default store;