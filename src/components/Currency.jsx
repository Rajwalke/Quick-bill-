import { useEffect, useState } from "react";
import { currencies } from "../utilis/currencyData";
import { useDispatch } from "react-redux";
import { updateCurrency } from "../utilis/itemslice";
const Currency=()=>{
  const API_KEY = import.meta.env.VITE_API_KEY;
  const countryCurrency=currencies;
//   console.log(countryCurrency);
  const [selectCurrency,setcurrency]=useState("INR");
  const dispatch=useDispatch();
    // useEffect(()=>{
    //     fetchCurrency();
    // },[]);
    // const fetchCurrency=async()=>{
    //     console.log(API_KEY)
    //         const response = await fetch('https://api.apiverve.com/v1/currencysymbols?currency=GBP', {
    //             method: 'GET',
    //             headers: {
    //             'X-API-Key': '68bdb05f-84cc-493c-93a8-f0170fcf2edb',
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     const data = await response.json();
    //     console.log(data);
    // }
    console.log("current currency is",selectCurrency)
    return(
        <div>
            <h1>Currency:</h1>
            <select name="currencyCountry" id="currency"onChange={(e)=>{
                dispatch(updateCurrency(e.target.value));
            }} >
                {
                    countryCurrency.map((val,index)=>(
                        <option key={index} value={val.symbol}
                        >{val.country}</option>
                    ))
                    
                }
            </select>
        </div>
    )
};
export default Currency;