import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
  // console.log(props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.carOnProps.image} alt={props.carOnProps.name} />
      </figure>
      <h2>{props.carOnProps.name}</h2>
      <p>Amount: ${props.carOnProps.price}</p>
    </>
  );
};

// export default Header;

const mapStateToProps = state => {
  return {
    carOnProps: state.base_modelReducer.car
  }
}

export default connect(
  mapStateToProps,
  {}
)(Header)
