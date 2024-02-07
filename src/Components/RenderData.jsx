import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
function RenderData({data}) {
    console.log(data)
    console.log(typeof data)
    return (
        <div className=''>
            {
                data.map((item) => {
                    return(
                        <div className='justify-center inline-grid p-3 ' key={item.id} >
                            <Card style={{ width: '25rem' }} key={item.id} className=''>
                                <Card.Img variant="top" src={item.cover} className="min-h-60 max-h-20" />
                                <Card.Body className="min-h-100 max-h-100 overflow-hidden">
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Title>{item._id}</Card.Title>
                                    <Card.Text>
                                        {item.description.split(' ').slice(0,35).join(' ')  }
                                    </Card.Text>
                                    <strong>......</strong>
                                    <Link to={`/details/${item._id}`}>
                                        <Button className='primary'>More</Button>
                                    </Link>
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