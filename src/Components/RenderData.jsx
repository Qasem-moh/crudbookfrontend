import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function RenderData({data}) {
    console.log(data)
    console.log(typeof data)
    return (
        <div>
            {
                data.map((item) => {
                    return(
                        <div key={item.id} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.cover} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default RenderData;