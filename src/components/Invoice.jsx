import { useSelector } from "react-redux";

const Invoice=(props)=>{
    const {setInvoicePopup}=props
    const overalldata=useSelector((store)=>store.itemSlice);
    const dateData=overalldata.billDates;
    const fromData=overalldata.personinfoFrom;
    const toData=overalldata.personinfoTo;
    const items=overalldata.items;
    const calculation=overalldata.others;
    const Current_Currency_Symbol=overalldata.CurrencySymbol;
    console.log(dateData);
    return(
        <div className="flex flex-col bg-[#f0f0f0] px-10 py-8">
            <div className="flex justify-evenly items-center my-10 ">
                {/* Date Sections */}
                <p>Date:{dateData.cureentDate}</p>
                <p>Due Date:{(dateData.dueDate)?dateData.dueDate:"No Due Date"}</p>
                <p>Invoice No:{(dateData.invoiceNo)?dateData.invoiceNo:"No Invoice number"}</p>
            </div>
            <div className="flex justify-around items-center">
                {/* Info  */}
                <div className="">
                    <p>Bill from: </p>
                    <p>name : {(fromData.name)?fromData.name:'--'}</p>
                    <p>email :{(fromData.email)?fromData.email:'--'}</p>
                    <p>billingadress : {(fromData.billingadress)?fromData.billingadress:'--'}</p>
                </div>

                <div className="">
                    <p>Bill To: </p>
                    <p>name : {(toData.name)?toData.name:'--'}</p>
                    <p>email : {(toData.email)?toData.email:'--'}</p>
                    <p>billingadress : {(toData.billingadress)?toData.billingadress:'--'}</p>
                </div>
            </div>
            <div>
                <div className="flex justify-evenly items-center">
                    <p>Sr No</p>
                    <p>Item Name</p>
                    <p>Item description</p>
                    <p>Quantity</p>
                    <p>Price</p>
                </div>
                {
                    items.map((val,index)=>(
                        <div className="flex justify-evenly items-center">
                            <p>{index+1}</p>
                            <p>{(val.name)?val.name:'----'}</p>
                            <p>{(val.description)?val.description:'----'}</p>
                            <p>{(val.quantity)?val.quantity:'----'}</p>
                            <p>{(val.price)?val.price:'----'}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col justify-end items-end">
                <p>Subtotal:{Current_Currency_Symbol}{calculation.subtotal}</p>
                <p>Tax:{calculation.tax}%</p>
                <p>Discount:{calculation.discount}%</p>
                <p>Total:{Current_Currency_Symbol}{calculation.total}</p>
            </div>
            <button onClick={()=>{
                setInvoicePopup(false);
            }} >Cancel</button>
        </div>
    )
};
export default Invoice;