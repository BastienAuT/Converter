/* eslint-disable react/sort-comp */
/* eslint-disable max-len */

import React from 'react';

import Amount from '../Amount';
import Currencies from '../Currencies';
import ConvertedAmount from '../ConvertedAmount';
import Toggler from '../Toggler';

import currenciesList from '../../data/currencies';

import './styles.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Converter extends React.Component {
  state = {
    open: true,
    amount: 1,
    currency: 'Bulgarian Lev',
    filter: '',
  }

  pageTitleEffect() {
    const { currency, amount } = this.state;
    const title = `Convert ${amount} euro${amount >= 2 ? 's' : ''} to ${currency}`;
    document.title = title;
  }

  getConvertedAmount() {
    const { amount, currency } = this.state;
    const foundCurrency = currenciesList.find(
      (currencyItem) => currencyItem.name === currency,
    );
    return Number((amount * foundCurrency.rate).toFixed(2));
  }

  // eslint-disable-next-line class-methods-use-this
  getFilteredCurrencies() {
    const { filter } = this.state;
    const loweredFilter = filter.toLowerCase();
    const filteredCurrencies = currenciesList.filter(
      // eslint-disable-next-line arrow-body-style
      (currencyItem) => {
        const loweredCurrencyName = currencyItem.name.toLowerCase();
        return loweredCurrencyName.includes(loweredFilter);
      },
    );

    return filteredCurrencies;
  }


  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  setCurrency = (currency) => {
    this.setState({ currency: currency });
  }

  setAmount = (amount) => {
    this.setState({ amount });
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  componentDidMount() {
    this.pageTitleEffect();
    document.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        this.setState({ open: false });
      }
    });
  }

  componentDidUpdate() {
    this.pageTitleEffect();
  }

  render() {
    const {
      open, amount, currency, filter,
    } = this.state;
    const convertedAmount = this.getConvertedAmount();

    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        <Amount amount={amount} setAmount={this.setAmount} />
        <Toggler open={open} toggle={this.toggle} />

        {open && <Currencies currencies={filteredCurrencies} setCurrency={this.setCurrency} filter={filter} setFilter={this.setFilter} />}
        <ConvertedAmount amount={convertedAmount} currency={currency} />
      </div>
    );
  }
}

// == Export
export default Converter;
