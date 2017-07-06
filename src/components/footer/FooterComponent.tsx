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

const FooterComponent: React.StatelessComponent<{}> = () => { 
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p className="text-muted">@{year}</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
