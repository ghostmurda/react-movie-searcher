import React, {useState} from "react";
import {Form, Field} from "react-final-form";
import {Input, StyledForm} from "./InputForm.styles";
import {ReactComponent as SearchIcon} from "../../img/search.svg";
import loadingImage from '../../img/loader.svg';

interface Props{
    onGetSearchMovies: (page: number, query: string) => void;
}

interface Values {
    filmName: string
}

const loadingWait = async (ms: number) => (
    await new Promise<Promise<any>>(resolve => setTimeout(resolve, ms))
)

function InputForm(props: Props) {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: Values) => {
        props.onGetSearchMovies(1, values.filmName);
        setLoading(true);
        await loadingWait(1000);
        setLoading(false);
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
                          {loading && <img src={loadingImage} alt="Loading" width="40"/>}
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