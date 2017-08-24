import * as React from 'react';
import {  } from 'react-bootstrap';

import './FooterComponent.less';

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
