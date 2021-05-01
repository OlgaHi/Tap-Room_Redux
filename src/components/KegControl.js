import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

const centerAlign = {
  textAlign: "center",
  margin: "5%",
};

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
    }
  }
  
  //determine what state should show
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
      });

    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  
  //add new keg into array
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  
  //select a keg
  handleSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  //decrease pints
  handleDecrease = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    if (selectedKeg.pintsLeft > 0) {
      selectedKeg.pintsLeft --;
      this.setState({selectedKeg: null});
    } else {
      alert("Sorry, its out of stock");
    }
  }

  //delete a keg
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }
  
  
  //handle edit button
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editKeg();
    dispatch(action);
  }
  
  //edit keg in a list
  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props
    const action = a.addKeg(kegToEdit)
    dispatch(action);
    const action2 = a.editKeg();
    dispatch(action2);
    this.setState({
      selectedKeg: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Menu";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Menu";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleSelectedKeg} onDecrease={this.handleDecrease}/>
      buttonText = "Add New Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div style={centerAlign}>
          <button className="btn btn-light" onClick={this.handleClick}>
            {buttonText}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);


export default KegControl;