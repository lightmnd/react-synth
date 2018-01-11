import React, {Component} from 'react';

class Oscillator extends Component {
    constructor(props) {
        super(props);

        this.env = this.props.envelope;
        this.waves = ['sine','square','triangle','sawtooth'];
    }

    render() {
        //let ret;
        console.log(this.props)
        return (<div className="oscillator">
            <br/>
            { this.props.children }
        </div>);
      }

}

export default Oscillator;