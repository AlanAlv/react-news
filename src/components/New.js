import React from 'react';
import styles from './New.module.css'
import PropTypes from 'prop-types';

const New = ({article}) => {

    const { urlToImage, url, title, description, source} = article;

    const image = (urlToImage) 
        ? 
        <div className="card-image">
            <img className={styles.image} src={urlToImage} alt={title}/>
            <span className="card-title"> {source.name}</span>
        </div>
        :
        
            null
    ;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {image}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        See complete new
                    </a>
                </div>
            </div>
        </div>
     );
}

New.propTypes = {
    article: PropTypes.object.isRequired
}
 
export default New;