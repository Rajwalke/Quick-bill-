
import { deleteItem, updatedescription, updatename, updateprice, updatequantity } from "../utilis/itemslice";
import { useDispatch } from "react-redux";
const Itemcard=(props)=>{
    const {allinfo,srNo}=props
    const dispatch=useDispatch();
    return(
        <div className="flex justify-evenly items-center border-2 border-black p-2 mx-2">
            <p>{srNo+1}</p>
            <label>
                <input type="text" placeholder="Enter Product Name"
                value={allinfo.name}
                onChange={(e)=>{
                    // setItemname(e.target.value);
                     dispatch(updatename({ index: srNo, value: e.target.value}))
                }}
                />
                <input type="text" placeholder="Enter Description"
                value={allinfo.description}
                onChange={(e)=>{
                    // setDescription(e.target.value);
                    dispatch(updatedescription({index:srNo,value:e.target.value}))
                }}
                />
            </label>
            <label>
                <input type="Number" placeholder="1"  
                value={allinfo.quantity}
                onChange={(e)=>{
                    // setQuantity(e.target.value);
                    dispatch(updatequantity({index:srNo,value:e.target.value}))
                }}
                />
            </label>
            <label>
                <input type="number"
                value={allinfo.price}
                onChange={(e)=>{
                    // setPrice(e.target.value);
                    dispatch(updateprice({index:srNo,value:e.target.value}));
                }}
                />
            </label>
            <p className="cursor-pointer" onClick={()=>{
                dispatch(deleteItem({index:srNo}))
            }} >Delete</p>

        </div>
    )
};
export default Itemcard;