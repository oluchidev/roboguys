import React from 'react';
import './card.css'

const card = ({name, email, id}) => {
    return (
            <div className=" tc bg-light-green br3 ma3 pa3 grow bw3 shadow-5">
            <img alt='robots' src={`https://robohash.org/${id}?100*100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
         </div>
    )
}

export default card;