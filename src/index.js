/* eslint-disable no-console */
import '../node_modules/materialize-css/bin/materialize.css';
import '../node_modules/materialize-css/bin/materialize.js';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return (
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default App;

render(<App />, document.getElementById("app"));
console.log('hello');
