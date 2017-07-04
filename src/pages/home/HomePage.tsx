import * as React from 'react';

import './HomePage.less';
import HelloContainer from '../../components/HelloContainer';
import CityContainer from '../../components/CityContainer';

class HomePage extends React.Component<{}, {}> {
    onClickHandle = (val: string) => {
        console.log(`Hello from home: ${val}`);  //tslint:disable-line
    }

    render() {
        return (
            <div>
                <HelloContainer />
                <CityContainer onClick={this.onClickHandle} />
                <HelloContainer />
            </div>
        );
    }
}

export default HomePage;
