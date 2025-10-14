import { useDispatch, useSelector } from "react-redux";
import { updateFrom } from "../utilis/itemslice";

const Billfrom=()=>{
    const fromInfo=useSelector((store)=>store.itemSlice.personinfoFrom);
    const dispatch=useDispatch();
    return(
        <div className="flex flex-col">
                    <label>Bill from</label>
                    <input className="inp_filed p-2 text-start text-md" placeholder="Who is the invoice from"
                    value={fromInfo.name}
                    onChange={(e)=>{
                        dispatch(updateFrom({value:e.target.value,status:"name"}))
                    }}
                    />
                    <input className="inp_filed p-2 text-start text-md"  placeholder="Email address" 
                    type="email"
                    value={fromInfo.email}
                    onChange={(e)=>{
                       dispatch(updateFrom({value:e.target.value,status:"email"}))
                    }}
                    />
                    <input className="inp_filed p-2 text-start text-md" placeholder="Billing address"
                    type="text"
                    value={fromInfo.billingadress}
                    onChange={(e)=>{
                        dispatch(updateFrom({value:e.target.value,status:"billingadress"}))
                    }}
                    />

                </div>
    )
};
export default Billfrom;