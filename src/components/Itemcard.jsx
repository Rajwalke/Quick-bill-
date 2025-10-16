
import { deleteItem, updatedescription, updatename, updateprice, updatequantity } from "../utilis/itemslice";
import { useDispatch, useSelector } from "react-redux";
const Itemcard=(props)=>{
    const {allinfo,srNo}=props
    const dispatch=useDispatch();
    const Current_Currency_Symbol=useSelector((store)=>store.itemSlice.CurrencySymbol);
    return(
        <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
            <td className="py-3 px-3 text-sm text-slate-700 font-medium">{srNo+1}</td>
            <td className="py-3 px-3">
                <input 
                    type="text" 
                    placeholder="Enter Product Name"
                    value={allinfo.name}
                    onChange={(e)=>{
                        dispatch(updatename({ index: srNo, value: e.target.value}))
                    }}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                />
            </td>
            <td className="py-3 px-3">
                <input 
                    type="text" 
                    placeholder="Enter Description"
                    value={allinfo.description}
                    onChange={(e)=>{
                        dispatch(updatedescription({index:srNo,value:e.target.value}))
                    }}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                />
            </td>
            <td className="py-3 px-3">
                <input 
                    type="Number" 
                    placeholder="1"  
                    value={allinfo.quantity}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm text-center"
                    onChange={(e)=>{
                        dispatch(updatequantity({index:srNo,value:e.target.value}))
                    }}
                />
            </td>
            <td className="py-3 px-3">
                <div className="flex items-center gap-1">
                    <span className="text-sm text-slate-600 font-medium">{Current_Currency_Symbol}</span>
                    <input 
                        type="number"
                        value={allinfo.price}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm text-center"
                        onChange={(e)=>{
                            dispatch(updateprice({index:srNo,value:e.target.value}));
                        }}
                    />
                </div>
            </td>
            <td className="py-3 px-3">
                <button 
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 font-medium text-sm px-3 py-1 rounded transition cursor-pointer" 
                    onClick={()=>{
                        dispatch(deleteItem({index:srNo}))
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
};
export default Itemcard;