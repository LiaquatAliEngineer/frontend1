function AboutPage(){
    return(
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-2xl w-full bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl text-center">
                
                
                <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">👨‍💻</span>
                </div>

                
                <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-400 tracking-tight mb-4">
                    About Me
                </h1>
                
                
                <p className="text-base text-slate-300 leading-relaxed mb-8">
                    Welcome to my portfolio! I am a passionate developer currently learning and building modern web applications using React, Next.js, and Tailwind CSS.
                </p>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                        <h3 className="text-sm font-bold text-indigo-300">Frontend Development</h3>
                        <p className="text-xs text-slate-400 mt-1">HTML, JavaScript, Tailwind CSS</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                        <h3 className="text-sm font-bold text-indigo-300">Frameworks</h3>
                        <p className="text-xs text-slate-400 mt-1">React.js & Next.js (App Router)</p>
                    </div>
                </div>

                
                <a 
                    href="/" 
                    className="inline-block w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition duration-200 shadow-lg text-center"
                >
                    Back to Home
                </a>

            </div>
        </div>
    )
}
export default AboutPage;