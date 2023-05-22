import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import ExpenseDetails from './ExpenseDetails';



const ExpenseItem = (data) => {
    const [title, setTitle] = useState(data.title);
    const [amount, setAmount] = useState(data.amount);



    function clickHandler(){
        setTitle('Updated');
        console.log(title)
    };
    function changeExpense(){
        setAmount('100')
        console.log(amount)
    } 
    return (
        <div className="expense-item">
            <ExpenseDate date={data.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            {/* <ExpenseDetails title = {data.title} amount = {data.amount} location = {data.location}/> */}
            <button onClick={clickHandler}>Change title</button>
            <button onClick={changeExpense}>Change Expense</button>
        </div>

    );
}

export default ExpenseItem;