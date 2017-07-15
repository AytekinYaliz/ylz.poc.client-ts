
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
 * PURE COMPONENT
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