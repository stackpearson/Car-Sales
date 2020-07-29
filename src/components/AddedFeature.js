import React from 'react';
import {connect} from 'react-redux';
import {removeOption, purgeOption} from '../actions/optionsActions';

const AddedFeature = props => {
  console.log(props)
  return (
    <li key={props.feature.id}>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
        onClick={ () => {props.removeOption(props.feature.id);
        props.purgeOption(props.feature)}}
      >X</button>
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
  {removeOption, purgeOption}
)(AddedFeature)
