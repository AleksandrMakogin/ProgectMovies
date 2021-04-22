import React from 'react';
import './App.css';

import { Header } from './Layuot/Header';
import { Footers } from './Layuot/Footer';
import { Main } from './Layuot/Main';

function App() {
	return (
		<>
			<Header />
			<Main />
			<Footers />
		</>
	);
}

export default App;
