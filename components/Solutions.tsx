import Image from "next/image"

export default function solutions(){
    return (
        <section id='solutions' className="md:pt-4 mb-10">

            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Solutions we provide</h2>
                    {/* <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            {/* https://www.svgrepo.com/svg/528614/smart-speaker-2 */}
                            {/* <svg width="148px" height="148px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M18.0474 3.43536C18.0689 3.51861 18.0812 3.60345 18.0847 3.68959C18.1419 5.10574 15.8122 6.87468 12.6477 7.75482C9.29079 8.6885 6.26563 8.26841 5.89085 6.81651C5.85868 6.69189 5.84708 6.56372 5.85488 6.43293C5.85643 6.40709 5.85872 6.38114 5.86177 6.3551C6.023 4.9776 8.27865 3.33475 11.2905 2.49705C14.6474 1.56337 17.6726 1.98346 18.0474 3.43536Z" fill="#1C274C"></path> <path d="M12.648 7.75469C9.29106 8.68837 6.2659 8.26827 5.89111 6.81638C5.85894 6.69176 5.84735 6.56358 5.85515 6.4328L5.24609 13.3087C5.80507 13.8701 7.49022 14.9997 11.9996 14.9997C16.6277 14.9997 18.2809 13.8098 18.7949 13.2656L18.0849 3.68945C18.1421 5.10561 15.8124 6.87454 12.648 7.75469Z" fill="#1C274C"></path> <path opacity="0.5" d="M7.02989 21.4129C8.00563 21.9999 9.34227 21.9999 12.0156 21.9999C14.6588 21.9999 15.9804 21.9999 16.9506 21.4216C17.6678 20.9942 18.2472 20.3563 18.6162 19.5881C19.1153 18.5488 19.0377 17.1793 18.8825 14.4403L18.7949 13.2656C18.2809 13.8098 16.6277 14.9997 11.9996 14.9997C7.49022 14.9997 5.80507 13.8701 5.24609 13.3087L5.15426 14.3509C4.9638 17.1187 4.86856 18.5027 5.36308 19.5547C5.72853 20.3322 6.3088 20.9791 7.02989 21.4129Z" fill="#1C274C"></path> </g></svg> */}
                            
                            <Image
                                alt="header text"
                                src="/smart-speaker-2.svg"
                                className="sm:w-12 sm:h-12 w-10 h-10"
                                width={25}
                                height={25}
                            />
                            {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Automatic Speech Recognition</h3>
                        <p className="text-gray-500 dark:text-gray-400">Enhance ASR using high-quality synthetic datasets to train and test models to boost accuracy and accelerate advancements in speech recognition technology.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            {/* https://www.svgrepo.com/svg/420903/audio-hardware-sound */}
                            {/* <svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2"></g> <g id="Layer_3"></g> <g id="Layer_4"></g> <g id="Layer_5"></g> <g id="Layer_6"></g> <g id="Layer_7"></g> <g id="Layer_8"></g> <g id="Layer_9"></g> <g id="Layer_10"></g> <g id="Layer_11"></g> <g id="Layer_12"></g> <g id="Layer_13"></g> <g id="Layer_14"></g> <g id="Layer_15"></g> <g id="Layer_16"> <g> <path d="M27,4v24c0,1.65-1.35,3-3,3H8c-1.65,0-3-1.35-3-3V4c0-1.65,1.35-3,3-3h16C25.65,1,27,2.35,27,4z" fill="#cfcfcf"></path> </g> <g> <path d="M23,12c0,3.86-3.14,7-7,7s-7-3.14-7-7s3.14-7,7-7S23,8.14,23,12z" fill="#96CEE5"></path> </g> <g> <path d="M19,12c0,1.65-1.35,3-3,3s-3-1.35-3-3c0-1.65,1.35-3,3-3S19,10.35,19,12z" fill="#4391B2"></path> </g> <g> <path d="M15,24c0,1.65-1.35,3-3,3s-3-1.35-3-3c0-1.65,1.35-3,3-3S15,22.35,15,24z" fill="#4391B2"></path> </g> <g> <path d="M23,24c0,1.65-1.35,3-3,3s-3-1.35-3-3c0-1.65,1.35-3,3-3S23,22.35,23,24z" fill="#4391B2"></path> </g> </g> <g id="Layer_17"></g> <g id="Layer_18"></g> <g id="Layer_19"></g> <g id="Layer_20"></g> <g id="Layer_21"></g> <g id="Layer_22"></g> <g id="Layer_23"></g> <g id="Layer_24"></g> <g id="Layer_25"></g> <g id="Layer_26"></g> <g id="Layer_27"></g> <g id="Layer_28"></g> <g id="Layer_29"></g> <g id="Layer_30"></g> <g id="Layer_31"></g> </g></svg> */}
                            
                            <Image
                                alt="header text"
                                src="/audio-hardware.svg"
                                className="sm:w-12 sm:h-12 w-10 h-10"
                                width={25}
                                height={25}
                            />

                            {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg> */}
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Native Audio and Language Conversation</h3>
                        <p className="text-gray-500 dark:text-gray-400">We provide native Audio and Language Conversation services in 50+ languages, offering authentic accents to enhance cross-cultural communication and user experiences.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            {/* https://www.svgrepo.com/svg/528197/devices */}
                            {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M14.0516 2C15.7318 1.99999 17.0627 1.99997 18.1043 2.14245C19.1762 2.28908 20.0438 2.59803 20.728 3.29418C21.4122 3.99033 21.7159 4.87308 21.86 5.9637C22 7.02342 22 8.37752 22 10.087V10.0871V13.913V13.913C22 15.6225 22 16.9766 21.86 18.0363C21.7159 19.1269 21.4122 20.0097 20.728 20.7058C20.0438 21.402 19.1762 21.7109 18.1043 21.8575C17.0627 22 15.7318 22 14.0517 22H14.0516H13.9484H13.9483C12.2681 22 10.9373 22 9.89575 21.8575C8.82382 21.7109 7.95621 21.402 7.27199 20.7058C6.58778 20.0097 6.28413 19.1269 6.14001 18.0363C5.99998 16.9766 5.99999 15.6225 6 13.913V13.9129V10.087V10.087C5.99999 8.3775 5.99998 7.02343 6.14001 5.9637C6.28413 4.87308 6.58778 3.99033 7.27199 3.29418C7.95621 2.59803 8.82382 2.28908 9.89575 2.14245C10.9373 1.99997 12.2682 1.99999 13.9484 2H13.9484H14.0516H14.0516Z" fill="#1C274C"></path> <path d="M12 18.25C11.5858 18.25 11.25 18.5858 11.25 19C11.25 19.4142 11.5858 19.75 12 19.75H17C17.4142 19.75 17.75 19.4142 17.75 19C17.75 18.5858 17.4142 18.25 17 18.25H12Z" fill="#1C274C"></path> <path d="M2 14.5C2 13.0955 2 12.3933 2.33706 11.8889C2.48298 11.6705 2.67048 11.483 2.88886 11.3371C3.39331 11 4.09554 11 5.5 11C6.90446 11 7.60669 11 8.11114 11.3371C8.32952 11.483 8.51702 11.6705 8.66294 11.8889C9 12.3933 9 13.0955 9 14.5V18.5C9 19.9045 9 20.6067 8.66294 21.1111C8.51702 21.3295 8.32952 21.517 8.11114 21.6629C7.60669 22 6.90446 22 5.5 22C4.09554 22 3.39331 22 2.88886 21.6629C2.67048 21.517 2.48298 21.3295 2.33706 21.1111C2 20.6067 2 19.9045 2 18.5V14.5Z" fill="#1C274C"></path> </g></svg> */}
                            
                            <Image
                                alt="header text"
                                src="/devices.svg"
                                className="sm:w-12 sm:h-12 w-10 h-10"
                                width={25}
                                height={25}
                            />
                            {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                     */}
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Personalized Virtual Assistant</h3>
                        <p className="text-gray-500 dark:text-gray-400">We utilize synthetic data to empower Personalized Virtual Assistants with enhanced user experiences and improved adaptability.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            {/* https://www.svgrepo.com/svg/11350/earphones */}
                            <Image
                                alt="header text"
                                src="/earphones-svgrepo-com.svg"
                                className="sm:w-12 sm:h-12 w-10 h-10"
                                width={25}
                                height={25}
                            />
                            {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg> */}
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Audio Redaction and Noise Cancellation</h3>
                        <p className="text-gray-500 dark:text-gray-400">Enhancing algorithm robustness and data privacy, they enable precise removal of sensitive information and efficient noise elimination from audio recordings.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        {/* https://www.svgrepo.com/svg/513210/hard-disk */}
                            <Image
                                alt="header text"
                                src="/hard-disk-svgrepo-com.svg"
                                className="sm:w-10 sm:h-10 w-8 h-8"
                                width={25}
                                height={25}
                            />
                            {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg> */}
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Custom Image Data Generation</h3>
                        <p className="text-gray-500 dark:text-gray-400">We provide high-quality computer vision datasets, ensuring a balanced representation of data to achieve exceptional accuracy and performance across all classes.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        {/* https://www.svgrepo.com/svg/382297/image-photo-picture */}
                            <Image
                                alt="header text"
                                src="/image-photo-picture.svg"
                                className="sm:w-12 sm:h-12 w-10 h-10"
                                width={25}
                                height={25}
                            />
                            {/* <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg> */}
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Image Enhancement</h3>
                        <p className="text-gray-500 dark:text-gray-400">We provide Image Enhancement solutions that utilize advanced algorithms to elevate image quality, clarity, and aesthetics.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}