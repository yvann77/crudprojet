import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    console.log(checkbox)
    const postData = () => {
        axios.post(`http://localhost:3004/prof`, {
            firstName,
            lastName,
            speciality,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Prénom</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nom</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Spécialité</label>
                    <input placeholder='Spécialité' onChange={(e) => setSpeciality(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Est-il en stock ?' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
