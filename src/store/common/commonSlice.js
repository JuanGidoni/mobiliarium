import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = false
        },
    },
})

export const { setLoading } = commonSlice.actions

export default commonSlice.reducer