import React, {useEffect, useReducer} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import GrowExample from "./Spinner";
import RenderData from "./RenderData";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

const initialState = {
    loading: true, error: '', books: {}
}
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS':
            return {
                loading: false, error: '', books: action.payload
            }
        case 'ERROR_FETCH_BOOK':
            return {
                loading: false, error: '', books: {}
            }
        default:
            return state;
    }
}


function Details(props) {
    const {id}=useParams()
    const [statee, dispatche] = useReducer(booksReducer, initialState);
    useEffect(() => {
        axios.get('https://crud-yqyn.onrender.com/getcrudbyid/'+id)
            .then(response => {
                dispatche({
                    type: 'FETCH_BOOKS', payload: response.data
                })
            }).catch(err => {
            dispatche({
                type: 'ERROR_FETCH_BOOK', payload: err
            })
        })
    },[])
    return (<div>
        <div className='justify-center inline-grid p-3 '>
            <Card style={{width: '30rem'}}  className=''>
                <Card.Img variant="top" src={statee.books.cover} />
                <Card.Body className="overflow-hidden">
                    <Card.Title className="shadow-blue drop-shadow-lg">{statee.books.title}</Card.Title>
                    <Card.Text>
                        {statee.books.description}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>

    </div>);
}

export default Details;