import React, { Component, useState, useEffect} from 'react';
import GameContainer from './containers/GameContainer';
import './App.global.css';
import { Splash } from './splash-screens/Splash';

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000); 
	}, []);

	return (
		<div className='app'>
			{loading ? <Splash /> : <GameContainer />}
		</div>
	);
};

export default App;
