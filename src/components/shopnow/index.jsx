import React from 'react';
import { Col, Row, Button, Image, Card } from 'antd';

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
	color: 'white'
};

const Shopnow = () => {
	return (
		<>
			<div 
				className="logo" 
				style={{ 
					width: '100%', 
					objectFit: 'cover', 
					backgroundImage: `url("https://s3-alpha-sig.figma.com/img/39f2/32a3/494c714e1df0470a1a72aa8a42287eae?Expires=1661126400&Signature=OAwc1lHDevFRT8e4GyZTlchD1ZJEtg5iWR9OVHv4hylo~8Y5HEy1rxDyyRyduWAFNzD2NPY-tjAiGTFoPi-P8SH2IgJkUte2~k2LJqzqysgbLR620j1pm2hyZ8xBXEuDebPLa63zjjFA8mYTqOKzeD3ALY-1yhtU1an1AxQp6a0bAJpdvCh-0iqLVwNWb82sqpbyiRTd3DS7AtDAjfnzrwf-~GYvITw48mbGuv-AVeRoHoOP0Rkgmn9Js2t0pyEZnJUuWifgIZzBIkWrhl04xXYwlvOoLJr5oPB~7VIrcaAxAtoy9FUyA794v2xbiDNSgzecqUJ84xRqXVKYN8QxNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")`,
					backgroundSize: 'cover'
					
				}}
			>
				<Row>
					<Col span={16}></Col>
					<Col span={8}>
						<div style={{ padding: '52px 0 474px'}}>
							<div style={arrivalContent}>Our Favorite Tees</div>
							<div style={categorieMeta}>Everyday tees you need.</div>
							<Button type="primary" style={{ marginTop: '15px' }}>Shop Now</Button>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Shopnow;