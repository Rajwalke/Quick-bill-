import { useDispatch, useSelector } from "react-redux";
import { updateTo } from "../utilis/itemslice";

const Billto=()=>{
    const toinfo=useSelector((store)=>store.itemSlice.personinfoTo);
    console.log(toinfo);
    const dispatch=useDispatch();
    return(
        <div className="flex flex-col">
                    <label>Bill To:</label>
                    <input className="inp_filed p-2 text-start text-md" placeholder="Who is the invoice to"
                    value={toinfo.name}
                    onChange={(e)=>{
                        dispatch(updateTo({value:e.target.value,status:"name"}))
                    }}
                    />

                    <input className="inp_filed p-2 text-start text-md" placeholder="Who is the invoice to"
                    value={toinfo.email}
                    onChange={(e)=>{
                        dispatch(updateTo({value:e.target.value,status:"email"}));
                    }}
                    />

                    <input className="inp_filed p-2 text-start text-md" placeholder="Who is the invoice to"
                    value={toinfo.billingadress}
                    onChange={(e)=>{
                        dispatch(updateTo({value:e.target.value,status:"billingadress"}));
                    }}
                    />

                </div>
    )
};
export default Billto;