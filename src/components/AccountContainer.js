import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const BankAPI ='http://localhost:8001/transactions'


function AccountContainer() {
const [transactions, setTransactions] = useState([]);
const [searchTerm, setSearchTerm] =useState('')
useEffect(() => {
  fetch(BankAPI)
  .then(res => res.json())
  .then(setTransactions);
}, [])


 const addNewTransaction = (newTransaction) => {
  setTransactions([...transactions, newTransaction])
 }
const filteredTransactions = transactions.filter(trans => trans.description.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTransactionForm addNewTransaction={addNewTransaction}/>
      <TransactionsList transactions={filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
