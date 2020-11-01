import React from "react";
import {Form, Field} from "react-final-form";
import {Input, StyledForm} from "./InputForm.styles";
import {ReactComponent as SearchIcon} from "../../img/search.svg";

interface Props{
    onGetSearchMovies: (page: number, query: string) => void;
    page: number | null;
}

function InputForm(props: Props) {
    interface Values {
        filmName: string
    }

    const onSubmit = (values: Values) => {
        props.onGetSearchMovies(1, values.filmName);
        values.filmName = '';
    }

    return (
        <div className="InputForm">
            <Form onSubmit={onSubmit}
                  render={({handleSubmit, form, submitting, pristine, values}) => (
                      <StyledForm onSubmit={handleSubmit}>
                          <Field<string> name="filmName">
                              {({input}) => (
                                  <Input {...input} type="text" placeholder="Search movie"/>
                              )}
                          </Field>
                          <button type="submit" disabled={submitting}>
                              <SearchIcon />
                          </button>
                      </StyledForm>
                  )}
            />
        </div>
    )
}

export default InputForm;