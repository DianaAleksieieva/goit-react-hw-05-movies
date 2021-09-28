import React, { useState } from 'react';

export default function Search(props) {
    const [filmName, setFilmName] = useState('');

    const handleChange = (e) => {
        setFilmName(e.currentTarget.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
          if (filmName === "") { return }
        props.onSubmit(filmName)
        reset()
    }
const reset = () => {
    setFilmName('')
  }
    return (
        <form onSubmit={submitForm}>
            <input value={filmName} onChange={handleChange}></input>
            <button type="submit" >Search</button>
            </form>
    )
}
            
