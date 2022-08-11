import React from 'react';

const adStyle = {
	height: '58px',
	color: '#fff',
	padding: '16px',
	textAlign: 'center',
	background: '#000000',
};

const adContent = {
	fontFamily: 'Lato',
	fontStyle: 'normal',
	fontWeight: '500',
	fontSize: '14px',
	lineHeight: '17px',
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
	color: '#FFFFFF',
};

const Ad = () => {
	return (
		<>
			<div  style={adStyle}><span style={adContent}>FREE SHIPPING ON ALL ORDERS OVER $75</span></div>
		</>
	);
};

export default Ad;