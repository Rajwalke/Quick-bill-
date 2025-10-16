import { useDispatch, useSelector } from "react-redux";
import { updateDiscount, updateTax } from "../utilis/itemslice";
import Invoice from "./Invoice";
import Currency from "./Currency";

const Right=(props)=>{
    const {setInvoicePopup}=props;
    const othersinfo=useSelector((store)=>store.itemSlice.others);
    const dispatch=useDispatch();
    // console.log("Other info",othersinfo);
    return(
         <div className="flex flex-col justify-start items-stretch gap-6 py-8 px-6 bg-white rounded-lg shadow-sm max-h-fit">
            <h1 className="text-2xl font-bold text-gray-800 border-b pb-4">Invoice Settings</h1>
            
            <div className="bg-gray-50 p-4 rounded-lg">
                <Currency/>
            </div>
            
            <label className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-700">Discount</p>
                <div className="flex items-center gap-2">
                    <input 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                        type="number" 
                        min={0} 
                        max={100} 
                        value={othersinfo.discount} 
                        onChange={(e)=>{
                            dispatch(updateDiscount(e.target.value))
                        }}
                    />
                    <span className="text-gray-600 font-medium">%</span>
                </div>
            </label>
            
            <label className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-700">Tax</p>
                <div className="flex items-center gap-2">
                    <input 
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        type="number" 
                        min={0} 
                        max={100}
                        value={othersinfo.tax}
                        onChange={(e)=>{
                            dispatch(updateTax(e.target.value));
                        }}
                    />
                    <span className="text-gray-600 font-medium">%</span>
                </div>
            </label>
            
            <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer transition-colors duration-200 shadow-md hover:shadow-lg mt-auto"
                onClick={()=>{
                    setInvoicePopup(true)
                }}
            >
                Download Invoice
            </button>
        </div>
    )
};
export default Right;