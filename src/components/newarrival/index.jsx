import React from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Col, Row, Image, Card } from 'antd';
const { Meta } = Card;

const categorieMeta = {
	fontFamily: 'Lato',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '22px',
    textAlign: 'center',
};

const arrivalContent = {
	fontFamily: 'Pacifico',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '60px',
    textAlign: 'center',
    padding: '20px',
    lineHeight: '105px'
};

const slideImages = [
    {
      url: 'https://s3-alpha-sig.figma.com/img/c3f4/2f5e/f425f76b5436b1a8e0d1cf7d602aec4c?Expires=1661126400&Signature=a1Zj6TXPDSlu6fzojsRBw0E3e69kAKknUOjkQBMcXO0c4rKoDXEsMfkjlXr~PvyYa75OT211ArnG7dlk3w~e3m4qmQqQwxskHxj1kWJsUZtwu0uO0OVL43qI1BtcEJjJ1HkO2S8~Sk4NjN6PAAW8zDiHU-qILxOu4RfL91QmIdU8jFRYuhbGIEdekHLIpaSa2h9MevSeIxqGsv0ucFF7hvR2K6sC5E4lZ59BOikJGy4RX~~UT4isxhVdTnHyd90iLx8yBeftbcrXO0dJoX0bSO5JK8k9EMdvNZHznMY4yK7V3mmOPSmFm4jB23LgvN4CEoxtPFBUWq-RGukR4GPVDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      caption: 'WOMEN’S T-SHIRT',
      desc: 'WOMEN’S T-SHIRT',
      cost: '$19.19'
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/c3f4/2f5e/f425f76b5436b1a8e0d1cf7d602aec4c?Expires=1661126400&Signature=a1Zj6TXPDSlu6fzojsRBw0E3e69kAKknUOjkQBMcXO0c4rKoDXEsMfkjlXr~PvyYa75OT211ArnG7dlk3w~e3m4qmQqQwxskHxj1kWJsUZtwu0uO0OVL43qI1BtcEJjJ1HkO2S8~Sk4NjN6PAAW8zDiHU-qILxOu4RfL91QmIdU8jFRYuhbGIEdekHLIpaSa2h9MevSeIxqGsv0ucFF7hvR2K6sC5E4lZ59BOikJGy4RX~~UT4isxhVdTnHyd90iLx8yBeftbcrXO0dJoX0bSO5JK8k9EMdvNZHznMY4yK7V3mmOPSmFm4jB23LgvN4CEoxtPFBUWq-RGukR4GPVDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      caption: 'WOMEN’S T-SHIRT',
      desc: 'WOMEN’S T-SHIRT',
      cost: '$19.19'
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/c3f4/2f5e/f425f76b5436b1a8e0d1cf7d602aec4c?Expires=1661126400&Signature=a1Zj6TXPDSlu6fzojsRBw0E3e69kAKknUOjkQBMcXO0c4rKoDXEsMfkjlXr~PvyYa75OT211ArnG7dlk3w~e3m4qmQqQwxskHxj1kWJsUZtwu0uO0OVL43qI1BtcEJjJ1HkO2S8~Sk4NjN6PAAW8zDiHU-qILxOu4RfL91QmIdU8jFRYuhbGIEdekHLIpaSa2h9MevSeIxqGsv0ucFF7hvR2K6sC5E4lZ59BOikJGy4RX~~UT4isxhVdTnHyd90iLx8yBeftbcrXO0dJoX0bSO5JK8k9EMdvNZHznMY4yK7V3mmOPSmFm4jB23LgvN4CEoxtPFBUWq-RGukR4GPVDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      caption: 'WOMEN’S T-SHIRT',
      desc: 'WOMEN’S T-SHIRT',
      cost: '$19.19'
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/c3f4/2f5e/f425f76b5436b1a8e0d1cf7d602aec4c?Expires=1661126400&Signature=a1Zj6TXPDSlu6fzojsRBw0E3e69kAKknUOjkQBMcXO0c4rKoDXEsMfkjlXr~PvyYa75OT211ArnG7dlk3w~e3m4qmQqQwxskHxj1kWJsUZtwu0uO0OVL43qI1BtcEJjJ1HkO2S8~Sk4NjN6PAAW8zDiHU-qILxOu4RfL91QmIdU8jFRYuhbGIEdekHLIpaSa2h9MevSeIxqGsv0ucFF7hvR2K6sC5E4lZ59BOikJGy4RX~~UT4isxhVdTnHyd90iLx8yBeftbcrXO0dJoX0bSO5JK8k9EMdvNZHznMY4yK7V3mmOPSmFm4jB23LgvN4CEoxtPFBUWq-RGukR4GPVDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      caption: 'WOMEN’S T-SHIRT',
      desc: 'WOMEN’S T-SHIRT',
      cost: '$19.19'
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/c3f4/2f5e/f425f76b5436b1a8e0d1cf7d602aec4c?Expires=1661126400&Signature=a1Zj6TXPDSlu6fzojsRBw0E3e69kAKknUOjkQBMcXO0c4rKoDXEsMfkjlXr~PvyYa75OT211ArnG7dlk3w~e3m4qmQqQwxskHxj1kWJsUZtwu0uO0OVL43qI1BtcEJjJ1HkO2S8~Sk4NjN6PAAW8zDiHU-qILxOu4RfL91QmIdU8jFRYuhbGIEdekHLIpaSa2h9MevSeIxqGsv0ucFF7hvR2K6sC5E4lZ59BOikJGy4RX~~UT4isxhVdTnHyd90iLx8yBeftbcrXO0dJoX0bSO5JK8k9EMdvNZHznMY4yK7V3mmOPSmFm4jB23LgvN4CEoxtPFBUWq-RGukR4GPVDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      caption: 'WOMEN’S T-SHIRT',
      desc: 'WOMEN’S T-SHIRT',
      cost: '$19.19'
    },
    {
      url: 'https://s3-alpha-sig.figma.com/img/c3f4/2f5e/f425f76b5436b1a8e0d1cf7d602aec4c?Expires=1661126400&Signature=a1Zj6TXPDSlu6fzojsRBw0E3e69kAKknUOjkQBMcXO0c4rKoDXEsMfkjlXr~PvyYa75OT211ArnG7dlk3w~e3m4qmQqQwxskHxj1kWJsUZtwu0uO0OVL43qI1BtcEJjJ1HkO2S8~Sk4NjN6PAAW8zDiHU-qILxOu4RfL91QmIdU8jFRYuhbGIEdekHLIpaSa2h9MevSeIxqGsv0ucFF7hvR2K6sC5E4lZ59BOikJGy4RX~~UT4isxhVdTnHyd90iLx8yBeftbcrXO0dJoX0bSO5JK8k9EMdvNZHznMY4yK7V3mmOPSmFm4jB23LgvN4CEoxtPFBUWq-RGukR4GPVDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      caption: 'WOMEN’S T-SHIRT',
      desc: 'WOMEN’S T-SHIRT',
      cost: '$19.19'
    }
];

const NewArrival = () => {
    const properties = {
        duration: 250,
        transitionDuration: 250,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        canSwipe: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
        <>
            <div style={arrivalContent}>New Arrivals</div>
            <div className="slide-container">
                <Slide {...properties}>
                    {slideImages.map((slideImage, index)=> (
                        <div className="each-slide" key={index} style={{ margin: '50px' }}>
                            <div>
                                <Card
                                    hoverable
                                    style={{ width: '100%' }}
                                    cover={<img alt="example" src={slideImage.url} />}
                                >
                                    <div style={categorieMeta}>{slideImage.caption}</div>
                                    <div style={categorieMeta}>{slideImage.desc}</div>
                                    <div style={categorieMeta}>{slideImage.cost}</div>
                                </Card>
                            </div>
                        </div>
                    ))} 
                </Slide>
            </div>
        </>
    );
};

export default NewArrival;