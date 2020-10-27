import React from "react";
import {Form, Field} from "react-final-form";

function InputForm() {
    interface Values {
        filmName: string
    }

    const onSubmit = (values: Values) => {
        alert(values.filmName);
        values.filmName = '';
    }

    return (
        <div className="InputForm">
            <Form onSubmit={onSubmit}
                  render={({handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>
                          <Field<string> name="filmName">
                              {({input}) => (
                                  <input {...input} type="text" placeholder="Search"/>
                              )}
                          </Field>
                          <button type="submit" disabled={submitting}>
                              Search
                          </button>
                      </form>
                  )}
            />
        </div>
    )
}

export default InputForm;