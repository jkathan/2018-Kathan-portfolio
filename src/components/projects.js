import React from 'react';
import ProjectDesc from './projectDescriptions';

export default function Projects(){
	return (
		<div ref='projectList'>
			<div>
				<h2 className='heading' id='projects'>Projects</h2>
				<hr />
				<ProjectDesc 
					title={'Borrowd'}
					img={'https://i.imgur.com/9wdKzQe.png'} 
					alt={'Borrowd - a loaning app'}
					description={'Born from my own forgetfulness, Borrowd lets you track items that you either loaned or borrowed, set the date you wanted to get reminded on, and get notified when that item is overdue. Built using React with and node.JS backend, Borrowd is a one stop shop for all things borrowed. Designed and in three weeks.'}
					tech={'React/Redux, Node/Express/MongoDb, Passport'}
					repo={'https://github.com/jkathan/borrowd'}
					live={'https://mighty-tundra-94742.herokuapp.com/'} 
				/>
								<hr />
				<ProjectDesc
					title={'BooKeep'}
					img={'https://i.imgur.com/IRpghDV.png'} 
					alt={'BooKeep -- a teacher specific library management app'}
					description={'Having worked in education for the past three years, I try to keep an eye open for ways that we can make the lives of teachers easier. BooKeep is a library management website targeted at elementary school teachers who need to manage their classroom libraries. Designed and coded in three weeks.'}
					tech={'node.JS, Express, JQuery, JavaScript, MongoDB'}
					repo={'https://github.com/jkathan/BooKeep'}
					live={'https://infinite-river-85875.herokuapp.com/'} 
				/>
				<hr />
				<ProjectDesc 
					title={'Open Source Photos'}
					img={'https://i.imgur.com/Ilju9us.png'} 
					alt={'OPS - A centralized location for finding royalty free photos'}
					description={'Need a photo for your website or graphic, but don’t want to pay the hefty prices that photo-sharing websites charge? Open Source Photos searches the top photo-sharing websites on the internet for royalty free photos based on your search term. Built over a three-week time period.'}
					tech={'HTML, CSS, JavaScript, jQuery, third-party APIs'}
					repo={'https://github.com/jkathan/OpenSourcePhotos'}
					live={'https://jkathan.github.io/OpenSourcePhotos/'} 
				/>
			</div>
		</div>
	);
}