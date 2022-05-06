import {Col, Card, Badge} from "react-bootstrap";

interface NewsCard{
    heading: string;
    description: string;
    createdon: string;
    publisher: string;
    link: string;
    id: string;
}

function StatusCard(props:NewsCard){
    return (
    <Col key={props.id}>
          <Card key={props.id}>
              <Card.Header as="h5" >{props.heading} <Badge bg='success' id={props.id}>{props.publisher}</Badge></Card.Header>
              <Card.Body >
              <Card.Text >
                {props.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"  >{props.createdon}<div className="float-end"><a href={props.link} className="link-secondary">Full Page..</a></div></Card.Footer>
          </Card>
    </Col>

    )}

export default StatusCard; 