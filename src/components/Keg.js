import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  const kegStyle = {
    color: "AntiqueWhite",
    padding: "2%"
  }

  return (
    <React.Fragment>
      <div style={kegStyle} onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Beer name: {props.name}</h3>
        <h3>Beer brand: {props.brand}</h3>
        <h3>Price: {props.price}</h3>
        <h3>Alcohol Content: {props.abv}</h3>
        <p style={{
              padding: "1%",
              margin: "3% 1% 3%",
              fontSize: "200%",
              backgroundColor: "hsla(20,33%, 25%, 0.60)",
            }}><span>Pints left: {props.pintsLeft}</span></p>
      </div>
      <button className="btn btn-secondary" onClick = {() => props.whenSellClicked(props.id)}>Sell</button>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default Keg;