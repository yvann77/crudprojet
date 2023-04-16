import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Add() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [studentfirstName, setFirstName] = useState('');
    const [studentlastName, setLastName] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
    }, []);

    const postData = () => {
        axios.put(`http://localhost:3004/prof/${id}`, {
            studentfirstName,
            studentlastName
        }).then(() => {
            history.push('/show')
        })
}

return (
    <div>
        <Form className="create-form">
            <Form.Field>
                <label>Nom de l'étudiant</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Prénom de l'étudiant</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    </div>
)


}
