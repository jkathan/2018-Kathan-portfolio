import React from 'react';
import TagLine from './brief';
import Bio from './bio';

export default function Intro(){
	return(
			<div className='home' >
				<TagLine />
				<Bio />
			</div>
	);
}