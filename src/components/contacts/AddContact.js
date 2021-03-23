import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid, { generate } from 'shortid';
import { useHistory } from 'react-router-dom';

const AddContact = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const createForm = e => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        };
        dispatch(addContact(new_contact));
        history.push("/");
    };

    return (
        <div className='card border-0 shadow'>
            <div className='card-header'>Create New Contact</div>
            <div className='card-body'>
                <form onSubmit={ (e) => createForm(e)}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
             
                    <div className='form-group'>
                        <input
                            type='number'
                            className='form-control'
                            placeholder='Enter mobile number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary' type='submit'>
                        Add to Contact Book
                    </button>
                </form>
            </div>
                
        </div>
        );
};

export default AddContact;