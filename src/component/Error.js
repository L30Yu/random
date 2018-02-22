import React, {Component} from 'react';
import url from 'url';

import Panel from './Panel';

const style = {
  text: {
    color: '#777',
  }
};

export default class Error extends Component {
  render() {
    return (
      <Panel>
        <div>
          <p>
            Page Not Found: {url.parse(window.location.href).path}<br />
            <text style={style.text}>
              Please go to the home page.
            </text>
          </p>
        </div>
      </Panel>
    );
  }
}
