import * as React from 'react';

// const FooterComponent = (props: {}) => {
//     return (
//         <footer className="footer">
//             <div className="container">
//                 <p className="text-muted">@2017</p>
//             </div>
//         </footer>
//     );
// };

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
