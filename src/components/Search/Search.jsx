import React, { useState } from 'react';
import {Input,Button,Form} from './Search.styled.jsx';

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
        <Form onSubmit={submitForm}>
            <Input value={filmName} onChange={handleChange}></Input>
            <Button type="submit" >Search</Button>
            </Form>
    )
}
            
