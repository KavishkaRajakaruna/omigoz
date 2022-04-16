import NavBar from "../home/NavBar";
import {useState} from "react";
import { Button, Card, Form } from "react-bootstrap";

function MailGenerator(){
    const [email, setEmail] = useState("");
    const[consent, setConsent] = useState(false);
    const[name, setName]=useState("");
    const[emailLists, setEmailLists] = useState([] as any);
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    function generate_email(){
            // deconsruct email address
            let email_address = email.split("@");
            let email_domain = email_address[1];
            let email_name = email_address[0];
            // generate random number list
            let random_email_list: any[] =[];
            for(let i=0; i<10; i++){
                random_email_list.push(email_name+"+"+Math.floor(Math.random()*10000000)+"@"+email_domain);
            }
            
            setEmailLists(random_email_list);
           
            // return random_email_list;

    }

    return (
        <>
        <NavBar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    {/* container with padding */}
                    <p> </p>
                    <div className="container-fluid pt-5 pb-5 border rounded">
                    <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={(e) => {(regex.test(e.target.value))? setEmail(e.target.value): setEmail("")}  } />
                    <Form.Text className="text-muted">
                    Will only use for updates from the team.
                    </Form.Text>
                </Form.Group>
                <p> </p>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Send me your product updates" onChange={(e)=>setConsent(e.target.checked)} />
                </Form.Group>
                <p> </p>
                {consent ? 
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"  onChange={(e)=>setName(e.target.value)}/>
                </Form.Group> : null}
                <p> </p>
                <Button variant="primary"  onClick={generate_email} disabled={ (email ===""? true: false)} >
                    Generate emails 
                </Button>
            </Form>
                    </div>
                     </div>
                <div className="col-md-6">
                    {
                        // check list is empty
                        emailLists.length > 0 ?
                        
                        (emailLists.map((email:any , index: any)=>{
                            return (
                                <>
                                <Card key={index} className="border rounded">
                                    <Card.Body>
                                        {email}
                                    </Card.Body>
                                </Card>
                                <br />
                                </>
                            )
                        }))
                        : <Card.Body>Nothing to show</Card.Body>
                    }
                </div> 
                </div>
            </div>
            
        </>
    )
}

export default MailGenerator;