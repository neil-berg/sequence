import React from 'react';

import MedidationIcon from '@assets/meditation.svg';
import Draper from '@assets/don-draper-avatar.jpeg';

export const Home = () => {
    return (
        <div>
            <h1>Home page booya!</h1>
            <MedidationIcon width='50px' height='50px' />
            <img src={Draper} alt='Don Draper' />
        </div>
    );
};
