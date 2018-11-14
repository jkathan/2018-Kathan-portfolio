import React from 'react';

export default function Contacts(){
	return (
                <div id="contact">
                    <h2 className='section-heading'>Contact</h2>
                    <hr />
                    <ul >
                        <a href="mailto:kathan.joey@gmail.com"><li><img src="https://i.imgur.com/wM05Dap.png" alt="email logo" className='contactImages'/></li></a>
                        <a href="https://twitter.com/joeykathan"><li><img src="https://i.imgur.com/IGngRbt.png" alt="twitter logo" className='contactImages'/></li></a>
                        <a href="https://github.com/jkathan"><li><img src="https://i.imgur.com/fuLVv1g.png" alt="github logo" className='contactImages'/></li></a>
                        <a href="https://www.linkedin.com/in/joseph-kathan-07452361/"><li><img src="https://i.imgur.com/X3tWkNl.png" alt="linkedin logo" className='contactImages'/></li></a>
                    </ul>
                </div>
	);
}