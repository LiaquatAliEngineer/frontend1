function ContactPage(){
    return(
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-xl w-full bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl">
                
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-indigo-400 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        We would love to hear from you. Fill out the form or reach us directly.
                    </p>
                </div>

                
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Your Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Your Message</label>
                        <textarea 
                            rows={4}
                            placeholder="Write your message here..." 
                            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500 resize-none"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition duration-200 shadow-lg"
                    >
                        Send Message
                    </button>
                </form>

                
                <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                    <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-slate-400">
                        <li>📞 Phone: <span className="text-slate-200">+92 300 1234567</span></li>
                        <li>📍 Location: <span className="text-slate-200">Lahore, Pakistan</span></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default ContactPage;