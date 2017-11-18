import React, { Component } from 'react';
import { style, primaryColor, secondaryColor } from '../style';


//updating state from child to parent
class Child1 extends Component {
    render() {
        return (
            <div>
                <div style={{ ...style.topLabel, color: primaryColor }}>I am Child 1. I am using callback function to update parent's state</div>
                <input style={style.textBox} type="text" placeholder="Write text" onChange={(e) => this.props.updateTextCB(e.target.value)} />
            </div>
        )
    }
}

class Child2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div style={{ ...style.topLabel, color: primaryColor }}>I am Child 2. I am using binded function to update parent's state</div>
                <input style={style.textBox} type="text" placeholder="Write text" onChange={(e) => updateText2(e.target.value)} />
            </div>
        )
    }
}


function updateText2(text) {
    this.setState({ text })
}

class Example2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial Text"
        }
        this.updateText1 = this.updateText1
        updateText2 = updateText2.bind(this)
    }

    updateText1 = (text) => {
        this.setState({ text })
    }

    render() {
        return (
            <div>
                <div style={{ ...style.topLabel, color: secondaryColor }}>I am Parent</div>
                <div style={style.label}>{this.state.text}</div>
                <Child1 updateTextCB={this.updateText1} />
                <Child2 />
            </div>
        )
    }
}

export default Example2;