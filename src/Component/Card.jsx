import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const CardComp = () => (
    <Card
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        onClick={() => { window.open("https://www.instagram.com") }}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
);
export default CardComp;