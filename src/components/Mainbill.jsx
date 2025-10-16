import { useDispatch, useSelector } from "react-redux";
import Itemcard from "./Itemcard";
import { addItem } from "../utilis/itemslice";
import Calculation from "./Calculation";
const Mainbill=()=>{
    const allItemsCard=useSelector((store)=>store.itemSlice.items);
    const dispatchItem=useDispatch();
    // console.log("All items Card",allItemsCard);
    // const [allItems,setallItemname]=useState(allItemsCard)
    return(
        <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-slate-800">Items</h3>
            
            {/* Table */}
            <div className="overflow-x-auto -mx-4 md:mx-0">
                <table className="w-full min-w-[600px]">
                    <thead>
                        <tr className="border-b-2 border-slate-200">
                            <th className="text-left py-3 px-3 text-sm font-semibold text-slate-700 w-16">Sr No</th>
                            <th className="text-left py-3 px-3 text-sm font-semibold text-slate-700">Product</th>
                            <th className="text-left py-3 px-3 text-sm font-semibold text-slate-700">Description</th>
                            <th className="text-left py-3 px-3 text-sm font-semibold text-slate-700 w-24">Quantity</th>
                            <th className="text-left py-3 px-3 text-sm font-semibold text-slate-700 w-28">Price</th>
                            <th className="text-left py-3 px-3 text-sm font-semibold text-slate-700 w-20">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            allItemsCard.map((val,index)=>(
                             <Itemcard key={index}  allinfo={val} srNo={index} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
            {/* Add Button */}
            <div>
                <button 
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-6 rounded-lg transition duration-200 border border-slate-300 cursor-pointer" 
                    onClick={()=>{
                        dispatchItem(addItem());
                    }} 
                >
                    + Add Item
                </button>
            </div>

            {/* Calculation */}
            <div className="mt-4">
                <Calculation/>
            </div>
        </div>
        
    )
};
export default Mainbill;