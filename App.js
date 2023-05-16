// import logo from './logo.svg';
import ExpenseItem from './components/Expenses/ExpenseItem';
// import './App.css';
import './index.css';

const App = () => {
  const expenses = [
    {
      id : 'e1',
      title : 'Toilet Paper',
      amount : 100,
      date : new Date(2020, 7, 14),
      LocationOfPurchase : 'Andhra Pradesh'
    },
    {
      id : 'e2',
      title : 'Car insurance',
      amount : 200,
      date : new Date(2021 , 2 , 28),
      LocationOfPurchase : 'GOA'
    },
    {
      id : 'e3',
      title : 'New Tv',
      amount : 500,
      date : new Date(2023 , 5, 15),
      LocationOfPurchase : 'Uttar Pradesh'
    },
    {
      id : 'e4',
      title : 'New Phone',
      amount : 1000,
      date : new Date(2024 , 6, 15),
      LocationOfPurchase : 'Himachal Pradesh'
    }
  ]
  return (
    <div>
      {expenses.map((e) =>{
        return (
          <ExpenseItem title = {e.title} amount = {e.amount} date = {e.date} location = {e.LocationOfPurchase}></ExpenseItem>
        )
      })}
      {/* <h2>Lets Start here</h2> */}
     {/* <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date} location = {expenses[0].LocationOfPurchase}></ExpenseItem>
     <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date} location = {expenses[1].LocationOfPurchase}></ExpenseItem>
     <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date} location = {expenses[2].LocationOfPurchase}></ExpenseItem>
     <ExpenseItem title = {expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date} location = {expenses[3].LocationOfPurchase}></ExpenseItem> */}
    </div>
  );
}
export default App;
