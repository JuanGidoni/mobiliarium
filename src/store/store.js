import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './common/commonSlice'

export const store = configureStore({
    reducer: {
        common: commonReducer
    },
})