import * as React from 'react';
import City from '../../models/City';

type ITownProps = {
    towns?: Array<City>;
    count: number;
    onSelect?: Function
};
class TownComponent extends React.PureComponent<ITownProps> {
    constructor(props: ITownProps) {
        super(props);
        console.log('Town constructor.');  //tslint:disable-line
    }

    render() {
        console.log('Town render.');  //tslint:disable-line

        return (
            <div>
                {this.props.towns && this.props.towns.length > 0 ? (
                    <ul>
                        {this.props.towns.map(_ => <li key={_.id}>{_.text}</li> )}
                    </ul>
                ) : (
                    <span>NO Towns...</span>
                )}
            </div>
        );
    }
}

export default TownComponent;
