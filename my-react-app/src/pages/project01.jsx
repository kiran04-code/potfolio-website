import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'
import Footer3 from '../components/Footer3'
const Project001 = () => {
    return (
        <div className="text-white min-h-screen  bg-black">
            <Navbar />

            <div className="w-full min-h-screen px-10 py-10 flex flex-col lg:flex-row items-center gap-10">

                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-orange-300">
                        🚀 QuickChat – Real-Time Chat Application
                    </h1>

                    <p className="text-gray-300 leading-relaxed">
                        <strong className="text-white">QuickChat</strong> is a modern real-time chat application built using the <strong>MERN stack</strong> and <strong>Socket.IO</strong> for instant bi-directional communication. It allows users to chat live with others, see online statuses, and enjoy a smooth, responsive UI – all without page reloads.
                    </p>

                    <div>
                        <h2 className="font-semibold text-lg text-orange-300 mb-1">🧠 Why I Built It</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>To deepen my understanding of WebSockets and Socket.IO</li>
                            <li>To build a real-world app demonstrating real-time data flow</li>
                            <li>To tackle challenges like multi-user chat and status tracking</li>
                            <li>To improve frontend/backend synchronization skills</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg text-orange-300 mb-1">🔧 Tech Stack</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li><strong>Frontend:</strong> React, Tailwind CSS, React Router</li>
                            <li><strong>Backend:</strong> Node.js, Express.js</li>
                            <li><strong>Real-Time:</strong> Socket.IO</li>
                            <li><strong>Database:</strong> MongoDB (Mongoose)</li>
                            <li><strong>Deployment:</strong> Vite + Render</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg text-orange-300 mb-1">✨ Key Features</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Real-time messaging using Socket.IO</li>
                            <li> Online/offline user status</li>
                            <li>Clean and responsive UI</li>
                            <li> Scalable code architecture</li>
                            <li> User-friendly chat interface</li>
                        </ul>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-md w-full h-[300px] overflow-y-auto ">
                  <div className='p-5 border-2 border-orange-300 rounded-2xl overflow-hidden mt-5 scroll-box '>
                    <div className='w-full flex gap-1 mt-2 overflow-hidden'>
                     <div className='w-[15px] h-[15px] bg-red-600 rounded-full'></div>
                     <div className='w-[15px] h-[15px] bg-yellow-600 rounded-full'></div>
                     <div className='w-[15px] h-[15px] bg-green-600 rounded-full'></div>
                    </div>
                     <div>
                         <img
                        src="/image.png"
                        alt="QuickChat Preview"
                        className=" shadow-2xl w-full py-5 rounded-2xl"
                    />
                   
                     </div>
                  </div>
                  <div className='p-5 border-2 border-orange-300 rounded-2xl overflow-hidden mt-5 scroll-box '>
                    <div className='w-full flex gap-1 mt-2 overflow-hidden'>
                     <div className='w-[15px] h-[15px] bg-red-600 rounded-full'></div>
                     <div className='w-[15px] h-[15px] bg-yellow-600 rounded-full'></div>
                     <div className='w-[15px] h-[15px] bg-green-600 rounded-full'></div>
                    </div>
                     <div>
                         <img
                        src="/image.png"
                        alt="QuickChat Preview"
                        className=" shadow-2xl w-full py-5 rounded-2xl"
                    />
                   
                     </div>
                  </div>
                
                </div>
            </div>
            <Footer />
            <Footer2 />
            <Footer3 />
        </div>
    )
}

export default Project001
