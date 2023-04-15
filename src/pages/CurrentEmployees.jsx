import React from 'react';
import {Table} from '../components/EmployeeTable/EmployeeTable'
import {Header} from '../components/Header/Header'

export const CurrentEmployees = () => {
    return (
        <>
            <Header />
            <h2> Current Employees </h2>
            <Table />
        </>
    )
}