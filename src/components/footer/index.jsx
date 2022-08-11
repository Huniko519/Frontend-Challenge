import React from 'react';
import { Row, Layout, Col } from 'antd';
import { SocialIcon } from 'react-social-icons';

const { Header, Content, Footer } = Layout;

const categorieMeta = {
	fontFamily: 'Lato',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '22px',
	color: 'white'
};

const arrivalsubContent = {
	fontFamily: 'Lato',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '16px',
	margin: '10px 0 10px',
	color: 'white'
};

const HeaderC = () => {
	return (
		<>
			<Footer
				style={{
					width: '100%',
					height: '416px',
					background: '#000000',
					paddingTop: '50px'
				}}
			>
				<Row>
					<Col span={4}>
						<div style={categorieMeta}>Customer Service</div>
						<div style={arrivalsubContent}>Accessibility</div>
						<div style={arrivalsubContent}>Contact US</div>
						<div style={arrivalsubContent}>Return</div>
						<div style={arrivalsubContent}>Policy</div>
						<div style={arrivalsubContent}>FAQ</div>
						<div style={arrivalsubContent}>Gift</div>
						<div style={arrivalsubContent}>Certificates</div>
						<div style={arrivalsubContent}>Wishlist</div>
					</Col>
					<Col span={4}>
						<div style={categorieMeta}>Company</div>
						<div style={arrivalsubContent}>About Us</div>
						<div style={arrivalsubContent}>Careers</div>
						<div style={arrivalsubContent}>Press</div>
						<div style={arrivalsubContent}>Affiliates</div>
					</Col>
					<Col span={4}></Col>
					<Col span={4}></Col>
					<Col span={4}></Col>
					<Col span={4}>
						<div style={categorieMeta}>Follow Us</div>
						<SocialIcon network="linkedin" />
						<SocialIcon network="instagram" />
					</Col>
				</Row>
				
			</Footer>
		</>
	);
};

export default HeaderC;