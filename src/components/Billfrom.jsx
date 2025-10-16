import { useDispatch, useSelector } from "react-redux";
import { updateFrom } from "../utilis/itemslice";

const Billfrom=()=>{
    const fromInfo=useSelector((store)=>store.itemSlice.personinfoFrom);
    const dispatch=useDispatch();
    return(
         <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Bill From</h3>
            
            <div className="flex flex-col gap-2">
                <input 
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm" 
                    placeholder="Your name or business"
                    value={fromInfo.name}
                    onChange={(e)=>{
                        dispatch(updateFrom({value:e.target.value,status:"name"}))
                    }}
                />
                
                <input 
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"  
                    placeholder="Email address" 
                    type="email"
                    value={fromInfo.email}
                    onChange={(e)=>{
                       dispatch(updateFrom({value:e.target.value,status:"email"}))
                    }}
                />
                
                <input 
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm" 
                    placeholder="Billing address"
                    type="text"
                    value={fromInfo.billingadress}
                    onChange={(e)=>{
                        dispatch(updateFrom({value:e.target.value,status:"billingadress"}))
                    }}
                />
            </div>
        </div>
    )
};
export default Billfrom;