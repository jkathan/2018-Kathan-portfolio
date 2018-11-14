import React from 'react';
import ProjectItem from './projectDescriptions';

export default function Projects(){
	return (
		<div id='projectList'>
			<div>
				<h2 className='section-heading' id='projects'>PROJECTS</h2>
				<hr />
				<ProjectItem 
					title={'Borrowd'}
					img={'https://i.imgur.com/9wdKzQe.png'} 
					alt={'Borrowd - a loaning app'}
					description={'Born from my own forgetfulness, Borrowd lets you track items that you either loaned or borrowed, set the date you wanted to get reminded on, and get notified when that item is overdue. Built using React with and node.JS backend, Borrowd is a one stop shop for all things borrowed. Designed and in three weeks.'}
					stack={'React/Redux, Node/Express/MongoDb, Passport'}
					repo={'hhttps://github.com/jkathan/borrowd'}
					deployed={'https://mighty-tundra-94742.herokuapp.com/'} 
				/>
				<ProjectItem
					title={'BooKeep'}
					img={'https://i.imgur.com/IRpghDV.png'} 
					alt={'BooKeep -- a teacher specific library management app'}
					description={'Having worked in education for the past three years, I try to keep an eye open for ways that we can make the lives of teachers easier. BooKeep is a library management website targeted at elementary school teachers who need to manage their classroom libraries. Designed and coded in three weeks.'}
					stack={'node.JS, Express, JQuery, JavaScript, MongoDB'}
					repo={'https://github.com/jkathan/BooKeep'}
					deployed={'https://infinite-river-85875.herokuapp.com/'} 
				/>
				<ProjectItem 
					title={'Open Source Photos'}
					img={'https://i.imgur.com/Ilju9us.png'} 
					alt={'OPS - A centralized location for finding royalty free photos'}
					description={'Need a photo for your website or graphic, but don’t want to pay the hefty prices that photo-sharing websites charge? Open Source Photos searches the top photo-sharing websites on the internet for royalty free photos based on your search term. Built over a three-week time period.'}
					stack={'HTML, CSS, JavaScript, jQuery, third-party APIs'}
					repo={'https://github.com/jkathan/OpenSourcePhotos'}
					deployed={'https://jkathan.github.io/OpenSourcePhotos/'} 
				/>
			</div>
		</div>
	);
}