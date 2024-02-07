import React, {useEffect, useReducer} from 'react';
import axios from "axios";
import Spinner from './Spinner'
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

function FetchData(props) {
    const [state, dispatch] = useReducer(booksReducer, initialState);
    useEffect(() => {
        axios.get('https://crud-yqyn.onrender.com/getallcrudbooks')
            .then(response => {
                dispatch({
                    type: 'FETCH_BOOKS', payload: response.data
                })
            }).catch(err => {
            dispatch({
                type: 'ERROR_FETCH_BOOK', payload: err
            })
        })
    },[])
    console.log(state.books)
    return (<div>
        {state.loading?<GrowExample/>:<RenderData data={state.books}/>}
    </div>);
}

export default FetchData;