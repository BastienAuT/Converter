import PropTypes from 'prop-types';

import Currency from './Currency';

import './styles.scss';

const Currencies = ({ currencies, setCurrency, filter, setFilter}) => (
  <main className="currencies">
    <input
      value={filter}
      type="text"
      className="currencies__filter"
      placeholder="Rechercher votre devise..."
      onChange={
        (event) => {
          setFilter(event.target.value);
        }
      }
    />
    <ul className="currencies__list">
      {
        currencies.map(
          (currency) => <Currency key={currency.name} setCurrency={setCurrency} {...currency} />,
        )
      }
    </ul>
  </main>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Currencies;
