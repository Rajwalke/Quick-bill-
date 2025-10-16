import { useDispatch, useSelector } from "react-redux";
import { updateTo } from "../utilis/itemslice";

const Billto=()=>{
    const toinfo=useSelector((store)=>store.itemSlice.personinfoTo);
    // console.log(toinfo);
    const dispatch=useDispatch();
    return(
         <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Bill To</h3>
            
            <div className="flex flex-col gap-2">
                <input 
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm" 
                    placeholder="Client name"
                    value={toinfo.name}
                    onChange={(e)=>{
                        dispatch(updateTo({value:e.target.value,status:"name"}))
                    }}
                />

                <input 
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm" 
                    placeholder="Client email"
                    type="email"
                    value={toinfo.email}
                    onChange={(e)=>{
                        dispatch(updateTo({value:e.target.value,status:"email"}));
                    }}
                />

                <input 
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm" 
                    placeholder="Client address"
                    type="text"
                    value={toinfo.billingadress}
                    onChange={(e)=>{
                        dispatch(updateTo({value:e.target.value,status:"billingadress"}));
                    }}
                />
            </div>
        </div>
    )
};
export default Billto;