import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import Invoice from "./Invoice";

const Body=()=>{
        const [invoicepopup,setInvoicePopup]=useState(false);
    return(
        <div className="flex relative justify-between flex-wrap items-start w-full max-h-fit">
            <div className="w-9/12 border-2 border-black">
                <Left />
            </div>
            <div className="w-3/12 border-2 border-black">
                <Right setInvoicePopup={setInvoicePopup}  />
            </div>
            <div className="absolute top-0 left-52 ">
                {
                invoicepopup && <Invoice setInvoicePopup={setInvoicePopup}/>
                }
            </div>
            
            
        </div>
    )
}
export default Body ;