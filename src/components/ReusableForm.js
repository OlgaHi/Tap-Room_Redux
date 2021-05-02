import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  const formStyles = {
    padding: "4%",
    color: "AntiqueWhite",
  };
  return (
    <React.Fragment>
      <div style={formStyles}>
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <h4>Name: </h4>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className="form-control"
              required />
          </div>
          <div className="form-group">
            <h4>Brand: </h4>
            <input
              type='text'
              name='brand'
              placeholder='Brand'
              className="form-control"
              required />
          </div>
          <div className="form-group">
            <h4>Price: </h4>
            <input
              type='number'
              name='price'
              placeholder='Price' 
              className="form-control"
              required />
          </div>
          <div className="form-group">
            <h4>ABV: </h4>
            <input
              type='text'
              name='abv'
              placeholder='Alcohol Content'
              className="form-control"
              required />
          </div>
          <div className="form-group">
            <h4>Quantity: </h4>
            <input
              type='number'
              name='pintsLeft'
              placeholder='Quantity'
              className="form-control"
              required />
          </div>
        
        <button className="btn btn-secondary" type='submit'>{props.buttonText}</button>
      </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;