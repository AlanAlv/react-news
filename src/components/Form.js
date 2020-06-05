import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect'

const Form = ({saveCategory}) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'}
    ]

    // Custom Hook
    const [ category, SelectNews ] = useSelect('general', OPTIONS);

    // User clicks submit
    const searchNews = e => {
        e.preventDefault();

        console.log(category);
        saveCategory(category);
    }

    return (
        <div className={`${styles.searcher} row`}>
            <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Search by category</h2>

                    <SelectNews />
                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            value="Search"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                        />
                    </div>
                </form>
          </div>
        </div>
      );
}
 
export default Form;