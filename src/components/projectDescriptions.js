import React from 'react';

export default function ProjectItem(props){
	return (
		<div className='project row'>
			<div className='webPhoto'>
				<img src={props.img} alt={props.alt}/>
			</div>
			<div className='projectContent'>
				<div className='project-desc'><h3 className='strong'>{props.title}:</h3> {props.description}</div>
				<div>
				<h4 className='strong'>Tech stack:</h4> 
				<div className='techStack'>
					{props.stack}
				</div>
				</div>
				<div className='links'>
					<a href={props.repo}><button>Github repo</button></a>  
					<a href={props.deployed}><button>Live app</button></a>
				</div>
			</div>
		</div>
	);
}