import React from 'react';

export default function ProjectDesc(props){
	return (
		<div className='project row'>
			<div className='webPhoto'>
				<a href={props.live} target="_blank" rel="noopener noreferrer"><img src={props.img} alt={props.alt}/></a>
			</div>
			<div className='projectContent'>
				<div>
					<h3 className='bold'>{props.title}</h3> 
					<div className='project-desc'>
						{props.description}
					</div>
				</div>
				<div>
				<h4 className='bold'>Tech:</h4> 
				<div className='techStack'>
					{props.tech}
				</div>
				</div>
				<div className='links'>
					<a href={props.repo}><button className="button1">Github repo</button></a>  
					<a href={props.live}><button className="button2">Live app</button></a>
				</div>
			</div>
		</div>
	);
}