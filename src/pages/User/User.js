import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import {Form } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';


const User = () => {

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [date, setDate] = useState(new Date());
    const [comment, setComment] = useState('');


    const currentDate = new Date().toJSON().slice(0, 10);
   

    const handleFormSubmit = e => {
        e.preventDefault();

        const information = {start, end, date, comment};
        console.log(information);

        e.target.reset();

    }


    return (
        <div className='w-50 mx-auto border p-5 rounded mt-5 shadow'>
                <Form onSubmit={handleFormSubmit}>

                    <Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Start Time</Form.Label>
                                <Form.Control onChange={(e)=> setStart(e.target.value)} required type="time" />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label> End Time </Form.Label>
                                <Form.Control onChange={(e)=> setEnd(e.target.value)} required type="time"  />
                            </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> Date </Form.Label>
                        <Form.Control onChange={(e)=> setDate(e.target.value)} type="text"  value={currentDate} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> Comment </Form.Label>
                        <Form.Control onChange={(e)=> setComment(e.target.value)} as="textarea" rows={3} />
                    </Form.Group>

                    <button  className='btn btn-info w-100' type='submit'> Submit </button>
                </Form>
          
        </div>

    );
};

export default User;