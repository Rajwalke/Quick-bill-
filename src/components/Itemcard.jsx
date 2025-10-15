
import { deleteItem, updatedescription, updatename, updateprice, updatequantity } from "../utilis/itemslice";
import { useDispatch, useSelector } from "react-redux";
const Itemcard=(props)=>{
    const {allinfo,srNo}=props
    const dispatch=useDispatch();
    const Current_Currency_Symbol=useSelector((store)=>store.itemSlice.CurrencySymbol);
    return(
        <tr className="border-2 border-black p-2 mx-2  ">
            <td>{srNo+1}</td>
            <td>
                <input type="text" placeholder="Enter Product Name"
                value={allinfo.name}
                onChange={(e)=>{
                    // setItemname(e.target.value);
                     dispatch(updatename({ index: srNo, value: e.target.value}))
                }}
                />
            </td>
            <td>
                <input type="text" placeholder="Enter Description"
                value={allinfo.description}
                onChange={(e)=>{
                    // setDescription(e.target.value);
                    dispatch(updatedescription({index:srNo,value:e.target.value}))
                }}
                />
            </td>
            <td>
                <input type="Number" placeholder="1"  
                value={allinfo.quantity}
                className="text-center"
                onChange={(e)=>{
                    // setQuantity(e.target.value);
                    dispatch(updatequantity({index:srNo,value:e.target.value}))
                }}
                />
            </td>
            <td>
                {Current_Currency_Symbol}
                <input type="number"
                value={allinfo.price}
                className="text-center"
                onChange={(e)=>{
                    // setPrice(e.target.value);
                    dispatch(updateprice({index:srNo,value:e.target.value}));
                }}
                />
            </td>
            <td className="cursor-pointer" onClick={()=>{
                dispatch(deleteItem({index:srNo}))
            }} >Delete</td>

        </tr>
    )
};
export default Itemcard;