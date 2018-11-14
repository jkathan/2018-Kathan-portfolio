import React from 'react';
import Brief from './brief';
import Bio from './bio';

export default function Intro(){
	return(
			<div className='home' id="home">
				<Brief />
				<Bio />
			</div>
	);
}