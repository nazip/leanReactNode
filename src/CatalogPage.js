import React from 'react';
import Catalog from './Catalog';
import items  from './constants/Products';

class CatalogPage extends React.Component {
    render() {
        return <Catalog items={items} />;
    };
};

export default CatalogPage; 