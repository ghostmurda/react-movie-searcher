import React from "react";
import {connect} from "react-redux";
import {thunkSearchMovies} from "../store/movies/actions";
import InputForm from "../components/InputForm/InputForm";
import {ThunkDispatch} from "redux-thunk";

interface DispatchProps{
    onGetSearchMovies: (page: number, query: string) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        onGetSearchMovies: (page: number, query: string) => dispatch(thunkSearchMovies(page, query))
    }
}

function InputFormContainer(props: DispatchProps){
    return (
        <InputForm onGetSearchMovies={props.onGetSearchMovies} />
    )
}

export default connect(null, mapDispatchToProps)(InputFormContainer);