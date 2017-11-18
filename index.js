import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {style} from './style';
import Example1 from './examples/Example1';
import Example2 from './examples/Example2';
import Example3 from './examples/Example3';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <div style={style.main}>
                <h3>Parent to child</h3>
                <Example1 />
                <hr style={style.hr}/>
                <h3>Child to parent</h3>
                <Example2 />
                <hr style={style.hr}/>
                <h3>Sibling to sibling</h3>
                <Example3 />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
