import React from 'react';
import { render } from "react-dom";

import "../css/style.scss";

class App extends React.Component {
 
  render() {
    return (
      <h1>Welcome to React</h1>
    );
  }
  
}


render(<App />, window.document.getElementById("root"));