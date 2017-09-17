/* tslint:disable */
/*
 * SYNTAX (ES6)
 * */
function CustomTextInput(props) {
   return (
      <div>
         <input ref={props.inputRef} />
      </div>
   );
}
class Parent1 extends React.Component {
  render() {
    return (
      <CustomTextInput inputRef={el => this.inputElement = el} />
    );
  }
}
class Parent2 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.array.length > 0 &&
                        <b>{this.props.array.length}</b>
                    }
                </div>
                <div>
                    The user is <b>{this.props.isLoggedIn ? 'currently' : 'not'}</b> logged in.
                </div>
                <div>
                    {this.props.isLoggedIn ? (
                        <LogoutButton onClick={this.handleLogoutClick} />
                    ) : (
                        <LoginButton onClick={this.handleLoginClick} />
                    )}
                </div>
                <div>
                    <CustomTextInput inputRef={el => this.inputElement = el} />
                </div>
            </div>
        );
    }
}
// -----------------------------------------------------------------------------------------

/*
 * FUNCTIONAL COMPONENT: 1 (ES6)
 * */
const HomePage = () => {
    const onClickHandle = (val: string) => {
        console.log(`Hello from home: ${val}`);  //tslint:disable-line
    };

    return (
        <div>
            <CityContainer onClick={onClickHandle} />
        </div>
    );
};
export default HomePage;

/*
 * FUNCTIONAL COMPONENT: 2 (TS + Flow)
 * */

type IProps = { 
    name: string; 
    onIncrement?: () => void;
};
const HelloComponent = (props: IProps) => {     // = ({name, onIncrement}: IProps) => {
    return (
        <div className="hello">
            Hello { props.name } <button onClick={props.onIncrement}>[+]</button>
        </div>
    );
};

/*
 * FUNCTIONAL COMPONENT: 3 (Pure component)
 * */
class FooterComponent extends React.PureComponent<IProps, {}> {
    render(): JSX.Element | null | false {
        return (
            <div className="hello">
                Hello { this.props.name } <button onClick={this.props.onIncrement}>[+]</button>
            </div>
        );
    }
}

/*
 * FUNCTIONAL COMPONENT: 4 (Stateless component)
 * */
const FooterComponent: React.StatelessComponent<IProps> = (props: IProps) => (
    <div>
        {props.children}
    </div>
);

// -----------------------------------------------------------------------------------------


/*
 * SYNTAX 1: React.Component<P, S> -> connect()
 * */

type IProps = {
    currentUser: ICurrentUserState;
    enthusiasmLevelCount: number;
    login: (user: ICurrentUserState) => Promise<actions.CurrentUserActionType>;    
};
type IState = {
    count: number;
    isLoading: boolean;
}

class LoginPage extends React.Component<IProps, IState> {
    /* The implementation goes here */
}
const mapStateToProps = (state: IGlobalState) => {
    return {
        currentUser: state.currentUserState,
        enthusiasmLevelCount: state.enthusiasmState.enthusiasmLevel
    };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.CurrentUserActionType>) => {
    return {
        login: (user: ICurrentUserState) => dispatch(actions.login(user))
    };
};
export default connect (
    mapStateToProps,
    mapDispatchToProps
) (LoginPage);


/*
 * SYNTAX 2: React.Component<P1&P2&P3, S>{} -> connect<P1, P2, P3>()
 * */

type StateProps = {
    currentUser: ICurrentUserState;
};
type DispatchProps = {
    logout: () => Promise<actions.CurrentUserActionType>;
};
type OwnProps = {
    onClick: (val: String) => void;
};

class LogoutPage extends React.Component<StateProps & DispatchProps & OwnProps, {}> {
   // private query: { cityId: string, cityName: string } = this.props.match.params;
    static contextTypes = {
        router: PropTypes.object
    };
    componentWillMount() {
        this.context.router.history.replace('/login');
    }
    onClick = (event: any) => {
        if (this.props.onClick) {
            this.props.onClick( (event.target as any).innerHTML );
        }
    }
    /* The implementation goes here */
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
export default connect<StateProps, DispatchProps, OwnProps> (
    mapStateToProps,
    mapDispatchToProps
) (LogoutPage);
