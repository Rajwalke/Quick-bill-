import { Link } from "react-router-dom";
import { FileText, Zap, CheckCircle } from "lucide-react";

const Frontpage = () => {
    return (
        <div className="max-w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-10xl mx-auto px-6 py-4">
                    <div className="flex items-center gap-2">
                        <FileText className="w-7 h-7 text-blue-600" />
                        <h1 className="text-2xl font-bold text-slate-800">QuickBills</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-20">
                <div className="text-center space-y-8">
                    {/* Heading */}
                    <div className="space-y-4">
                        <h2 className="text-5xl font-bold text-slate-900 leading-tight">
                            Invoicing Made Simple for Everyone
                        </h2>
                        <p className="text-xl text-slate-600">
                            Create professional invoices instantly. No signup or signin required.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <Link to="/quickbill">
                            <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
                                Create Invoice Now
                            </button>
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-8 pt-12">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                            <div className="flex justify-center mb-4">
                                <Zap className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Lightning Fast</h3>
                            <p className="text-slate-600">
                                Generate invoices in seconds without any complicated setup
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                            <div className="flex justify-center mb-4">
                                <CheckCircle className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">No Registration</h3>
                            <p className="text-slate-600">
                                Start immediately. No accounts, passwords, or personal data needed
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                            <div className="flex justify-center mb-4">
                                <FileText className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">Professional Quality</h3>
                            <p className="text-slate-600">
                                Clean, polished invoices that make your business look professional
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            {/* <footer className="absolute bottom-0 w-full bg-white border-t border-slate-200 py-6">
                <div className="max-w-6xl mx-auto px-6 text-center text-slate-600 text-sm">
                    © 2025 QuickBills. All rights reserved.
                </div>
            </footer> */}
        </div>
    );
};

export default Frontpage;