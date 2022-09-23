import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
// import Follow from '../Follow';

const ShowInfo = ({ information }) => {
    const { _id, description, Price, name, company, Review, img } = information;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Product Name: {name}</Card.Title>
                    <Card.Text>
                        Description: {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price: {Price}</ListGroup.Item>
                    <ListGroup.Item>Company Name: {company}</ListGroup.Item>
                    <ListGroup.Item>Public Review: {Review}</ListGroup.Item>
                
                </ListGroup>
                <Card.Body>
                    {/* <Card.Link href="#"><Follow></Follow></Card.Link> */}
                    <Card.Link href="#">Watch Video</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowInfo;