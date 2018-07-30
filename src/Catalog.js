import React from 'react';
import ProductCard from './ProductCard';

export default ({items}) => (
    items.map( (item) => <ProductCard key={item.id} item={item}/>)
);