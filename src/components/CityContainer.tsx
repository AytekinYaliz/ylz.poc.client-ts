import * as React from 'react';
// import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as socketIo from 'socket.io-client';

import { IGlobalState } from '../types/IGlobalState';
import * as cityActions from '../actions/cityActions';
import { IClickEvent } from '../types/IEvent';
import Config, {ConfigKeysEnum} from '../libs/Config';

import City from '../models/City';

type StateProps = {
    cities: City[];
    name: string;
};
type DispatchProps = {
    logCityName: () => void;
};
type OwnProps = {
    onClick?: (val: String) => void;
};
type State = {
    count: number;
};

class CityContainer extends React.Component<StateProps & DispatchProps & OwnProps, State> {
    private socket: SocketIOClient.Socket;
    state = {
        count: 33
    };

    constructor(props: StateProps & DispatchProps & OwnProps) { 
        super(props);
        
        setTimeout(() => {
            this.setState({ count: 8888999 });
            setTimeout(() => {
                this.setState({ count: 4400 });
            }, 1000);
        }, 1000);
    }

    onClick = (event: IClickEvent) => {
        if (this.props.onClick) {
            this.props.onClick( (event.target as any).innerHTML );
        } else {
            console.log(`Hello from CityContainer: ${this.state.count}`);   // tslint:disable-line
        }
    }

    connect = () => {
        this.socket = socketIo(Config.getConfig(ConfigKeysEnum.apiBaseUrl));

        this.socket.on('currency_update_rss', (message: {currency: string, rate: number}) => {
            console.log('currency_update: ', message);  //tslint:disable-line
        });
    }
    send = () => {
        this.socket.emit('currency_update_rss', {currency: 'aytekin', content: 'hi'});
    }
    disconnect = () => {
        this.socket.disconnect();
    }

    render(): JSX.Element {
        return (
            <div className="hello">
                <div className="greeting">
                    <div>
                        {`Total cities for ${this.props.name}: ${this.props.cities.length} [${this.state.count}]`}
                    </div>
                    <button onClick={this.onClick}>Alert</button>
                    <button onClick={this.props.logCityName}>log</button>
                    &nbsp; &nbsp;
                    <button onClick={this.connect}>Connect</button>
                    <button onClick={this.send}>Send</button>
                    <button onClick={this.disconnect}>Disconnect</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: IGlobalState) => {
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

export default connect<{}, {}, OwnProps> (
    mapStateToProps,
    mapDispatchToProps
) (CityContainer);
