import * as React from 'react';
import { connect/*, Dispatch*/ } from 'react-redux';

import { IStoreState } from '../store/IStoreState';
//import * as actions from '../actions/cityActions';

import City from '../models/City';

interface ICityProps {
    cities: City[];
}
interface ICityState {
    //count: number;
}

export class CityContainer extends React.Component<ICityProps, ICityState> {
    state = {
        count: 0
    };

    constructor(props: ICityProps) {
        super(props);

        setTimeout(() => {
            this.setState({ count: 1 });
        }, 2000);
    }

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

// export const CityContainer = (props: ICityProps, state: ICityState) => {
//     return (
//         <div className="hello">
//             <div className="greeting">
//                 {`Total cities: ${props.cities.length}`}
//             </div>
//         </div>
//     );
// };

function mapStateToProps(state: IStoreState) {
    return {
        cities: state.citiesState
    };
}
// export function mapDispatchToProps(dispatch: Dispatch<actions.CityAction>) {
//     return {
//         getCities: () => dispatch(actions.getCities())
//     };
// }

export default connect(
    mapStateToProps,
    //mapDispatchToProps
)(CityContainer);