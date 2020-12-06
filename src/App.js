import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Expense from './components/incomeExpenses';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<GlobalProvider>
				<div className="container">
					<Balance />
					<Expense />
					<TransactionList />
					<AddTransaction />
				</div>
			</GlobalProvider>
		</div>
	);
}

export default App;
