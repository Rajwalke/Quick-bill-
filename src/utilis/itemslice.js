import { createSlice } from "@reduxjs/toolkit";

const itemSlice=createSlice({
    name:'itemsSlice',
    initialState:{
        items:[
            {
                name:"",
                description:"",
                quantity:1,
                price:""
            }
        ],
        others:{
            discount:0,
            tax:0
        },
        personinfoFrom:{
            name:'',
            email:'',
            billingadress:''
        },
        personinfoTo:{
            name:'',
            email:'',
            billingadress:''
        },
        billDates:{
            cureentDate:'',
            dueDate:'',
            invoiceNo:''
        }
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push({
                name:"",
                description:"",
                quantity:1,
                price:""
            });
        },
        updatename:(state,action)=>{
            const { index, value } = action.payload;
            const pvtname=state.items[index];
            pvtname.name=value
        },
        updatedescription:(state,action)=>{
            const {index,value}=action.payload;
            const pvtdescription=state.items[index];
            pvtdescription.description=value
        },
        updatequantity:(state,action)=>{
            const {index,value}=action.payload;
            const pvtquantity=state.items[index];
            pvtquantity.quantity=value;
        },
        updateprice:(state,action)=>{
            const {index,value}=action.payload;
            const pvtprice=state.items[index];
            pvtprice.price=value
        },
        deleteItem:(state,action)=>{
            const {index}=action.payload;
            state.items.splice(index,1)
        },
        updateDiscount:(state,action)=>{
            state.others.discount=action.payload;
        },
        updateTax:(state,action)=>{
            state.others.tax=action.payload;
        },
        updateFrom:(state,action)=>{
            const {value,status}=action.payload;
            state.personinfoFrom[status]=value;
        },
        updateTo:(state,action)=>{
            const {value,status}=action.payload;
            state.personinfoTo[status]=value
        },
        updatebillDates:(state,action)=>{
            const {value,status}=action.payload
            state.billDates[status]=value
        }

    }
});
export default itemSlice.reducer;
export const {addItem,updatename,updatedescription,updateprice,updatequantity,deleteItem,updateDiscount,updateTax,updateFrom,updateTo,updatebillDates}=itemSlice.actions;