import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  
  const detailStyles = {
    color: "AntiqueWhite",
    padding: "2%"
  };

  return (
    <React.Fragment>
      <div style={detailStyles}>
        <h1>Keg Details:</h1>
        <h3>Bear name: {keg.name}</h3>
        <h3>Bear brand: {keg.brand}</h3>
        <h3>Price: {keg.price}</h3>
        <h3>Alcohol Content: {keg.abv}</h3>
        <h3>Pints left: {keg.pintsLeft}</h3>
        <button style={{margin: "13px 12px 12px 10px"}}className="btn btn-light" onClick={ props.onClickingEdit }>Edit</button>
        <button className="btn btn-danger" onClick={()=> onClickingDelete(keg.id) }>Delete</button>
      </div>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;