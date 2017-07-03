import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { IStoreState } from '../store/IStoreState';
import * as actions from '../actions/cityActions';

import City from '../models/City';


type PropType = {
    cities: City[];
    name: string;
    onClick?: () => void;
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
            this.setState({ count: 88889 });
        }, 2000);
    }

    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    {`Total cities for ${this.props.name}: ${this.props.cities.length} [${this.state.count}]`}
                    <button onClick={this.props.onClick}>#</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        cities: state.citiesState,
        name: 'aytek',
        onClick: () => { alert(`Thanks`); }
    };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.CityActionType>) => {
    return {
        getCities: () => dispatch(actions.getCities())
    };
};

export default connect<{}, PropType, {}>(
    mapStateToProps,
    mapDispatchToProps
)(CityContainer);