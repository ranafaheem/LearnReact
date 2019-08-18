import React from 'react'

export const Jsxhello = () => {
    // return <div>
    //     <h2>Hellos its jsx </h2>
    // </div>



    // with out jsx way is 


    return React.createElement('div',
        {
            id: 'hello',
            className: 'dummyClass'
        }, React.createElement('h1', null, 'Hello jsx'))
}

