import * as React from 'react';

import './LoaderComponent.less';


type IProps = {
    isLoading: boolean;
};
const LoaderComponent: React.StatelessComponent<IProps> = (props: IProps) => (
   props.isLoading ? (
      <div className="loader">
         <div className="container">
            <i className="fa fa-spinner fa-spin fa-5x fa-fw" aria-hidden="true" />
         </div>
      </div>
   ) :
   ( null )
);

export default LoaderComponent;
