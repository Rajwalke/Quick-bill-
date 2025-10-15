import { useDispatch, useSelector } from "react-redux";
import Itemcard from "./Itemcard";
import { addItem } from "../utilis/itemslice";
import Calculation from "./Calculation";
const Mainbill=()=>{
    const allItemsCard=useSelector((store)=>store.itemSlice.items);
    const dispatchItem=useDispatch();
    console.log("All items Card",allItemsCard);
    // const [allItems,setallItemname]=useState(allItemsCard)
    return(
        <div>
            <table className="w-full">
                <thead className="text-center">
                    <td>Sr No</td>
                    <td>Product</td>
                    <td>Description</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Action</td>
                </thead>
                <tbody className="">
                    {
                        allItemsCard.map((val,index)=>(
                         <Itemcard key={index}  allinfo={val} srNo={index} />
                        ))
                    }
                </tbody>
                

            </table>
            
            

            <div>
                <button className="cursor-pointer" onClick={()=>{
                    dispatchItem(addItem());
                }} >ADD</button>
            </div>

            <div>
                <Calculation/>
            </div>


        </div>
        
    )
};
export default Mainbill;