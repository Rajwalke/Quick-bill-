import { useSelector } from "react-redux";

const Calculation=()=>{
    const allCalulation=useSelector((store)=>store.itemSlice.items);
    console.log(allCalulation);
    const othersinfo=useSelector((store)=>store.itemSlice.others);

    let priceSub=0;
    allCalulation.map((info,index)=>{
        priceSub+=(info.quantity)*(info.price)
    })
    let discountSub=othersinfo.discount;
    let taxSub=othersinfo.tax;
    let finalTotal=priceSub * (1+(taxSub/100)) * (1-(discountSub/100)) ;
    // Final = Amount × (1 + Tax/100) × (1 - Discount/100)
    return(
        <div className="flex flex-col gap-5 justify-center items-end px-20 py-10">
            <div>
                <p>Subtotal:{priceSub}</p>
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
                <p>Total:{Math.round(finalTotal*100)/100}</p>
                <p></p>
            </div>
        </div>
    )
};
export default Calculation;