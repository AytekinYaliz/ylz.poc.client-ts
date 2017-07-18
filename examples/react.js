/*
 * SYNTAX
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


/*
 * FUNCTIONAL COMPONENT
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
