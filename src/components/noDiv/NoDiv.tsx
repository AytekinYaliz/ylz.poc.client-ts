import * as React from 'react';


class NoDiv extends React.PureComponent<{}, {}> {
   render(): JSX.Element | null | false {
      return (
         this.props.children
            ? this.props.children as React.ReactElement<any>
            : null
      );
   }
}

export default NoDiv;