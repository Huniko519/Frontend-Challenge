import React from 'react';
import { Col, Row, Image, Card } from 'antd';
const { Meta } = Card;

const categorieMeta = {
	fontFamily: 'Pacifico',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '40px',
    textAlign: 'center',
};

const Categorie = () => {
    return (
        <>
            <div className="site-card-wrapper" style={{ background: 'white' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                            cover={<img alt="example" src="https://s3-alpha-sig.figma.com/img/3292/0f3d/3ff847748754212ea145ef23f7cb6817?Expires=1661126400&Signature=Ne65hCRcUDNaoGn9ljhDjQMJ-7BCmulKSQFgZdDyF8tQvD8V48J4J0jbMk8ysV0aSHJLewCTPsgGidcG5zKkIQF2LkLVGXRMl9Q5vgEUBXULFUjDeh2UfDuCixVXP~1XuOmBbO4~kDf2Y-oonkZsgMggRtmH3m8m97sWetR0kGA3ut~R0A0-MWh272u2LQRRvXWZ7RlPR8hevi7i6f0PiggtnsXtWecigoQVaCLWmWw4DEHJeHG8CAdPH~Kx9IRdXXUAf~3eQNJWq3WyUbzrXXWRNhD4LbSBHt5NZtu5R-1oxZi76454MXKJfZiAOtOxqtcODlrYnAK9DLUJSZfDxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />}
                        >
                            <div style={categorieMeta}>Women's</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: '100%'  }}
                            cover={<img alt="example" src="https://s3-alpha-sig.figma.com/img/be4c/bb40/9c2986f444807a21b129ff7418a333d3?Expires=1661126400&Signature=FEVX2HKjBfe6pL7yIXaoQYLLtUJTAiVQKo0Ro5hNZADnzGhFOKxua7ra~ZG7KlqfthGRDpeCFP0whrCLHPEQKRXGlDC-zbyHktd9DhE3V8U6m39cPwcJ4iTU7DXUxb46Kd13ZSE3qA02Ap3JwiM7Esy8P7mpSmKkzdyW98em2N6DBAfwuE-CjS4R2U3G5tnViAVQXa2T2x6T1GIh8JtEliTCqxXsvdGHsdXggzPYofJrz0sZAF-t-YYjVh8TaYg9dqNigibXLnKRvMmcNoFAn9MVIfM7FSzrk-bnIe4pPal5KpMsbU-HCNUt7pnjQW8tWR~1PtIsMLW-2ndsttzC0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />}
                        >
                            <div style={categorieMeta}>Men's</div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                            cover={<img alt="example" src="https://s3-alpha-sig.figma.com/img/1b59/80c8/1816b0857f3ece63180ec2c2e010b6aa?Expires=1661126400&Signature=bWp1ecJogpQ0btpcF5UrqzR5IpSCtQfvvp3NFwnRdlZeGbkDPaS961ZGAGbwDgKxXiXHuGSDbALE3HLrvmwEM6Q7ycYwF86sMdY5aL8fLT9FJIawqkU4FyIp1ijUKJ0dGvFQVNOh4zlBA9Xc8ofiAHVL30LRaUcKlc3qo7uIjYYdq0Z-iDxMlD-8WgGmfpymsxa7fykLKTmr~0U4gxh8ong8URQmXQfYyGz06coDNbraamp1xuOw4AdAl9~BzTLmsLtTPvB6qB4-M10ZoN6MyuS6aTwKeqxJqExMcpucvJWBCuV2vwSV0RmE-RQTr56-MrQu367jCvf3ymLOEFuxGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />}
                        >
                            <div style={categorieMeta}>Accessories</div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Categorie;