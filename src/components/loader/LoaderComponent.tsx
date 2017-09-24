import * as React from 'react';

import './LoaderComponent.less';


type IProps = {
    isLoading: boolean;
};
const LoaderComponent: React.StatelessComponent<IProps> = (props: IProps) => (
   props.isLoading ? (
      <div className="loader">
          <i className="fa fa-spinner fa-spin fa-5x fa-fw" aria-hidden="true" />
      </div>
   ) :
   (null)
);

export default LoaderComponent;
