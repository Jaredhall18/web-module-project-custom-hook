import React, {useState, useEffect} from 'react'

const useLocalStorage =(key, initialValue) => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue]= useState(()=>{
            // Get from local storage by key
        if(localStorage.getItem(key)) {
            // Parse and return stored json or, if undefined, return initialValue
            return JSON.parse(localStorage.getItem(key));
        }else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    })

    const setValue = (value) => {
        // Save to local storage
        localStorage.setItem(key, JSON.stringify(value));
        // Save state
        setStoredValue(value);
    }

    return [storedValue, setValue];
}
export default useLocalStorage;