import React from 'react'
import '../App.css'

export default WrapComponent => {
    const withButton = (props) => {
        return (
            <button className="bt-hoc"> 
                <WrapComponent {...props} />
            </button>
        )
    }
    return withButton
}


// --------------------- Basic ------------------------
// import React from 'react'

// export default WrapComponent => {
//     const withButton = (props) => {
//         return (
//             <WrapComponent {...props} />
//         )
//     }
//     return withButton
// }