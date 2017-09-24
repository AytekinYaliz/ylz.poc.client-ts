import * as React from 'react';
// import * as PropTypes from 'prop-types';
import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IGlobalState, ICurrentUserState } from '../../types/IGlobalState';
import LocalStorage from '../../libs/LocalStorage';

import './App.less';
import NoDiv from '../noDiv/NoDiv';
import Routes from './Routes';
import LoaderComponent from '../loader/LoaderComponent';
import Config, { ConfigKeysEnum } from '../../libs/Config';


type StateProps = {
   isLoading: boolean;
   currentUser: ICurrentUserState;
};

class App extends React.Component<StateProps, {}> {
   constructor(props: StateProps) {
      super(props);
   }
   componentDidMount() {
      if (LocalStorage.isLocalStorageSupported) {
         let key = LocalStorage.get( Config.getConfig(ConfigKeysEnum.localStorageKey) );

         if (key === null) {
            LocalStorage.add(Config.getConfig(ConfigKeysEnum.localStorageKey), 'some cookies from app');
         } else {
            console.log('LS:', key);   //tslint:disable-line
         }
      }
   }

   render() {
      return (
         <div>
            <LoaderComponent isLoading={this.props.isLoading} />
            <Routes currentUser={this.props.currentUser} />
         </div>
      );
   }
}
const mapStateToProps = (state: IGlobalState) => {
   return {
      isLoading: state.loaderState,
      currentUser: state.currentUserState
   };
};

export default withRouter(connect<StateProps, null, null>(
   mapStateToProps,
   null
)(App));
