import React, { Component } from 'react';
import Oscillator from './Oscillator'
import Tone from 'tone';
import Knob from './Knob';
//import Fader from 'tone-studio-ui-patterns/lib/molecules/fader'


class Synth extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.envelope = new Tone.AmplitudeEnvelope({
            attack : 0.41,
            decay : 0.21,
            sustain : 0.9,
            release : .9
        }).toMaster()
        this.state = {
            frequencies: {
                0: 440
            },
            detunes: {
                0: 30
            },
            volumes: {
                0: -20
            },
            waveforms: {
                0: 1
            },
        };

        this.setDetune = this.setDetune.bind(this);
    }
    
    setDetune(osc, v) {
        let detunes = this.state.detunes;
        detunes[osc] = v;
        this.setState({
            detunes: detunes
        });
    }

    render() {
        return(
            <div className='synth'>
                <Oscillator 
                    frequencies={this.state.frequencies[0]} 
                    detunes={this.state.detunes[0]} 
                    volumes={this.state.volumes[0]}
                    waveforms={this.state.waveforms[0]}>
                    <Knob className='_colored orange'
                        range={[-50,50]}
                        size={60}
                        label={'detune'}
                        markers={21}
                        fullAngle={300}
                        steps={[{label:-10},{label:-5},{label:'0'},{label:5},{label:10}]}
                        onUpdate={ this.setDetune.bind(this, 0) }
                        value={ this.state.detunes[0] }
                        defaultValiue={this.props.defaultValue}
                        />
                </Oscillator>
            </div>
        )
    }
}

export default Synth;