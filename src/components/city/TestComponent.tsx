import * as React from 'react';

type ITestProps = {
    id: number;
    name: string;
};
class TestComponent extends React.PureComponent<ITestProps> {
   constructor(props: ITestProps) {
      super(props);
      console.log('Test constructor.');  //tslint:disable-line
   }

   render() {
      console.log('Test render.');  //tslint:disable-line

      return (
         <li>{this.props.name}</li>
      );
   }
}

export default TestComponent;
