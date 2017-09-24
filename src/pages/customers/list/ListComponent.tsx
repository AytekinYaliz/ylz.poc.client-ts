import * as React from 'react';

import ICustomer from '../../../models/ICustomer';


type IProps = {
   customers: ICustomer[];
};

class ListComponent extends React.PureComponent<IProps> {

   createListItem(customer: ICustomer) {
      return (
          <li key={customer.id}>
              {customer.firstName}
          </li>
      );
  }

   render(): JSX.Element | null | false {
      return (
         <ul className="customer-list">
            {this.props.customers.map( this.createListItem )}
         </ul>
      );
   }
}

export default ListComponent;
