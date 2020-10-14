import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { postBook, resetErrors } from "./redux/actions/index";

const BookForm = (props) => {
    const [book, setBook] = useState({
      title: "",
      colore: "",
      authors:[props.author.id,]
    });
  
    useEffect(() => {
      return () => {
        if (props.errors.length) props.resetErrors();
      };
    }, []); // Component Will unmount
  
    const submitBook = (event) => {
      event.preventDefault();
      props.postBook(book,props.author,props.closeModal);
    };
  
    const errors = props.errors;
    const textChangeHandler = event => {
      setBook({...book,[event.target.name]:event.target.value})
    }
  return (
  <div className="mt-5 p-2">
      <form onSubmit={submitBook} >  
        {!!errors.length && (
          <div className="alert alert-danger" role="alert">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )} 
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input type="text" className="form-control" name="title" onChange={textChangeHandler} /> 
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Color</span>
          <select type="text" className="form-control" name="color" onChange={textChangeHandler}>       
              <option>red</option>
              <option>green</option>
              <option>blue</option>
          </select>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    errors: state.errorsState.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postBook: (newBook, author,closeModal) =>
      dispatch(postBook(newBook,author,closeModal)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);