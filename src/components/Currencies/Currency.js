import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Currency extends React.Component {
  render() {
    const { name, setCurrency } = this.props;
    return (
      <li
        onClick={() => {
          setCurrency(name);
        }}
        className="currencies__item"
      >
        {name}
      </li>
    );
  }
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default Currency;
