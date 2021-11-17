import React from 'react';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume1 = () => {
    return (
        <React.Fragment>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </React.Fragment>
    );
}
export default Resume1;