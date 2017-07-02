import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../store/IStoreState';
import City from '../models/City';

interface CityProps {
    cities: City[];
}
// interface CityState {
//     count: number;
// }

class CityContainer extends React.Component<CityProps, object> {
    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    {`Total cities: ${this.props.cities.length}`}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        cities: state.citiesState
    };
}

export default connect(
    mapStateToProps, 
    //mapDispatchToProps
)(CityContainer);