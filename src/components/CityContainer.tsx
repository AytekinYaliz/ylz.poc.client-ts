import * as React from 'react';
//import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';

import { IStoreState } from '../store/IStoreState';
import * as cityActions from '../actions/cityActions';

import City from '../models/City';

interface StateProps {
    cities: City[];
    name: string;
}
interface DispatchProps {
    logCityName: () => void;
}
interface OwnProps {
    onClick?: (val: String) => void;
}
type HomeProps = StateProps & DispatchProps & OwnProps;

interface State {
    count: number;
    count2?: number;
}


//@connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)
class CityContainer extends React.Component<HomeProps, State> {
    state = {
        count: 33
    };
    constructor(props: HomeProps) {
        super(props);
        
        setTimeout(() => {
            this.setState({ count: 8888999 });
            setTimeout(() => {
                this.setState({ count: 4400 });
            }, 2000);
        }, 2000);
    }

    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick(String(this.state.count));
        } else {
            console.log(`Hello from CityContainer: ${this.state.count}`);   // tslint-disable-line
        }
    }

    render() {
        return (
            <div className="hello">
                <div className="greeting">
                    {`Total cities for ${this.props.name}: ${this.props.cities.length} [${this.state.count}]`}
                    <button onClick={this.onClick}>Alert</button>
                    <button onClick={this.props.logCityName}>log</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        cities: state.citiesState,
        name: 'aytek'
    };
};
const mapDispatchToProps = (dispatch: Dispatch<cityActions.CityActionType>) => {
    return {
        logCityName: () => dispatch(cityActions.logCityName())
    };
};

// const mapDispatchToProps = (dispatch: Dispatch<cityActions.CityActionType>) => {
//     return {
//         actions: bindActionCreators(cityActions, dispatch)
//     };
// }



// connect<TStateProps, TDispatchProps, TOwnProps>()
export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(CityContainer);
