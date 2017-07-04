// import * as React from 'react';
// import { Redirect } from 'react-router';
// import { connect, Dispatch } from 'react-redux';

// import { IStoreState } from '../store/IStoreState';
// import * as actions from '../../actions/currentUserActions';



// type PropType = {
//     actions: {};
//     currentUser: {};
//     //onClick?: () => void;
// };
// // type StateType = {
// //     count: number;
// // };

// class LogoutContainer extends React.Component<PropType, {}> {
//     // static propTypes = {
//     //     actions:    PropTypes.object.isRequired,
//     //     currentUser:    PropTypes.object.isRequired
//     // };
//     // static defaultProps = {
//     //     currentUser: null
//     // };

//     constructor(props: PropType) {
//         super(props);
//     }
//     logout = () => {
//         this.props.actions
//             .logout()
//             .then(() => {
//                 //this.setState({shouldRedirect: true});
//                 console.log('loged out'); //eslint-disable-line
//             })
//             .catch((err) => {
//                 console.log(err); //eslint-disable-line
//             });
//     };

//     render() {
//         return (
//             this.props.currentUser
//                 ? <Redirect to={'/login'} />
//                 : <a onClick={this.logout}>Logout</a>
//         );
//     }
// }
// const mapStateToProps = (state: IStoreState) => {
//     return {
//         currentUser: state.currentUserState.currentUser
//     };
// };
// const mapDispatchToProps = (dispatch: Dispatch<actions.CurrentUserActionType>) => {
//     return {
//         logout: () => dispatch(actions.logout())
//     };
// };


// // function mapStateToProps(state) {
// //     return {
// //         currentUser: state.currentUserReducer.currentUser
// //     };
// // }
// // function mapDispatchToProps(dispatch) {
// //     return {
// //         actions: bindActionCreators(currentUserActions, dispatch)
// //     };
// // }

// export default connect<{}, PropType, {}>(
//     mapStateToProps,
//     mapDispatchToProps
// )(LogoutContainer);
