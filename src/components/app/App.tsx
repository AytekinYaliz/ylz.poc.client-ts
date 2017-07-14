import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IGlobalState, ICurrentUserState } from '../../types/IGlobalState';

import './App.less';
import HeaderComponent from '../header/HeaderComponent';
import FooterComponent from '../footer/FooterComponent';
import Routes from './Routes';


type StateProps = {
    currentUser: ICurrentUserState;
};
type DispatchProps = {};
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

// type State = {
//     count: number;
//     count2?: number;
// };

class App extends React.Component<Props, {}> {
    lsKey = 'LH.Accountancy';

    componentDidMount() {
        // fireabase.auth().onAuthStateChanged(user => {
        //     this.setState({user});
        // });
        
        let ls = new LocalStorage();
        if (ls.localStorageSupported) {
            let key = ls.get(this.lsKey);

            if (key === null) {
                ls.add(this.lsKey, 'some cookies from app');
            } else {
                console.log('LS', key);   //tslint:disable-line
            }
        }
    }

    render() {
        return (
            <div className="container">
                <HeaderComponent />
                <Routes currentUser={this.props.currentUser} />
                <FooterComponent />
            </div>
        );
    }
}
const mapStateToProps = (state: IGlobalState) => {
    return {
        currentUser: state.currentUserState
    };
};
const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        //logout: () => {}  //dispatch(currentUserActions.logout())
    };
};

export default withRouter(connect<StateProps, DispatchProps, any>(
    mapStateToProps,
    mapDispatchToProps
)(App));


// interface IStorageItem {
//     key: string;
//     value: any;
// }
// class StorageItem {
//     key: string;
//     value: any;

//     constructor(data: IStorageItem) {
//         this.key = data.key;
//         this.value = data.value;
//     }
// }
class LocalStorage {
    localStorageSupported: boolean;

    constructor() {
        this.localStorageSupported = typeof window['localStorage'] !== 'undefined' && window['localStorage'] !== null;
    }

    // add value to storage
    add(key: string, item: string) {
        if (this.localStorageSupported) {
            localStorage.setItem(key, item);
        }
    }

    // get one item by key from storage
    get(key: string): string | null {
        if (this.localStorageSupported) {
            var item = localStorage.getItem(key);
            return item;
        }
            
        return null;
    }

    // remove value from storage
    remove(key: string) {
        if (this.localStorageSupported) {
            localStorage.removeItem(key);
        }
    }

    // clear storage (remove all items from it)
    clear() {
        if (this.localStorageSupported) {
            localStorage.clear();
        }
    }

    // // get all values from storage (all items)
    // getAllItems(): Array<StorageItem> {
    //     var list = new Array<StorageItem>();

    //     for (var i = 0; i < localStorage.length; i++) {
    //         var key = localStorage.key(i);
    //         var value = localStorage.getItem(key);

    //         list.push(new StorageItem({
    //             key: key,
    //             value: value
    //         }));
    //     }

    //     return list;
    // }

    // // get only all values from localStorage
    // getAllValues(): Array<any> {
    //     var list = new Array<any>();

    //     for (var i = 0; i < localStorage.length; i++) {
    //         var key = localStorage.key(i);
    //         var value = localStorage.getItem(key);

    //         list.push(value);
    //     }

    //     return list;
    // }
}
