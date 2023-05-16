function ExpenseDetails(data){
    return (
        <div className="expense-item__description">
            <h2>{data.title}</h2>
            <div className="expense-item__price">Rs {data.amount}</div>
            <div className="expense-item__description"><h2>{data.location}</h2></div>
        </div>  
    )
}

export default ExpenseDetails;