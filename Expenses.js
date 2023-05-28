import React, {useState} from 'react';
import ExpenseFilter from './expenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
    });

  return (
    <div>


      <Card className="expenses__card">
        <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpenseFilter>
        {filteredExpenses.length === 0 && <p>No expenses found.</p> }
        {filteredExpenses.length > 0 &&
          filteredExpenses.map(expense => (
              <ExpenseItem 
                  key={expense.id} 
                  title= {expense.title} 
                  amount = {expense.amount} 
                  date={expense.date} 
                  location = {expense.location}
              />
          )) }
        
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        />
        <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        />
        <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        />
        <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      </Card>
    </div>
  );
}

export default Expenses;