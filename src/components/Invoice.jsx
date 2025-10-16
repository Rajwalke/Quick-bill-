import { useSelector } from "react-redux";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';

const Invoice=(props)=>{
    const {setInvoicePopup}=props
    const overalldata=useSelector((store)=>store.itemSlice);
    const dateData=overalldata.billDates;
    const fromData=overalldata.personinfoFrom;
    const toData=overalldata.personinfoTo;
    const items=overalldata.items;
    const calculation=overalldata.others;
    const Current_Currency_Symbol=overalldata.CurrencySymbol;
    const statusOfPayment=overalldata.statusOfPayment;
    const invoiceRef = useRef(null);
    
    console.log("bill date is ",dateData);
    
    const downloadInvoice = async () => {
        try {
            console.log('Starting PDF generation...');
            
            // Create a temporary container
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.top = '0';
            tempContainer.style.width = '800px';
            tempContainer.style.backgroundColor = '#ffffff';
            tempContainer.style.padding = '40px';
            tempContainer.style.fontFamily = 'Arial, sans-serif';
            
            // Build invoice HTML with inline styles only
            tempContainer.innerHTML = `
                <div style="background-color: #ffffff; padding: 40px; font-family: Arial, sans-serif;">
                    <div style="border-bottom: 2px solid #d1d5db; padding-bottom: 16px; margin-bottom: 24px;">
                        <h1 style="font-size: 28px; font-weight: bold; color: #1f2937; margin: 0;">INVOICE</h1>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 32px; background-color: #f3f4f6; padding: 16px; border-radius: 8px;">
                        <div>
                            <div style="font-size: 11px; color: #6b7280; font-weight: 600;">DATE</div>
                            <div style="font-size: 13px; color: #1f2937; margin-top: 4px;">${dateData.cureentDate}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; color: #6b7280; font-weight: 600;">DUE DATE</div>
                            <div style="font-size: 13px; color: #1f2937; margin-top: 4px;">${dateData.dueDate || "No Due Date"}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; color: #6b7280; font-weight: 600;">INVOICE NO</div>
                            <div style="font-size: 13px; color: #1f2937; margin-top: 4px;">${dateData.invoiceNo || "No Invoice number"}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; color: #6b7280; font-weight: 600;">STATUS OF PAYMENT</div>
                            <div style="font-size: 13px; color: #1f2937; margin-top: 4px;">${statusOfPayment || "No Status"}</div>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; margin-bottom: 32px; gap: 24px;">
                        <div style="flex: 1; background-color: #dbeafe; padding: 20px; border-radius: 8px;">
                            <p style="font-size: 13px; font-weight: bold; color: #1e40af; margin: 0 0 12px 0;">BILL FROM</p>
                            <p style="font-size: 13px; color: #374151; margin: 4px 0;"><strong>Name:</strong> ${fromData.name || '--'}</p>
                            <p style="font-size: 13px; color: #374151; margin: 4px 0;"><strong>Email:</strong> ${fromData.email || '--'}</p>
                            <p style="font-size: 13px; color: #374151; margin: 4px 0;"><strong>Address:</strong> ${fromData.billingadress || '--'}</p>
                        </div>

                        <div style="flex: 1; background-color: #d1fae5; padding: 20px; border-radius: 8px;">
                            <p style="font-size: 13px; font-weight: bold; color: #065f46; margin: 0 0 12px 0;">BILL TO</p>
                            <p style="font-size: 13px; color: #374151; margin: 4px 0;"><strong>Name:</strong> ${toData.name || '--'}</p>
                            <p style="font-size: 13px; color: #374151; margin: 4px 0;"><strong>Email:</strong> ${toData.email || '--'}</p>
                            <p style="font-size: 13px; color: #374151; margin: 4px 0;"><strong>Address:</strong> ${toData.billingadress || '--'}</p>
                        </div>
                    </div>

                    <div style="margin-bottom: 32px;">
                        <div style="display: flex; justify-content: space-between; background-color: #1f2937; color: #ffffff; padding: 12px; border-radius: 8px 8px 0 0; font-weight: 600; font-size: 13px;">
                            <div style="width: 60px; text-align: center;">Sr No</div>
                            <div style="flex: 1; text-align: left; padding-left: 10px;">Item Name</div>
                            <div style="flex: 1; text-align: left; padding-left: 10px;">Description</div>
                            <div style="width: 80px; text-align: center;">Quantity</div>
                            <div style="width: 80px; text-align: right;">Price</div>
                        </div>
                        ${items.map((val, index) => `
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #e5e7eb; padding: 12px; font-size: 13px;">
                                <div style="width: 60px; text-align: center; color: #6b7280;">${index + 1}</div>
                                <div style="flex: 1; text-align: left; color: #1f2937; padding-left: 10px;">${val.name || '----'}</div>
                                <div style="flex: 1; text-align: left; color: #6b7280; padding-left: 10px;">${val.description || '----'}</div>
                                <div style="width: 80px; text-align: center; color: #1f2937;">${val.quantity || '----'}</div>
                                <div style="width: 80px; text-align: right; color: #1f2937; font-weight: 500;">${val.price || '----'}</div>
                            </div>
                        `).join('')}
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: flex-end; background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 32px;">
                        <p style="font-size: 13px; color: #374151; margin: 4px 0;">Subtotal: <strong style="color: #111827;">${Current_Currency_Symbol}${calculation.subtotal}</strong></p>
                        <p style="font-size: 13px; color: #374151; margin: 4px 0;">Discount: <strong style="color: #111827;">${calculation.discount}%</strong></p>
                        <p style="font-size: 13px; color: #374151; margin: 4px 0;">Tax: <strong style="color: #111827;">${calculation.tax}%</strong></p>
                        <div style="border-top: 2px solid #d1d5db; padding-top: 8px; margin-top: 8px; width: 250px;">
                            <p style="font-size: 17px; font-weight: bold; color: #111827; text-align: right; margin: 0;">Total: <span style="color: #2563eb;">${Current_Currency_Symbol}${calculation.total}</span></p>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(tempContainer);
            
            // Wait for render
            await new Promise(resolve => setTimeout(resolve, 200));
            
            // Convert to canvas
            const canvas = await html2canvas(tempContainer, {
                scale: 2,
                backgroundColor: '#ffffff',
                logging: false,
                useCORS: true
            });
            
            // Remove temp container
            document.body.removeChild(tempContainer);
            
            console.log('Canvas created successfully');
            
            // Create PDF
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png', 1.0);
            
            let heightLeft = imgHeight;
            let position = 0;
            
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            const fileName = `Invoice_${dateData.invoiceNo || 'draft'}_${Date.now()}.pdf`;
            pdf.save(fileName);
            
            console.log('PDF downloaded successfully');
            
        } catch (error) {
            console.error('Detailed error:', error);
            alert(`Failed to generate PDF: ${error.message}`);
        }
    };
    
    return(
        <div ref={invoiceRef} className="flex flex-col bg-white px-12 py-10 rounded-xl shadow-2xl max-w-4xl mx-auto">
            {/* Header with Invoice Title */}
            <div className="border-b-2 border-gray-300 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-800">INVOICE</h1>
            </div>

            {/* Date Sections */}
            <div className="flex justify-between items-center mb-8 bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-semibold">DATE</span>
                    <span className="text-sm font-medium text-gray-800">{dateData.cureentDate}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-semibold">DUE DATE</span>
                    <span className="text-sm font-medium text-gray-800">{(dateData.dueDate)?dateData.dueDate:"No Due Date"}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-semibold">INVOICE NO</span>
                    <span className="text-sm font-medium text-gray-800">{(dateData.invoiceNo)?dateData.invoiceNo:"No Invoice number"}</span>
                </div>
                 <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-semibold">STATUS OF PAYMENT</span>
                    <span className="text-sm font-medium text-gray-800">{(statusOfPayment!=='-')?statusOfPayment:"No Status"}</span>
                </div>
            </div>

            {/* Billing Info */}
            <div className="flex justify-between items-start mb-8 gap-6">
                <div className="flex-1 bg-blue-50 p-5 rounded-lg">
                    <p className="text-sm font-bold text-blue-800 mb-3">BILL FROM</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Name:</span> {(fromData.name)?fromData.name:'--'}</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Email:</span> {(fromData.email)?fromData.email:'--'}</p>
                    <p className="text-sm text-gray-700"><span className="font-semibold">Address:</span> {(fromData.billingadress)?fromData.billingadress:'--'}</p>
                </div>

                <div className="flex-1 bg-green-50 p-5 rounded-lg">
                    <p className="text-sm font-bold text-green-800 mb-3">BILL TO</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Name:</span> {(toData.name)?toData.name:'--'}</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Email:</span> {(toData.email)?toData.email:'--'}</p>
                    <p className="text-sm text-gray-700"><span className="font-semibold">Address:</span> {(toData.billingadress)?toData.billingadress:'--'}</p>
                </div>
            </div>

            {/* Items Table */}
            <div className="mb-8">
                <div className="flex justify-between items-center bg-gray-800 text-white p-3 rounded-t-lg font-semibold text-sm">
                    <p className="w-16 text-center">Sr No</p>
                    <p className="flex-1 text-left">Item Name</p>
                    <p className="flex-1 text-left">Description</p>
                    <p className="w-24 text-center">Quantity</p>
                    <p className="w-24 text-right">Price</p>
                </div>
                {
                    items.map((val,index)=>(
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 p-3 hover:bg-gray-50 transition text-sm">
                            <p className="w-16 text-center text-gray-600">{index+1}</p>
                            <p className="flex-1 text-left text-gray-800">{(val.name)?val.name:'----'}</p>
                            <p className="flex-1 text-left text-gray-600">{(val.description)?val.description:'----'}</p>
                            <p className="w-24 text-center text-gray-800">{(val.quantity)?val.quantity:'----'}</p>
                            <p className="w-24 text-right font-medium text-gray-800">{(val.price)?val.price:'----'}</p>
                        </div>
                    ))
                }
            </div>

            {/* Calculation Summary */}
            <div className="flex flex-col items-end mb-8 gap-2 bg-gray-50 p-5 rounded-lg">
                <p className="text-sm text-gray-700">Subtotal: <span className="font-semibold text-gray-900">{Current_Currency_Symbol}{calculation.subtotal}</span></p>
                <p className="text-sm text-gray-700">Discount: <span className="font-semibold text-gray-900">{calculation.discount}%</span></p>
                <p className="text-sm text-gray-700">Tax: <span className="font-semibold text-gray-900">{calculation.tax}%</span></p>

                <div className="border-t-2 border-gray-300 pt-2 mt-2 w-64">
                    <p className="text-lg font-bold text-gray-900 text-right">Total: <span className="text-blue-600">{Current_Currency_Symbol}{calculation.total}</span></p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-4">
                <button 
                    onClick={()=>{
                        setInvoicePopup(false);
                    }} 
                    className="px-6 py-3 cursor-pointer bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                    Cancel
                </button>

                <button 
                    onClick={downloadInvoice}
                    className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    Download Invoice
                </button>
            </div>
        </div>
    )
};
export default Invoice;