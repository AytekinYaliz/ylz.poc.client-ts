import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import * as actions from '../../../actions/customerActions';
import { IGlobalState, ICustomersState } from '../../../types/IGlobalState';
import ICustomer from '../../../models/ICustomer';
import ListComponent from './ListComponent';

type IProps = {
   customers: ICustomer[];
   getCustomers: () => Function; //Promise<actions.CustomerActionType>;
};
class ListPage extends React.PureComponent<IProps> {
   private _customers = Array<any>(0);
   componentDidMount() {
      this.props.getCustomers();
   }
   render(): JSX.Element | null | false {
      return (
         <ListComponent customers={this.props.customers} />
      );
   }
}
const mapStateToProps = (state: IGlobalState) => {
   return {
      customers: state.customersState.customers
   };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.CustomerActionType>) => {
   return {
      getCustomers: () => dispatch(actions.getCustomers())
   };
};

export default connect<{}, IProps, {}>(
   mapStateToProps,
   mapDispatchToProps
)(ListPage);