import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeeList: [],
}

export const employeeSlice = createSlice({
    name: 'employeeDatas',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employeeList = action.payload.employeeList
        }
    }
})

export const store = configureStore({
    reducer: {
        employeeDatas: employeeSlice.reducer
    }})

export const { addEmployee } = employeeSlice.actions