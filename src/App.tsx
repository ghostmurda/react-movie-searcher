import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import MoviesPage from "./components/MoviesPage/MoviesPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Route path="/">
                    <Redirect to="/react-movie-searcher" />
                </Route>
                <Route exact path="/react-movie-searcher" render={() => <MoviesPage/>}/>
            </BrowserRouter>
        </div>
    )
}

export default App;
