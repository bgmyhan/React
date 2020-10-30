import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-dom';


import Login from './login'

// const App = () => {
//     return <div>Hi</div>
// }

// export default App

class App extends Component {
    render(){
        return (
            <div className="page-containter">
                <div className="content-wrap">

                        <Login />
                       {/* <Route path='/Account' exact component={Account} /> */}

            </div>
        </div>      
        )
    }
}


export default App;