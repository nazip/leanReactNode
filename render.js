import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CatalogPage from './src/CatalogPage';

const app = ReactDOMServer.renderToString(<CatalogPage />);

export default app;