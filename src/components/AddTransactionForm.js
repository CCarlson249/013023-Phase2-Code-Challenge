import React, {useState} from "react";

function AddTransactionForm({addNewTransaction}) {
  const [date, setDate] = useState('')
  const [description, setDescription] =useState('')
  const [category, setCategory] =useState('')
  const [amount, setAmount] =useState(0)

  function handleSubmit(e) {
    e.preventDefault()

    let newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: amount
    }
    fetch('http://localhost:8001/transactions',{
      method: 'POST',
      headers: {
        Accepts: 'application/json',
      'Content-type' : 'application/json',
  },
  body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(addNewTransaction(newTransaction))
  }



  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
          <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" name="category" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
