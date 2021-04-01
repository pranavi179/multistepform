import './App.css';
import { Route } from 'react-router-dom';
import Main from './components/main';
function App() {
	return (
		<div>
			<Route path='/' component={Main} />
		</div>
	);
}

export default App;
