import React from 'react';
import {connect} from 'react-redux';

const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;

const mapStateToProps = state => {
  return {
    optionsOnProps: 
    state.optionsReducer.features.map(item => {
      return item;
    })
  }

}


export default connect(
  mapStateToProps,
  {}
)(AddedFeature)
