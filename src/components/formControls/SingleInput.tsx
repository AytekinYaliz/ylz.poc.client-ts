import * as React from 'react';


type ISingleInput = {
    inputType: string;
    title: string;
    name: string;
    controlFunction: () => void;
    content: string;
    placeholder?: string;
};

class SingleInput extends React.PureComponent<ISingleInput> {
    render (): JSX.Element {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.title}</label>
                <input
                    className="form-input"
                    name={this.props.name}
                    type={this.props.inputType}
                    value={this.props.content}
                    onChange={this.props.controlFunction}
                    placeholder={this.props.placeholder} 
                />
            </div>
        );
    }
}

export default SingleInput;


// const SingleInput = (props) => (  
//   <div className="form-group">
//     <label className="form-label">{props.title}</label>
//     <input
//       className="form-input"
//       name={props.name}
//       type={props.inputType}
//       value={props.content}
//       onChange={props.controlFunc}
//       placeholder={props.placeholder} />
//   </div>
// );

// SingleInput.propTypes = {  
//   inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
//   title: React.PropTypes.string.isRequired,
//   name: React.PropTypes.string.isRequired,
//   controlFunc: React.PropTypes.func.isRequired,
//   content: React.PropTypes.oneOfType([
//     React.PropTypes.string,
//     React.PropTypes.number,
//   ]).isRequired,
//   placeholder: React.PropTypes.string,
// };