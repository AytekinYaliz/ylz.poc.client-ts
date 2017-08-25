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
 * FUNCTIONAL (STATELESS) COMPONENT
 * */
const HomePage = () => {
    const onClickHandle = (val: string) => {
        console.log(`Hello from home: ${val}`);  //tslint:disable-line
    };

    return (
        <div>
            <HelloContainer />
            <CityContainer onClick={onClickHandle} />
        </div>
    );
};
export default HomePage;


class HomePage extends React.Component<{}, {}> {
    onClickHandle = (val: string) => {
        console.log(`Hello from home: ${val}`);  //tslint:disable-line
    }

    render() {
        return (
            <div>
                <HelloContainer />
                <CityContainer onClick={this.onClickHandle} />
            </div>
        );
    }
}
export default HomePage;

// -----------------------------------------------------------------------------------------

/*
 * PURE COMPONENT: will not rerender itself and its children
 * */
const FooterComponent = (props: {}) => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <p className="text-muted">@{year}</p>
            </div>
        </footer>
    );
};
class FooterComponent extends React.PureComponent<{}> { 
    private year = new Date().getFullYear();
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">@{this.year}</p>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;


/*
 * SYNTAX 1: React.Component<P, S> -> connect()
 * */

type Props = {
    currentUser: ICurrentUserState;
    enthusiasmLevelCount: number;
    login: (user: {name: string}) => Promise<actions.CurrentUserActionType>;    
};
type State = {
    count: number;
    isLoading: boolean;
}

class LoginPage extends React.Component<Props, State> {
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
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;
class LogoutPage extends React.Component<Props, {}> {
    static contextTypes = {
        router: PropTypes.object
    };
    componentWillMount() {
        this.context.router.history.replace('/login');
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
export default connect<StateProps, DispatchProps, null> (
    mapStateToProps,
    mapDispatchToProps
) (LogoutPage);
