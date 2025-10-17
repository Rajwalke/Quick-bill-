import { useEffect, useState } from "react";

const Currencyconverter=()=>{
    const [rate,setRate]=useState(0);
    const [basecurrency,setbasecurrency]=useState('');
    const[targecurency,settargetcurrency]=useState('');
    const [baseval,setbaseval]=useState(0);
    const [tagetval,settargetval]=useState(0);
    useEffect(()=>{
        fecthapi();
    },[basecurrency,targecurency]);
    const fecthapi=async()=>{
        const api=await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_IPhh2uOpBXUadRTk6KjM1kH49RM6L3j2kytjRScc&base_currency=${basecurrency}&currencies=${targecurency}`);
        const data=await api.json();
        setRate(data.data[targecurency])
    }
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">Currency Converter</h1>
                
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                From
                            </label>
                            <select
                                onChange={(e) => setbasecurrency(e.target.value)}
                                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-700"
                            >
                                <option value="">Select currency</option>
                                <option value="USD">USD - US Dollar</option>
                                <option value="INR">INR - Indian Rupee</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British Pound</option>
                                <option value="JPY">JPY - Japanese Yen</option>
                                <option value="AUD">AUD - Australian Dollar</option>
                                <option value="CAD">CAD - Canadian Dollar</option>
                                <option value="CHF">CHF - Swiss Franc</option>
                                <option value="CNY">CNY - Chinese Yuan</option>
                                <option value="SGD">SGD - Singapore Dollar</option>
                                <option value="BTC">BTC - Bitcoin 🪙</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                To
                            </label>
                            <select
                                onChange={(e) => settargetcurrency(e.target.value)}
                                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-700"
                            >
                                <option value="">Select currency</option>
                                <option value="USD">USD - US Dollar</option>
                                <option value="INR">INR - Indian Rupee</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British Pound</option>
                                <option value="JPY">JPY - Japanese Yen</option>
                                <option value="AUD">AUD - Australian Dollar</option>
                                <option value="CAD">CAD - Canadian Dollar</option>
                                <option value="CHF">CHF - Swiss Franc</option>
                                <option value="CNY">CNY - Chinese Yuan</option>
                                <option value="SGD">SGD - Singapore Dollar</option>
                                <option value="BTC">BTC - Bitcoin 🪙</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Amount
                                </label>
                                <input 
                                    type="number" 
                                    value={baseval} 
                                    onChange={(e)=>{
                                        setbaseval(e.target.value)
                                    }}
                                    className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-700"
                                    placeholder="0.00"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Converted Amount
                                </label>
                                <div className="w-full border border-slate-300 p-3 rounded-lg bg-slate-100 text-slate-900 font-semibold text-lg">
                                    {(baseval*rate).toFixed(4)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {rate > 0 && (
                        <div className="text-center text-sm text-slate-600 bg-blue-50 p-3 rounded-lg">
                            Exchange Rate: <span className="font-semibold text-slate-800">{rate.toFixed(6)}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};
export default Currencyconverter;