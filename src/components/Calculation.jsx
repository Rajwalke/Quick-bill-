import { useDispatch, useSelector } from "react-redux";
import { updateSubtotal, updatetotal } from "../utilis/itemslice";

const Calculation=()=>{
    const allCalulation=useSelector((store)=>store.itemSlice.items);
    // console.log(allCalulation);
    const othersinfo=useSelector((store)=>store.itemSlice.others);
    const dispatch=useDispatch();
    const Current_Currency_Symbol=useSelector((store)=>store.itemSlice.CurrencySymbol);

    let priceSub=0;
    allCalulation.map((info,index)=>{
        priceSub+=(info.quantity)*(info.price)
    })
    let discountSub=othersinfo.discount;
    let taxSub=othersinfo.tax;
    let finalTotal=priceSub * (1+(taxSub/100)) * (1-(discountSub/100)) ;
    // Final = Amount × (1 + Tax/100) × (1 - Discount/100)
    dispatch(updateSubtotal(priceSub));
    dispatch(updatetotal(finalTotal));
    return(
        <div className="flex flex-col gap-3 ml-auto max-w-xs bg-slate-50 p-6 rounded-lg border border-slate-200">
            <div className="flex justify-between text-sm">
                <span className="text-slate-600">Subtotal:</span>
                <span className="font-semibold text-slate-800">{Current_Currency_Symbol}{priceSub}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-slate-600">Discount:</span>
                <span className="font-semibold text-slate-800">{discountSub}%</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-slate-600">Tax:</span>
                <span className="font-semibold text-slate-800">{taxSub}%</span>
            </div>
            <div className="border-t border-slate-300 pt-3 mt-2">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-800">Total:</span>
                    <span className="font-bold text-lg text-blue-600">
                        <span className="bg-slate-100 py-1 px-2 mx-1 rounded-full">{Current_Currency_Symbol}</span>
                        {Math.round(finalTotal*100)/100}
                    </span>
                </div>
            </div>
        </div>

    )
};
export default Calculation;