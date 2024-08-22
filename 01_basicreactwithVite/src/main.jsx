import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom React ! Ankit </h1>
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
    'a', 
    {href:'https://google.com', target: '_blank'}, 'click me to visit google',
    anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).
render(
 
 reactElement
  
)
