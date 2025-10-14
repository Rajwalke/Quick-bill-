import { useDispatch, useSelector } from "react-redux";
import { updateDiscount, updateTax } from "../utilis/itemslice";

const Right=()=>{
    const othersinfo=useSelector((store)=>store.itemSlice.others);
    const dispatch=useDispatch();
    console.log("Other info",othersinfo);
    return(
        <div className="flex flex-col justify-center items-start gap-5 py-5 px-5">
            <h1>Right Part</h1>
            <label className="">
                <p>Discount</p>
                <input className="" type="number" min={0} max={100} value={othersinfo.discount} onChange={(e)=>{
                    dispatch(updateDiscount(e.target.value))
                }}/>%
            </label>
            <label>
                <p>Tax</p>
                <input type="number" min={0} max={100}
                value={othersinfo.tax}
                onChange={(e)=>{
                    dispatch(updateTax(e.target.value));
                }}
                />%
            </label>
            <button className="bg-[#f0f0f0] p-3 rounded-xl cursor-pointer">Download Invoice</button>
        </div>
    )
};
export default Right;