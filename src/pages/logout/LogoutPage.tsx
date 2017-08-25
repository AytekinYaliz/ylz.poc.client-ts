import * as React from 'react';
import * as PropTypes from 'prop-types';
import {connect, Dispatch} from 'react-redux';

import {IGlobalState, ICurrentUserState} from '../../types/IGlobalState';
import * as actions from '../../actions/currentUserActions';


type StateProps = {
    currentUser: ICurrentUserState;
};
type DispatchProps = {
    logout: () => Promise<actions.CurrentUserActionType>;
};
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

// type State = {
//     count: number;
//     count2?: number;
// };

class LogoutPage extends React.Component<Props, {}> {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props
            .logout()
            .then(() => {
                console.log('The user has loged out..'); //tslint:disable-line
                this.context.router.history.replace('/login');
            })
            .catch((err) => {
                console.log(err); //tslint:disable-line
            });
    }

    render() {
        return (null as any);
    }
}
const mapStateToProps = (state: IGlobalState) => {
    return {
        currentUser: state.currentUserState,
        enthusiasmLevelCount: state.enthusiasmState.enthusiasmLevel
    };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.CurrentUserActionType>) => {
    return {
        logout: () => dispatch(actions.logout())
    };
};

export default connect<StateProps, DispatchProps, null> (
    mapStateToProps,
    mapDispatchToProps
) (LogoutPage);
