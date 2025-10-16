import { useState } from "react";
import Billfrom from "./Billfrom";
import Billto from "./Billto";
import Mainbill from "./Mainbill";
import { useDispatch, useSelector } from "react-redux";
import { updatebillDates, updateStatusOfPayment } from "../utilis/itemslice";
const Left=()=>{
    const billdatesinfo=useSelector((store)=>store.itemSlice.billDates);
    const dispatch=useDispatch();
    
    const currentDate=new Date();
    const dateOnly = currentDate.toLocaleDateString();
    dispatch(updatebillDates({value:dateOnly,status:"cureentDate"}));
    return(
         <div className="flex flex-col">
      {/* Date Section */}
      <div className="flex flex-col md:flex-row justify-between gap-6 p-6 md:p-8 border-b border-slate-200">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Current Date:</span>
            <span className="text-sm font-semibold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">{dateOnly}</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Due Date</label>
            <input 
              type="date" 
              value={billdatesinfo.duedate}
              onChange={(e) => dispatch(updatebillDates({value:e.target.value,status:"dueDate"}))}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Invoice Number</label>
          <input 
            type="number" 
             value={billdatesinfo.invoiceNo}
              onChange={(e) => dispatch(updatebillDates({value:e.target.value,status:"invoiceNo"}))}
            placeholder="Enter invoice #"
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition w-full md:w-48"
          />
          <div>
            <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition w-full md:w-48" 
            onChange={(e)=>dispatch(updateStatusOfPayment(e.target.value))}
            defaultValue=""
            >
                <option value="" disabled>Select Status</option>
                <option value="Paid">Paid</option>
                <option value="Due">Due</option>
                <option value="Overdue">Overdue</option>
                <option value="On Hold">On Hold</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bill Info Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8 p-6 md:p-8 border-b border-slate-200">
        <Billfrom />
        <Billto />
      </div>
      
      {/* Main Bill Content */}
      <div className="p-6 md:p-8">
        <Mainbill />
      </div>
    </div>
    )
};
export default Left;