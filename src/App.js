import React from 'react';
import Header from "./compontents/Header";
import Home from "./compontents/Home";
import './scss/main.scss';
import {Provider} from 'react-redux';
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Home/>
            </div>
        </Provider>


    );
}

export default App;
