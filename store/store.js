import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slice/AuthSlice.js';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'auth/allUser/fulfilled',
                ],
            },
        }),
});
export default store;