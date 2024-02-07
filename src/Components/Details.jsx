import React, {useEffect, useReducer} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import GrowExample from "./Spinner";
import RenderData from "./RenderData";

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
        axios.get('https://crud-yqyn.onrender.com/getallcrudbooks')
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
    console.log(state.books)
    return (<div>
        {statee.loading?<GrowExample/>:<RenderData data={statee.books}/>}
    </div>);
}

export default Details;