import { useDispatch, useSelector } from "react-redux";
import { updateSubtotal, updatetotal } from "../utilis/itemslice";

const Calculation=()=>{
    const allCalulation=useSelector((store)=>store.itemSlice.items);
    console.log(allCalulation);
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
        <div className="flex flex-col gap-5 justify-center items-end px-20 py-10">
            <div>
                <p>Subtotal:{Current_Currency_Symbol}:{priceSub}</p>
                <p>
                   
                </p>
            </div>
            <div>
                <p>Discount:{discountSub}</p>
            
            </div>
            <div>
                <p>Tax:{taxSub}</p>
            </div>
            <div>
                <p>Total:<span className="bg-[#f0f0f0cc] py-1 px-2 mx-1 rounded-full font-bold">{Current_Currency_Symbol}</span>:{Math.round(finalTotal*100)/100}</p>
            </div>
        </div>
    )
};
export default Calculation;