import { Carousel, Image } from 'antd';
import React from 'react';

const contentStyle = {
  height: '638px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const imageStyle = {
    width: '100%',
    height: '638px',
    objectFit: 'cover'
};

const Hero = () => {
  return (
    <Carousel effect="fade" style={{ background: 'white' }}>
        <div>
            <h3 style={contentStyle}>
                <img
                    style={imageStyle}
                    alt="123"
                    src="https://s3-alpha-sig.figma.com/img/8bbb/8567/90a341533ebb1e59e4e297ef2a147966?Expires=1661126400&Signature=Lb6EnyvwEvaA~8Ni80Ek5kcStk1OLdqPmcEAsMx6xIXJm5pPdLS-~oX6RjZ4mPCypopVfF6csK3PC632FXn3OOno3gOi12qSUr6Vv2fJCKm~b-sk9ZlVg65BDyWHV7GdHiBKuRb-M8homswfbEYWBYRs712Ojzj2lf26tbDg3vrqTl2USzkOaJK0nwHnQG141PSjSSVklcDM0WOOBzvCystBUjotjgvZNXIV~Ol1jGflYQV5EckW8w6cxTFXj27GQPl6PQz3XiiEoDBgceVC1NbaTXePczkjWhXzbhhR5imxe7RkGvYXFksYmLSDbAqVpioNYXKVo206xPCbFpu~QQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img
                    style={imageStyle}
                    src="https://s3-alpha-sig.figma.com/img/982b/acbc/a74d3ffdeab3facfa1d051ffb6636dea?Expires=1661126400&Signature=Qwz3BT2vAY0CZJQV24ytMfYS3HBFBIYh8~S9rCH9eoFYJLt57abGK3gILTKB3tWKyHyNc-cI6sUOlsG~-MTDZ2xL5IOicLLGhJNxpENm~RT6wW8~iwjQgY68e~vslTqdRYteZ3TBq6--eug2kOlFibb~niZs6ie3EzoRpx39ubiv3lNhJFfyP7ln~FQNr59T-LFrhX4vVj8kiyWw3GlcpgBtriQrUDKkxZTzCYempz2Q~3syT2psO0M21u2Od8vEbnHS9mq8ZaP~hMgW-8kZ6jmijqoH0wGtSm7bRF3GPFM~NQDPAyQNopFKsd3liWEbakckLQu1~niL9YmR~0rBGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <img
                    style={imageStyle}
                    src="https://s3-alpha-sig.figma.com/img/76f5/351a/18033934fe7ddadd55144cba9e1eb545?Expires=1661126400&Signature=V5C19H4pK9m38AdjROePIidev~r0tajhydIxYUHHkUypfOwT9dQ7roW3gYYuKO~NOuF4YH7zd21bAoO3Me9TFihPRpYxEJnso5858DYk~bKWqAqZu6Abl9ajmt9l59ge0ytj38KU-nMxip410nTzr9DGoT23UfjInC7o~GHJ6lJUGhZrNLoytxh3I~cd1dTQUCih6k~XFc14s3hTjaQLE-Vcasn88nnMiQpm4ju4xnJRyiiSPg0RE1PDKlmwaS3zPBQ7exUtSlKhvxfC256oxIuPAnDVlg8Y1pZ5oMgALjCEkM88aoSJdJfWSVXu1DQ3hLUfY3x5KZghp8FsSZAR-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
            </h3>
        </div>
    </Carousel>
  );
};

export default Hero;