import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';



function App() {
  return (
    <Fragment>
      <Header 
        title= 'News Search'
      />

      <div className="container white">
        <Form>
          
        </Form>
      </div>
    </Fragment>
  );
}

export default App;
