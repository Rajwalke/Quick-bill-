import Left from "./Left";
import Right from "./Right";

const Body=()=>{
    return(
        <div className="flex justify-between flex-wrap items-start w-full max-h-fit">
            <div className="w-9/12 border-2 border-black">
                <Left />
            </div>
            <div className="w-3/12 border-2 border-black">
                <Right/>
            </div>
            
            
        </div>
    )
}
export default Body ;