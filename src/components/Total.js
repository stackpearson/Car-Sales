import React from 'react';
import {connect} from 'react-redux';

const Total = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.basePriceOnProps + props.additionalPriceOnProps}</h4>
    </div>
  );
};

// export default Total;

const mapStateToProps = state => {
  return {
    basePriceOnProps: state.base_modelReducer.car.price,
    additionalPriceOnProps: state.optionsReducer.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  {}
)(Total)
