import { useState } from "react";
import Billfrom from "./Billfrom";
import Billto from "./Billto";
import Mainbill from "./Mainbill";
import { useDispatch, useSelector } from "react-redux";
import { updatebillDates } from "../utilis/itemslice";
const Left=()=>{
    const billdatesinfo=useSelector((store)=>store.itemSlice.billDates);
    const dispatch=useDispatch();
    const[duedate,setDuedate]=useState('');
    const[invoiceNo,setinvoiceNo]=useState('');
    
    const currentDate=new Date();
    const dateOnly = currentDate.toLocaleDateString();
    dispatch(updatebillDates({value:dateOnly,status:"cureentDate"}));
    return(
        <div className="flex flex-col">
            <div className="flex justify-between flex-wrap items-start border-b-2 border-black px-10 py-10">
                {/* Date */}
                <div className="flex flex-col gap-5">
                    <label>Current Date : <span>{dateOnly}</span></label>
                    <label>Due Date
                    <input type="date" value={billdatesinfo.dueDate} 
                    onChange={(e)=>{
                      dispatch(updatebillDates({value:e.target.value,status:"dueDate"}));
                    }}
                    
                    />    
                    </label>
                    
                </div>
                <div>
                    <label>Invoice Number:</label>
                    <input type="number" value={billdatesinfo.invoiceNo} 
                    onChange={(e)=>{
                        dispatch(updatebillDates({value:e.target.value,status:'invoiceNo'}))
                    }}/>
                </div>
            </div>

            <div className="flex justify-between flex-wrap items-start px-10 py-10 border-b-2 border-black mb- ">
                {/* bill info */}
                <Billfrom/>
                <Billto/>
            </div>
            <div>
                {/* bill content */}
                <Mainbill/>
            </div>
        </div>
    )
};
export default Left;