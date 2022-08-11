import React from 'react';
import { Layout } from 'antd';
import AdComponent from '../../components/ad';
import HeaderComponent from '../../components/header';
import HeroComponent from '../../components/hero';
import CategorieComponent from '../../components/categorie';
import NewArrivalComponent from '../../components/newarrival';
import ShopNowComponent from '../../components/shopnow';
import SubscribeComponent from '../../components/subscribe';
import FooterComponent from '../../components/footer';

const { Header, Content, Footer } = Layout;

const Main = () => {

  return (
    <>
        <Layout className="layout">
            <AdComponent />
            <HeaderComponent />
            <HeroComponent />
            <Content style={{ padding: '50px', background: 'white' }}>
                <CategorieComponent />
                <NewArrivalComponent />
            </Content>
            <ShopNowComponent />
            <SubscribeComponent />
            <FooterComponent />
        </Layout>
    </>
  );
};

export default Main;