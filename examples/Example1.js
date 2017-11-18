import React, { Component } from 'react';
import { style, primaryColor, secondaryColor } from '../style';

function updateState(text){
    this.setState({
        text
    })
}

//passing state from parent to child
class Child1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial State"
        }
        updateState = updateState.bind(this)
    }
    render() {
        return (
            <div>
                <div style={{ ...style.topLabel, color: primaryColor }}>I am Child</div>
                <div style={style.label}>{this.state.text}</div>
            </div>
        )
    }
}



class Example1 extends Component {
    constructor(props) {
        super(props)
    }

    updateChild(text) {
        updateState(text)
    }

    render() {
        return (
            <div>
                <div style={{ ...style.topLabel, color: secondaryColor }}>I am Parent</div>
                <input style={style.textBox} type="text" placeholder="Write text" onChange={(e) => this.updateChild(e.target.value)} />
                <Child1 />
            </div>
        )
    }
}

export default Example1;