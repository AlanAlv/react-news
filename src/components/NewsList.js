import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

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

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsList;