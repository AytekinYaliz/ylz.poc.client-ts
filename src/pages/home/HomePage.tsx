import * as React from 'react';

import './HomePage.less';
import HelloContainer from '../../components/HelloContainer';
import CityContainer from '../../components/CityContainer';

const HomePage = () => {
    const onClickHandle = (val: string) => {
        console.log(`Hello from home: ${val}`);  //tslint:disable-line
    };

    return (
        <div>
            <HelloContainer />
            <CityContainer onClick={onClickHandle} />
            <HelloContainer />
        </div>
    );
};

export default HomePage;
