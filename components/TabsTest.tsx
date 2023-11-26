import React, { useState } from 'react';

const App: React.FC = () => {
  const tabs: string[] = ['Images', 'Audio', 'Text'];
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <section id='datasets' className="md:pt-5 pb-10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mx-auto md:text-center">
            <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-[#333] sm:text-5xl flex items-center justify-center">
                Synthetic Datasets
            </h1>
        </div>
        <div className="mt-10 tabs flex space-x-4 justify-center items-center"> {/* Added 'space-x-4' for spacing between tabs */}
            {tabs.map((tab, index) => (
            <a
                key={index}
                className={`tab tab-bordered tab-lg ${activeTabIndex === index ? 'tab-active' : ''} w-64 py-2 text-center flex justify-center items-center text-lg`} 
                onClick={() => setActiveTabIndex(index)}
            >
                {tab}
            </a>
            ))}
        </div>

        <div className="content">
            {activeTabIndex === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                
                    {/* <span className="bg-blue-300 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Audio</span> */}
                    
                    <a>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Steel Defect Images</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Most extensive collection of generated audio recordings across 10 distinct languages.</p>
                    <a href="https://huggingface.co/datasets/Voxlab/Synthetic-Spoken-Digit-Dataset" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium mt-2 text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                        Explore dataset
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                    <a>
                        <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Speech Command Dataset</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Generated Audio recordings consisting of various spoken commands or phrases with 20+ speaker voices.</p>
                    {/* <a href="https://www.kaggle.com/datasets/jbuchner/synthetic-speech-commands-dataset" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
                </div>

                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    
                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                    <a>
                        <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English Dataset</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This Dataset contains english sentences spoken by men and women.</p>
                    {/* <a href="#" 
                        className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a> */}
                </div>

                </div>
            )}

            {activeTabIndex === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">

                        {/* <span className="bg-blue-300 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Audio</span> */}
                        
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Audio Digit Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Most extensive collection of generated audio recordings across 10 distinct languages.</p>
                        <a href="https://huggingface.co/datasets/Voxlab/Synthetic-Spoken-Digit-Dataset" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium mt-2 text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Explore dataset
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                        <a>
                            <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Speech Command Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Generated Audio recordings consisting of various spoken commands or phrases with 20+ speaker voices.</p>
                        {/* <a href="https://www.kaggle.com/datasets/jbuchner/synthetic-speech-commands-dataset" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> */}
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                        <a>
                            <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This Dataset contains english sentences spoken by men and women.</p>
                        {/* <a href="#" 
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> */}
                    </div>

                </div>
            )}

            {activeTabIndex === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            
                {/* <span className="bg-blue-300 text-blue-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">Audio</span> */}
                
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User Sentiment Dataset</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Most extensive collection of generated audio recordings across 10 distinct languages.</p>
                <a href="https://huggingface.co/datasets/Voxlab/Synthetic-Spoken-Digit-Dataset" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium mt-2 text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                    Explore dataset
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                <a>
                    <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Speech Command Dataset</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Generated Audio recordings consisting of various spoken commands or phrases with 20+ speaker voices.</p>
                {/* <a href="https://www.kaggle.com/datasets/jbuchner/synthetic-speech-commands-dataset" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}
            </div>


            </div>
            )}
        </div>
        </div>
    </section>
  );
};

export default App;
