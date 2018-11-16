import React from 'react';

export default function Contacts(){
	return (
                <div className="contact">
                    <h2 className='heading' ref="contact">Contact</h2>
                    <hr />
                    <ul >
                        <a href="mailto:kathan.joey@gmail.com" target="_blank" rel="noopener noreferrer"><li><img src="https://i.imgur.com/wM05Dap.png" alt="email logo" className='contactImages'/></li></a>
                        <a href="https://twitter.com/joeykathan" target="_blank" rel="noopener noreferrer"><li><img src="https://i.imgur.com/IGngRbt.png" alt="twitter logo" className='contactImages'/></li></a>
                        <a href="https://github.com/jkathan" target="_blank" rel="noopener noreferrer"><li><img src="https://i.imgur.com/fuLVv1g.png" alt="github logo" className='contactImages'/></li></a>
                        <a href="https://www.linkedin.com/in/joseph-kathan-07452361/" target="_blank" rel="noopener noreferrer"><li><img src="https://i.imgur.com/X3tWkNl.png" alt="linkedin logo" className='contactImages'/></li></a>
                    </ul>
                </div>
	);
}