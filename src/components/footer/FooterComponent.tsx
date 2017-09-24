import * as React from 'react';
import {  } from 'react-bootstrap';

import './FooterComponent.less';


class FooterComponent extends React.PureComponent<{}> {
   private year = new Date().getFullYear();

   render() {
      return (
         <footer className="footer">
            <p className="text-muted">@{this.year}</p>
         </footer>
      );
   }
}

export default FooterComponent;
