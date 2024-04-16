import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#00ffff',
    margin: '20px',
};
const CarouselComp = () => (
    <Carousel autoplay style={{ background: '#00ffff' }}>
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);
export default CarouselComp;