import React from 'react';
import './expenseFilter.css';

const ExpenseFilter = (props) =>{
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by Year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value = '2022'>2022</option>
                    <option value = '2022'>2021</option>
                    <option value = '2022'>2020</option>
                    <option value = '2022'>2019</option>
                </select>
            </div>
        </div>
    )
};

export default ExpenseFilter;