import React from 'react';
import { Image, Price, TextBox as Title } from './elements';

export default ({item}) => {
    const {title, img, price} = item;
    return ( 
    <div style={{border:"1px solid blue"}}>
        <Title title={title}/>
        <Image img={img}/>
        <Price price={price}/>
    </div>);    
};