import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { IStoreState } from '../store/IStoreState';
import * as actions from '../actions/cityActions';

import City from '../models/City';


type PropType = {
    cities: City[];
};
type StateType = {
    count: number;
};

class CityContainer extends React.Component<PropType, StateType> {
    state = {
        count: 555
    };

    constructor(props: PropType) {
        super(props);

        setTimeout(() => {
            this.setState({ count: 8888 });
        }, 2000);
    }

    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    {`Total cities: ${this.props.cities.length} [${this.state.count}]`}
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
function mapDispatchToProps(dispatch: Dispatch<actions.CityActionType>) {
    return {
        getCities: () => dispatch(actions.getCities())
    };
}

export default connect<{}, PropType, {}>(
    mapStateToProps,
    mapDispatchToProps
)(CityContainer);