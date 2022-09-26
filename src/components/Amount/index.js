import PropTypes, { func } from 'prop-types';

import './styles.scss';

const Amount = ({ amount, setAmount }) => (
  <header className="amount">
    <h1 className="amount__title">Converter</h1>
    <p className="amount__amount">
      <input
        className="amount__value"
        type="number"
        value={amount > 0 ? amount : ''}
        onChange={
          (event) => {
            setAmount(Number(event.target.value));
          }
        }
      />
      {amount >= 2 ? 'euros' : 'euro'}
    </p>
  </header>
);

Amount.defaultProps = {
  amount: 1,
};

Amount.propTypes = {
  amount: PropTypes.number,
  setAmount: PropTypes.func.isRequired,
};

export default Amount;
