import PropTypes from 'prop-types';

import './styles.scss';

const ConvertedAmount = ({ amount, currency }) => (
  <footer className="converted-amount">
    <p className="converted-amount__amount">{amount}</p>
    <h2 className="converted-amount__currency">{currency}</h2>
  </footer>
);

ConvertedAmount.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ConvertedAmount;
