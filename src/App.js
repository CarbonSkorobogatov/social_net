import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import BlogV2 from "./class-works/cw4/blog-v2/Blog";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BlogV2 />
      </div>
    )
  }
}

export default App;
