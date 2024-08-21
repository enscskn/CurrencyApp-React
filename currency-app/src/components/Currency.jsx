import React, {useState} from 'react'
import './Currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'
let API_KEY = "YOUR_API_KEY" // You can get your free API key from https://freecurrencyapi.com/

function Currency() {

    const[amount, setAmount] = useState(0)
    const[fromCurrency, setFromCurrency] = useState('USD')
    const[toCurrency, setToCurrency] = useState('TRY')
    const[result, setResult] = useState(0)

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        console.log(toCurrency)
        const data = response.data.data[toCurrency]

        setResult((amount * data).toFixed(2))
    }

    return (
        <div className='currency-div'>
            <div className='text'>
                <h3>Döviz Kuru Uygulaması</h3>
            </div>
            <div className='from-to-currency'>
            <input 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            type="number" 
            className='amount'/>
            <select 
            onChange={(e) => setFromCurrency(e.target.value)}
            className='from-currency-option'>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <FaRegArrowAltCircleRight className='arrow'/>

            <select 
            onChange={(e) => setToCurrency(e.target.value)}
            className='to-currency-option'>
                <option>TRY</option>
                <option>EUR</option>
                <option>USD</option>
            </select>

            <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="number" className='result'/>
            </div>
            
            <div>
                <button 
                onClick={exchange}
                className='button'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency