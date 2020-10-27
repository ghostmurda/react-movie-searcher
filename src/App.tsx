import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import MoviesPage from "./components/MoviesPage/MoviesPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Route path="/" render={() => <MoviesPage/>}/>
            </BrowserRouter>
        </div>
    )
}

export default App;
