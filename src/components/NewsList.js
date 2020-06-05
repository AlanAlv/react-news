import React from 'react';
import New from './New';

const NewsList = ({news}) => (
    <div className="row">
        {news.map(article => (
            <New 
                key={article.url}
                article={article}
            />
        ))}
    </div>
);
 
export default NewsList;