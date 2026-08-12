'use client';

function AddressPage(){
    return(
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-md w-full bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl text-center">
                
                
                <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">📍</span>
                </div>

            
                <h1 className="text-2xl sm:text-3xl font-extrabold text-indigo-400 tracking-tight mb-2">
                    Our Address
                </h1>
                
            
                <p className="text-sm text-slate-400 mb-6">
                    Visit our office or get directions to our main workspace location.
                </p>

                
                <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl mb-6">
                    <h3 className="text-lg font-bold text-slate-200">
                        Mubarak Town
                    </h3>
                    <p className="text-sm text-indigo-300 mt-1">
                        Lahore, Pakistan
                    </p>
                </div>

                
                <button 
                    onClick={() => alert("Opening map directions...")}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition duration-200 shadow-lg cursor-pointer"
                >
                    Get Directions
                </button>

            </div>
        </div>
    )
}
export default AddressPage;