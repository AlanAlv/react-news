import React, { useState } from 'react'

const useSelect = (initialState, options) => {
    
    const [ state, updateState ] = useState(initialState);

    const SelectNews = () => (
        <select 
            className="browser-default"
        >
            {options.map( option => (
                <option 
                    key={option.value} 
                    value={option.value}
                    onChange={e => updateState(e.target.value)}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );

    return [state, SelectNews];
}
export default useSelect;