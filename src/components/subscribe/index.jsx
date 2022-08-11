import React from 'react';
import { Col, Row, Button, Input } from 'antd';

const categorieMeta = {
	fontFamily: 'Lato',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '22px',
	color: 'white'
};

const arrivalContent = {
	fontFamily: 'Pacifico',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '60px',
	color: 'white',
	textAlign: 'center',
	marginBottom: '20px'
};

const Subscribe = () => {
	return (
		<>
			<div
				style={{
					width: '100%',
					height: '332px',
					background: '#10504F',
					padding: '50px'
				}}
			>
				<div style={arrivalContent}>Sign Up & Stay Connected</div>
				<Row>
					<Col span={12}><div style={categorieMeta}>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</div></Col>
					<Col span={12}>
						<Input.Group compact>
							<Input style={{ width: 'calc(100% - 200px)' }}/>
							<Button type="primary" style={{ marginLeft: '20px' }}>Subscribe</Button>
						</Input.Group>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Subscribe;