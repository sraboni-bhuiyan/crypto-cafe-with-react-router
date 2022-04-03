import React from 'react';

const CoinCard = ({coin}) => {
    return (
        <div>
            <p>{coin.id} + {coin.name}</p>
        </div>
    );
};

export default CoinCard;