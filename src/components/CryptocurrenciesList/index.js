// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenicesList extends Component {
  state = {list: {}, isLoading: true}

  componentDidMount() {
    this.getListData()
  }

  getListData = async () => {
    const request = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await request.json()
    const dataAfterCaseConversion = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({list: dataAfterCaseConversion, isLoading: false})
  }

  jsxFunction = () => {
    const {list} = this.state
    return (
      <div className="lst-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <div className="card-container">
          <div className="card-nav-bar">
            <div className="card-text">
              <p>Coin Type</p>
            </div>

            <div className="usd-euro-container">
              <p className="card-text">USD</p>
              <p className="card-text">EURO</p>
            </div>
          </div>
          <ul>
            {list.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      this.jsxFunction()
    )
  }
}

export default CryptocurrenicesList
