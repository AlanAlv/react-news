import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  const [ category, saveCategory ] = useState('');
  const [ news, saveNews ] = useState([]);

  useEffect(() => {
    const callAPI = async () => {

      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=62c87eb83a7741359cb883c5cfa0e708`;
    
      const answer = await fetch(url);
      const news = await answer.json();

      saveNews(news.articles);
    };
    callAPI();
    
  }, [category]);

  return (
    <Fragment>
      <Header 
        title= 'News Search'
      />

      <div className="container white">
        <Form 
          saveCategory={saveCategory}
        />

        <NewsList 
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
