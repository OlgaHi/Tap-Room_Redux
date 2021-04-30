import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.kegList).map((keg) =>
        <Keg 
          whenKegClicked = {props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          pintsLeft={keg.pintsLeft}
          id={keg.id}
          key={keg.id}
          whenSellClicked={props.onDecrease}/>
      )}
    </React.Fragment>  
  ); 
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onDecrease: PropTypes.func  
};

export default KegList;