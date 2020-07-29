import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';

const AdditionalFeatures = props => {
  // console.log(props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.optionsOnProps.length ? (
        <ol type="1">
          {props.optionsOnProps.map(item => (
            <AdditionalFeature key={item.id} feature={item} /> 
            // feature={item}
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// export default AdditionalFeatures;

const mapStateToProps = state => {
  return {
    optionsOnProps: state.optionsReducer.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures)
