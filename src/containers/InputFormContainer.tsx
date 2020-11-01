import React from "react";
import {connect} from "react-redux";
import {RootState} from "../store/rootReducer";
import {thunkSearchMovies} from "../store/movies/actions";
import InputForm from "../components/InputForm/InputForm";
import {ThunkDispatch} from "redux-thunk";

interface StateProps{
    page: number | null;
}

interface DispatchProps{
    onGetSearchMovies: (page: number, query: string) => void;
}

const mapStateToProps = (state: RootState) => {
    return {
        page: state.movies.page
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        onGetSearchMovies: (page: number, query: string) => dispatch(thunkSearchMovies(page, query))
    }
}

type Props = StateProps & DispatchProps;

function InputFormContainer(props: Props){
    return (
        <InputForm
            page={props.page}
            onGetSearchMovies={props.onGetSearchMovies}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(InputFormContainer);