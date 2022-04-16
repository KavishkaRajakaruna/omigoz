import { render } from "@testing-library/react";
import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";


function Contact(){

const [name, setName] = useState('name');
const [email, setEmail] = useState('email');
const [message, setMessage] = useState('message');

const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    // console.log(name, email, message);
}


return(
    <>
        <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"/>
                <Form.Text className="text-muted"> We'll never share your email with anyone</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Whome we'll call you"/>
                <Form.Text className="text-muted">
                    Name
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" />
        </Form>

    </>
)
}
export default Contact;

