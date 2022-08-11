import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const logo = {
	fontFamily: 'Lato',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '22px',
	color: 'white'
};
const HeaderC = () => {
	return (
		<>
			<Header
				style={{
					width: '100%',
					height: '138px',
					background: '#10504F',
					padding: '30px 70px'
				}}
			>
				<div style={logo}>
					<img src="https://s3-alpha-sig.figma.com/img/d3f7/4826/0edc0e553d1c270913a4ea35a983030f?Expires=1661126400&Signature=bGSCqMQRmCrB-TRLTIrAQwA3wUP9x2bERNq4DjZ4UT4O0Jk1BrY5fS-9VDl0iA~5EkXtBbEoPtLJdYIou6CQWr-LSflLlSOE721TaBHbVpdjlqpm1RaUYu7XZ0zCP3XQoQbNFYMcQqrMmgBNPaPMZUdPuiYWdLVgi8WEbidHU4bu3vu5ZgGbd~uOWWuJkwr6EkWXNi1GiTDWfeWR2vniUQ8yQMQ9VVjayo73taPrYzyxU~mrBBm7WrMNghF5rOmQifZKR9nV9l5ZJGpNQDlPJbLVXFsVzBhryvW3Ulo9H~fYeEJAxXk5xL8Zj~t508XU27dCOoCwqqQJmQTK9wwcpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
				</div>
			</Header>
		</>
	);
};

export default HeaderC;