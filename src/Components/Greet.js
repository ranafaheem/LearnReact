import React from 'react'


// function Greet() {
//     return <h1>Hello Greet Component</h1>
// }

// using arrow function

// const Greet = () => <h1>Hellow Greet Component</h1>



// Other Techngque to export is 

export const Greet = ({ name, heroName }) => {
    // console.log(props)
    return (
        <div>
            < h1 > Hellow Greet Component {name} a.k.a {heroName}</h1 >

        </div>
    )
}



// export default Greet
