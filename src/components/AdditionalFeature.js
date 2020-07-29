import React from 'react';
import {connect} from 'react-redux';
import {addOption} from '../actions/optionsActions';


const AdditionalFeature = props => {
  // console.log('AdditionalFeature',props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
        onClick={ () => {props.addOption(props.feature)}}
      >Add</button>
      {/* onClick={ () => addOption(this.state)} */}
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;

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
  {addOption}
)(AdditionalFeature)
