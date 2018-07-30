import React from 'react';

export default ({price}) => (
    <div>
        <label>Price</label>
        <input type="number" min="0" defaultValue={price} />
    </div>
);