import React from 'react';
import FetchData from "./FetchData";


function Home(props) {
    const d="Qasem Mohammad Ali Hasan"
    console.log(d.split(' ').slice(0,2).join(' '))
    return (
        <div>
            <h3 className="text-3xl font-bold p-8">
                List of Books
            </h3>
            <FetchData/>


        </div>
    );
}

export default Home;