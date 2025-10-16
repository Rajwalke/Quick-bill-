import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import Invoice from "./Invoice";

const Body=()=>{
        const [invoicepopup,setInvoicePopup]=useState(false);
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Create Invoice</h1>
          <p className="text-slate-600">Fill in the details below to generate your invoice</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* Left Section */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200">
            <Left />
          </div>
          
          {/* Right Section */}
          <div className="lg:w-80 bg-white rounded-xl shadow-sm border border-slate-200">
            <Right setInvoicePopup={setInvoicePopup} />
          </div>
          
          {/* Invoice Popup */}
          {invoicepopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl">
                <Invoice setInvoicePopup={setInvoicePopup} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    )
}
export default Body ;