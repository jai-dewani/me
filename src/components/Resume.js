import React from 'react';
import right from '../img/arrow-right.svg';

const resume = () => {
	var RESUME = "https://drive.google.com/file/d/1G1G9dhEUF-hOYDlxM2WzKeeSMLCGGEHG/view?usp=sharing"
	return (
		<div class="resume">
			<a href={RESUME} target="_blank" rel="noopener noreferrer">
				View my resume <img  src={right} alt="right" />
			</a>
		</div>
	)
}

export default resume;
