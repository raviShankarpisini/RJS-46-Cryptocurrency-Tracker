// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachItem
  return (
    <li className="item-container">
      <div className="logo-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="crypto-text">{currencyName}</p>
      </div>
      <div className="text-container">
        <p className="crypto-text">{usdValue}</p>
        <p className="crypto-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
