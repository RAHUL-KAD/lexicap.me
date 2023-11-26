// import React, { useEffect, useState } from "react";

// const AudioFileUpload: React.FC = () => {
//     const [filebase64,setFileBase64] = useState<string>("")

//     function formSubmit(e: any) {
//         e.preventDefault();
//         // Submit your form with the filebase64 as 
//         // one of your fields
//         console.log({filebase64})
//         alert("here you'd submit the form using\n the filebase64 like any other field")
//       }
    
//     function convertFile(files: FileList|null) {
//         if (files) {
//           const fileRef = files[0] || ""
//           const fileType: string= fileRef.type || ""
//           console.log("This file upload is of type:",fileType)
//           const reader = new FileReader()
//           reader.readAsBinaryString(fileRef)
//           reader.onload=(ev: any) => {
//             // convert it to base64
//             setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
//           }
//         }
//       }

//     return (
//         // <div className="App">
//         //     <h1> Upload Audio File </h1>
//         //     <input onChange={(e) => { e.target.files && e.target.files[0] }} type="file" />
//         // </div>



//         <div className="flex items-center justify-center">
//             <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//                 <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                     <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
//                     </svg>
//                     <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">MP4, WAV, and all other audio file types</p>
//                 </div>
//                 <input type="file" onChange={(e)=> convertFile(e.target.files)} />
//             </label>
//         </div> 

//     );
// }

// export default AudioFileUpload;


import React,{ useState, useEffect }  from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PdfGenerator from './PdfGenerator';
import saveAs from 'file-saver';
import { supabase } from '../libs/supabase'
import CallToAction from './CallToAction-Playground';
import AudioPlayer from './AudioPlayer';

function App() {
  const [filebase64,setFileBase64] = useState<string>("")
  const [apiResponse, setApiResponse] = useState<string>("");
  const [blobData, setBlobData] = useState<Blob | null>(null);
  const [llmResponse, setLlmResponse] = useState<string | null>(null);
  const [llmerror, setLlmError] = useState(false);
  const [uploadUi, setuploadUi] = useState(true);
  const [asrLoading, setasrLoading] = useState(true);
  const [llmLoading, setllmLoading] = useState(false);
  const [llmPrompt, setLlmPrompt] = useState<string>("");
  const [nextUiLoading, setnextUiLoading] = useState(false);
  const [generateSummary, setgenerateSummary] = useState<string>("");
  const [generateSatisfaction, setgenerateSatisfaction] = useState<string>("");
  const [generateSentiment, setgenerateSentiment] = useState<string>("");
  const [generateTurnover, setgenerateTurnover] = useState<string>("");
  const [generateTopic, setgenerateTopic] = useState<string>("");
  const [fileTypeVariable, setFileTypeVariable] = useState<string | 'audio/mpeg'>("");
  const [fileExtensionVariable, setFileExtensionVariable] = useState<string | '.mp3'>("");
  const [uiSummaryGeneratorBool, setUiSummaryGeneratorBool] = useState(false);
  const [playFromUrl, setPlayFromUrl] = useState(false);
  const [audioUrlForPlayFromUrl, setAudioUrlForPlayFromUrl] = useState<string>("");

//   const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
//   const supabase_key = process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
  
  
//   const client = createClient(supabase_url, supabase_key);

//   const supabase = client;

  function generateLLMSummary(data: { chat_message: string | any, conversation: string }){
    if (process.env.NEXT_PUBLIC_LLM_URL){

        const formData = new FormData();
        formData.append('chat_message', data.chat_message);
        formData.append('conversation', data.conversation);
    
        const llmApiUrl = process.env.NEXT_PUBLIC_LLM_URL;
        setLlmError(false); // Reset error state
        
        try {
            axios.post(llmApiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            })
            .then((response) => {
                if (response.status === 200) {
                // console.log("LLM Response from summary: ", response.data);
                setgenerateSummary(response.data);
                return response.data;

                } else {
                setLlmError(true); // Set error state to true
                console.error(`Request failed with status code ${response.status}`);
                console.log(response.data);
                }
            })
            .catch((error) => {
                setLlmError(true); // Set error state to true
                console.error(`An error occurred: ${error}`);
            });
        } catch (error) {
            setLlmError(true); // Set error state to true
            console.error(`An error occurred: ${error}`);
        }}

        return '';
  }

  function generateLLMSatisfaction(data: { chat_message: string | any, conversation: string }){
    if (process.env.NEXT_PUBLIC_LLM_URL){

        const formData = new FormData();
        formData.append('chat_message', data.chat_message);
        formData.append('conversation', data.conversation);
    
        const llmApiUrl = process.env.NEXT_PUBLIC_LLM_URL;
        setLlmError(false); // Reset error state
        
        try {
            axios.post(llmApiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            })
            .then((response) => {
                if (response.status === 200) {
                // console.log("LLM Response from Satisfaction: ", response.data);
                setgenerateSatisfaction(response.data);
                return response.data;

                } else {
                setLlmError(true); // Set error state to true
                console.error(`Request failed with status code ${response.status}`);
                console.log(response.data);
                }
            })
            .catch((error) => {
                setLlmError(true); // Set error state to true
                console.error(`An error occurred: ${error}`);
            });
        } catch (error) {
            setLlmError(true); // Set error state to true
            console.error(`An error occurred: ${error}`);
        }}

        return '';
  }

  function generateLLMSentiment(data: { chat_message: string | any, conversation: string }){
    if (process.env.NEXT_PUBLIC_LLM_URL){

        const formData = new FormData();
        formData.append('chat_message', data.chat_message);
        formData.append('conversation', data.conversation);
    
        const llmApiUrl = process.env.NEXT_PUBLIC_LLM_URL;
        setLlmError(false); // Reset error state
        
        try {
            axios.post(llmApiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            })
            .then((response) => {
                if (response.status === 200) {
                // console.log("LLM Response from Sentiment: ", response.data);
                setgenerateSentiment(response.data);
                return response.data;

                } else {
                setLlmError(true); // Set error state to true
                console.error(`Request failed with status code ${response.status}`);
                console.log(response.data);
                }
            })
            .catch((error) => {
                setLlmError(true); // Set error state to true
                console.error(`An error occurred: ${error}`);
            });
        } catch (error) {
            setLlmError(true); // Set error state to true
            console.error(`An error occurred: ${error}`);
        }}

        return '';
  }

  function generateLLMTurnover(data: { chat_message: string | any, conversation: string }){
    if (process.env.NEXT_PUBLIC_LLM_URL){

        const formData = new FormData();
        formData.append('chat_message', data.chat_message);
        formData.append('conversation', data.conversation);
    
        const llmApiUrl = process.env.NEXT_PUBLIC_LLM_URL;
        setLlmError(false); // Reset error state
        
        try {
            axios.post(llmApiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            })
            .then((response) => {
                if (response.status === 200) {
                // console.log("LLM Response from turnover: ", response.data);
                setgenerateTurnover(response.data);
                return response.data;

                } else {
                setLlmError(true); // Set error state to true
                console.error(`Request failed with status code ${response.status}`);
                console.log(response.data);
                }
            })
            .catch((error) => {
                setLlmError(true); // Set error state to true
                console.error(`An error occurred: ${error}`);
            });
        } catch (error) {
            setLlmError(true); // Set error state to true
            console.error(`An error occurred: ${error}`);
        }}

        return '';
  }

  function generateLLMTopic(data: { chat_message: string | any, conversation: string }){
    if (process.env.NEXT_PUBLIC_LLM_URL){

        const formData = new FormData();
        formData.append('chat_message', data.chat_message);
        formData.append('conversation', data.conversation);
    
        const llmApiUrl = process.env.NEXT_PUBLIC_LLM_URL;
        setLlmError(false); // Reset error state
        
        try {
            axios.post(llmApiUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            })
            .then((response) => {
                if (response.status === 200) {
                // console.log("LLM Response from topic: ", response.data);
                setgenerateTopic(response.data);
                return response.data;

                } else {
                setLlmError(true); // Set error state to true
                console.error(`Request failed with status code ${response.status}`);
                console.log(response.data);
                }
            })
            .catch((error) => {
                setLlmError(true); // Set error state to true
                console.error(`An error occurred: ${error}`);
            });
        } catch (error) {
            setLlmError(true); // Set error state to true
            console.error(`An error occurred: ${error}`);
        }}

        return '';
  }

  function llmRequestResponse(data: { chat_message: string | any, conversation: string }) {
      setllmLoading(true);
    //   console.log("data: ",data)
      let llmTranscript: string = '';

      if (process.env.NEXT_PUBLIC_LLM_URL){

      const formData = new FormData();
      formData.append('chat_message', data.chat_message);
      formData.append('conversation', data.conversation);
  
      const llmApiUrl = process.env.NEXT_PUBLIC_LLM_URL;
      setLlmError(false); // Reset error state
      
      try {
          axios.post(llmApiUrl, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
          })
          .then((response) => {
              if (response.status === 200) {
            //   console.log("LLM Response: ", response);
              llmTranscript = response.data;
              setLlmResponse(response.data);
              setllmLoading(false);
              return llmTranscript;

              } else {
              setLlmError(true); // Set error state to true
              console.error(`Request failed with status code ${response.status}`);
              console.log(response.data);
              }
          })
          .catch((error) => {
              setLlmError(true); // Set error state to true
              console.error(`An error occurred: ${error}`);
          });
      } catch (error) {
          setLlmError(true); // Set error state to true
          console.error(`An error occurred: ${error}`);
      }}

      return llmTranscript;

  }

 async function formSubmit(e: any) {
      e.preventDefault();

      if (!blobData) {
      console.error("No audio file selected.");
      
      }
      setuploadUi(false);
    //   console.log("Blob data: " + typeof blobData);

      const formData = new FormData();
      if (blobData) {
        // formData.append('audioBlob', blobData);

        const uniqueFileName = `${Date.now()}.${fileExtensionVariable}`;
        // console.log("unique file name: " + uniqueFileName);

        const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('voxlab-blob')
        .upload(`blob/${uniqueFileName}`, blobData, {
            cacheControl: '3600',
            upsert: false,
        });

        if (uploadError) {
        console.log("Upload error: " + uploadError);
        } else {
        // console.log("Upload success: " + uploadData);
        }

        const { data: signedUrlData, error: signedUrlError } = await supabase
        .storage
        .from('voxlab-blob')
        .createSignedUrl(`blob/${uniqueFileName}`, 180, {
            download: true
        });

        let audio_url: string = '';

        if (signedUrlError) {
            console.error("Signed URL error: " + signedUrlError);
        } else {
             audio_url = signedUrlData.signedUrl || '';
            // console.log("Signed URL data: " + signedUrlData.signedUrl);
        }

        formData.append('audio_url', audio_url)

        if (process.env.NEXT_PUBLIC_ASR_URL){

        const asr_url = process.env.NEXT_PUBLIC_ASR_URL;

        await axios.post(asr_url, formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })
          .then((response) => {
          const transcript = response.data.response.transcript
          setApiResponse(transcript);
          setasrLoading(false);
          const llm_summary = {
            //   chat_message : "Generate the summary, summary should be who was customer and who was agent, then what was customer asking for, how did agent respond to it and was customer satisfied with the agent",
            chat_message: "generate the Conversation summary",
            conversation: transcript
          }

        //   generateLLMSummary(llm_summary)

          const llm_satisfaction = {
            // chat_message: "Was customer satisfied with agent information, only answer in yes or no and then give an explanation. Generate the response in the language the agent and customer are communicating",
            chat_message: "is customer satisfied in this conversation",
            conversation: transcript,
            };
            generateLLMSatisfaction(llm_satisfaction)

            const llm_sentiment = {
                // chat_message: "what is the entire conversation sentiment? what is the agent sentiment? what is the customer sentiment?",
                chat_message: "what is the sentiment of the customer in this conversation, what is the sentiment of agent? and what is overall sentiment? Output should be less than 10 words",
                conversation: apiResponse,
                };
          
            // generateLLMSentiment(llm_sentiment)

            const llm_turnover = {
                chat_message: "What are the changes that this customer will turn into paying customer or this customer will come back, Output should be less than 10 words",
                conversation: apiResponse,
                };
            
            // generateLLMTurnover(llm_turnover)
            
            const llm_topic = {
                chat_message: "what is the conversation topic between speakers? Output should be less than 10 words",
                conversation: apiResponse,
                };

            // generateLLMTopic(llm_topic)

        //   console.log("API Response:", response.data.response.transcript);
          })
          .catch((error) => {
          console.error("API Error:", error);
          });}
        }

  }

  async function processFromUrl(url: string){
    console.log(url)
    setuploadUi(false);
    setPlayFromUrl(true);
    setAudioUrlForPlayFromUrl(url)

    const formData = new FormData();
    formData.append('audio_url', url)

    if (process.env.NEXT_PUBLIC_ASR_URL){

        const asr_url = process.env.NEXT_PUBLIC_ASR_URL;

        await axios.post(asr_url, formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })
          .then((response) => {
          const transcript = response.data.response.transcript
          setApiResponse(transcript);
          setasrLoading(false);

        })
    }
}

// The Magic all happens here.
  function convertFileToBase(files: FileList|null) {
      if (files) {
      const fileRef = files[0] || ""
      const fileType: string= fileRef.type || ""
      setFileTypeVariable(fileType)

      // Extract the file extension
        const parts = fileType.split("/");
        if (parts.length === 2) {
        const fileExtension = parts[1];
        setFileExtensionVariable(fileExtension);
        // console.log("File extension:", fileExtension);
        } else {
        console.log("Unable to determine file extension.");
        }

    //   console.log("This file upload is of type:",fileType)
      const reader = new FileReader()
      reader.readAsBinaryString(fileRef)
      reader.onload=(ev: any) => {
          // convert it to base64
          setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
      }
      }
  }


  function convertFile(files: FileList | null) {
      if (files) {
      convertFileToBase(files);
      const fileRef = files[0];
      const reader = new FileReader();
  
      reader.onload = (ev) => {
          if (ev.target) {
          const arrayBuffer = ev.target.result as ArrayBuffer;
          const blob = new Blob([arrayBuffer], { type: fileRef.type });
          setBlobData(blob);
          } else {
          console.error("Failed to read the file.");
          }
      };
  
      reader.readAsArrayBuffer(fileRef);
      }
  }

  // Function to format the text with line breaks
  const formatTextWithLineBreaks = (text: string) => {
    const formattedResponse = text.replace(/Speaker (\d+:)/g, '\nSpeaker $1');

    const speakerResponses = formattedResponse.split('\n').filter(response => response.trim() !== '');

      return speakerResponses;
  }

  const generatePdf = async (summary: string) => {

    if (process.env.NEXT_PUBLIC_PDF_GENERATE){
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_PDF_GENERATE, {
        summary: summary,
      });  

      console.log("pdf response: " + response.data.file_path)
      const pdf_file_path = String(response.data.file_path)
  
      return pdf_file_path;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
    }
  };


  const handleGeneratePdf = async (summary : string) => {
    try {
      const pdfDataFilePath = await generatePdf(summary);
    
      const { data, error } = await supabase
      .storage
      .from('voxlab-pdf')
      .download(`pdf/${pdfDataFilePath}`);
      
        if (error) {
            // Handle the error
            console.error('Supabase Storage error:', error);
        } else {
            // The file download was successful, and data contains the file content.
            // You can use the data here.
            console.log('File downloaded successfully', {data});
            const blob = new Blob([data], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${+new Date()}.pdf`;
            link.click();
            window.URL.revokeObjectURL(link.href);
        }
    }
    catch (error) {
        // Handle any other errors that may occur outside of the Supabase request.
        console.error('An unexpected error occurred:', error);
    }
} 

async function uiReportGeneration(e: any) {

    setUiSummaryGeneratorBool(true);
}



  return (
    <div className="App mb-44">
      <header className="">
        
      {uploadUi &&
        <div>
          <h1 className='text-lg font-bold text-[#333] mb-5'>Start by Uploading audio file</h1>
          <form onSubmit={formSubmit} className='mt-4'>

              <div className="flex items-center justify-center">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-purple-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">All audio file types. (Audio file should be less than 30 MB )</p>
                      </div>
                      
                      <input type="file" id="dropzone-file" className="hidden" onChange={(e)=> convertFile(e.target.files)} />
                      
                  </label>
              </div>

          { blobData &&

              <div className='flex items-center justify-center flex-col'>

              {(filebase64.indexOf("video/") > -1)  && 
              <video controls className='mt-10 block w-full max-w-md mx-auto'>
                  <source src={filebase64} />
              </video>
              }

              {(filebase64.indexOf("audio/") > -1)  && 
              <audio controls className='mt-10 block w-full max-w-md mx-auto'>
                  <source src={filebase64} />
              </audio>
              }
              
              {/* <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button> */}
              {/* <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button> */}

              <button className="mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-10 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Submit</button>
              
              </div>
          }
          </form>

          <p className="mt-20 text-lg font-medium realtive">You can select following audio files : </p>

          <div className="flex flex-col md:flex-row items-center justify-center mt-16">
              <div className="md:mr-5 mr-0 justify-center flex-col flex">
                <AudioPlayer audioUrl='https://quelutgylzztkdaisfbh.supabase.co/storage/v1/object/sign/voxlab-blob/blob/conv1.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2b3hsYWItYmxvYi9ibG9iL2NvbnYxLm1wMyIsImlhdCI6MTY5ODU4OTQ0NywiZXhwIjoxNzMwMTI1NDQ3fQ.51L8icwJNO8ZKz1neHFHlFYrlhojeqc-D2WVcJbgwWs&t=2023-10-29T14%3A24%3A07.413Z' />
                  <div className='flex items-center justify-center sm:mb-0 mb-6'>
                    <button onClick={() => processFromUrl('https://quelutgylzztkdaisfbh.supabase.co/storage/v1/object/sign/voxlab-blob/blob/conv1.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2b3hsYWItYmxvYi9ibG9iL2NvbnYxLm1wMyIsImlhdCI6MTY5ODU4OTQ0NywiZXhwIjoxNzMwMTI1NDQ3fQ.51L8icwJNO8ZKz1neHFHlFYrlhojeqc-D2WVcJbgwWs&t=2023-10-29T14%3A24%3A07.413Z')} 
                        className="mt-6 rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">Use this</button>
                  </div>
              </div>
              
              <div className="justify-center flex-col flex ">
                  <AudioPlayer audioUrl='https://quelutgylzztkdaisfbh.supabase.co/storage/v1/object/sign/voxlab-blob/blob/conv2.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2b3hsYWItYmxvYi9ibG9iL2NvbnYyLm1wMyIsImlhdCI6MTY5ODU4OTYxMiwiZXhwIjoxNzMwMTI1NjEyfQ.Y3vU87uMdf51xEidCvEH5ryAKZMyowysChXXpdN2aHs&t=2023-10-29T14%3A26%3A52.903Z' />
                  <div className='flex items-center justify-center'>
                    <button onClick={() => processFromUrl('https://quelutgylzztkdaisfbh.supabase.co/storage/v1/object/sign/voxlab-blob/blob/conv2.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2b3hsYWItYmxvYi9ibG9iL2NvbnYyLm1wMyIsImlhdCI6MTY5ODU4OTYxMiwiZXhwIjoxNzMwMTI1NjEyfQ.Y3vU87uMdf51xEidCvEH5ryAKZMyowysChXXpdN2aHs&t=2023-10-29T14%3A26%3A52.903Z')} className="mt-6 rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">Use this</button>
                  </div>
              </div>
          </div>
        </div>
        }

        <div className="">

        { blobData && !uploadUi &&

            <div className='flex items-center justify-center flex-col mb-20'>

            {(filebase64.indexOf("video/") > -1)  && 
            <video controls className='mt-10 block w-full max-w-6xl'>
            <source src={filebase64} />
            </video>
            }

            {(filebase64.indexOf("audio/") > -1)  && 
            <audio controls className='mt-10 block w-full max-w-3xl mx-auto'>
                <source src={filebase64} />
            </audio>
            }

            </div>
        }

        { playFromUrl && 

            <div className='flex items-center justify-center flex-col mb-20'>

                <AudioPlayer audioUrl={audioUrlForPlayFromUrl} />
            </div>

        }

        { !uploadUi &&
            <div className="">
                <div className="grid md:grid-cols-2 gap-10 justify-evenly">
                    
                    <div>
                        {asrLoading && 
                            <Skeleton count={10}/>
                        }

                        {apiResponse &&
                        <div className="max-h-[450px] overflow-y-auto ">
                            <h1 className="text-xl font-bold">ASR Transcript: </h1>
                            <p className='mt-5'></p>
                                {formatTextWithLineBreaks(apiResponse).map((response, index) => 
                                <h1 className='text-left mt-2' key={index}>{response}</h1>
                            )}
                        
                        </div>
                        }
                    </div>

                    <div>

                        {asrLoading && 
                            <Skeleton count={10}/>
                        }

                        {apiResponse &&
                            <div className="realtive">
                            {/* <h1 className="text-xl font-bold mb-5">LLM: </h1> */}

                            <div className="md:mt-0 mt-10 flex ">
                                {/* <button className="w-[100px] border-[#626365]">Summary</button>
                                <button>Sentiment</button> */}
                                <input
                                    type={'search'}
                                    name='reset'
                                    className="rounded-xl border focus:border-blue-500 border-[#626365] bg-[#fff] max-w-[500px]"
                                    
                                    onChange={(e) => setLlmPrompt(e.target.value)}
                                    onKeyDown={(e) => {
                                        
                                        if (e.key !== "Enter") {
                                            return;
                                        }
                                        const llmData = {
                                        chat_message: (e.target as HTMLInputElement).value,
                                        conversation: apiResponse,
                                        };
                                        llmRequestResponse(llmData);
                                    }}
                                    placeholder="Ask me something..."
                                />
                            </div>
                            <div className="flex mt-3 md:flex-row flex-col text-sm font-medium">
                                {/* <h1 className="mr-4 mt-1 text-blue-500 md:mb-0 mb-2">Suggestions: </h1> */}
                                <button 
                                    className="text-gray-900 md:mb-0 mb-2 bg-white rounded-lg border border-blue-200 py-1 px-2 hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:ring-gray-200 mr-4 max-w-fit"
                                    onClick={(e) => {
                                        const llmData = {
                                        chat_message: "generate the Conversation summary",
                                        conversation: apiResponse,
                                        };
                                        llmRequestResponse(llmData);
                                    }}
                                    >
                                        Summary of conversation 
                                </button>

                                <button 
                                    className="text-gray-900 md:mb-0 mb-2 bg-white rounded-lg border border-blue-200 py-1 px-2 hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:ring-gray-200 mr-4 max-w-fit"
                                    onClick={(e) => {
                                        const llmData = {
                                        chat_message: "Was customer satisfied with agent information, only answer in yes or no and then give an explanation. Generate the response in the language the agent and customer are communicating. Output should be less than 10 words",
                                        conversation: apiResponse,
                                        };
                                        llmRequestResponse(llmData);
                                    }}
                                    >
                                        Customer Satisfaction
                                </button>

                            </div>

                            <div className="flex md:mt-3 md:flex-row flex-col text-sm font-medium">
                                {/* <h1 className="mr-4 mt-1 text-blue-500 md:mb-0 mb-2">Suggestions: </h1> */}
                                {/* <button 
                                    className="text-gray-900 md:mb-0 mb-2 bg-white rounded-lg border border-blue-200 py-1 px-2 hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:ring-gray-200 mr-4 max-w-fit"
                                    onClick={(e) => {
                                        const llmData = {
                                        chat_message: "What are the changes that this customer will turn into paying customer or this customer will come back, Output should be less than 10 words",
                                        // chat_message: "what are the customer turnover chances in this conversation",
                                        conversation: apiResponse,
                                        };
                                        llmRequestResponse(llmData);
                                    }}
                                    >
                                        Customer turnover chances
                                </button> */}

                                <button 
                                    className="text-gray-900 md:mb-0 mb-2 bg-white rounded-lg border border-blue-200 py-1 px-2 hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:ring-gray-200 mr-4 max-w-fit"
                                    onClick={(e) => {
                                        const llmData = {
                                        // chat_message: "Give me a proper report on what was the sentiment of customer and agent",
                                        chat_message: "extract the important conversation highlights, as well as important key points from the conversation",
                                        conversation: apiResponse,
                                        };
                                        llmRequestResponse(llmData);
                                    }}
                                    >
                                        Conversation Highlight
                                </button>

                                <button 
                                    className="text-gray-900 md:mb-0 mb-2 bg-white rounded-lg border border-blue-200 py-1 px-2 hover:bg-gray-100 hover:text-blue-500 focus:ring-4 focus:ring-gray-200 mr-4 w-fit"
                                    onClick={(e) => {
                                        const llmData = {
                                        chat_message: "what is the conversation topic between speakers? Output should be less than 10 words",
                                        conversation: apiResponse,
                                        };
                                        llmRequestResponse(llmData);
                                    }}
                                    >
                                        Conversation topic extraction
                                </button>

                            </div>
                        </div>}

                        {llmLoading &&
                            <div className="mt-5">
                                <Skeleton count={5}/>
                            </div>
                        }

                        {!llmLoading && 
                        <>  
                            <p className="mt-5 text-left">{llmResponse}</p>
                        </>
                        }
                    </div>
                </div>
            </div>
        }

        {!uploadUi && apiResponse && 
        
            <CallToAction />
        }

        { uploadUi  && !apiResponse && !uiSummaryGeneratorBool && generateSummary && generateSatisfaction && generateSentiment && generateTurnover && generateTopic &&
            <div>
                <button onClick={uiReportGeneration} className="mt-40 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                    Generate Report
                </button>
            </div>
        }

        {uiSummaryGeneratorBool &&

            <div>
                
                <div className=" bg-white mt-44">
                <h1 className='text-5xl font-bold mb-10 text-center'>Report</h1>
                        <div className="">
                        <div className="mx-auto max-w-full px-6 lg:px-8">
                            <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-3 content-center ">
                            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-900/5 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-xl font-semibold tracking-tight text-gray-900">Summarization</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base leading-7 text-left text-gray-600">{generateSummary}</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-900/5 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-xl font-semibold tracking-tight text-gray-900">Sentiment Analysis</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base text-left leading-7 text-gray-600">{generateSentiment}</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>
                            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-900/5 sm:p-10">
                                <div>
                                {/* <h3 id="tier-team" className="text-base font-semibold leading-7 text-indigo-600">Team</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-xl font-bold tracking-tight text-gray-900">Topic Extraction</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base text-left leading-7 text-gray-600">{generateTopic}</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-team" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-900/5 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-xl font-semibold tracking-tight text-gray-900">Customer Satisfaction</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base leading-7 text-left text-gray-600">{generateSatisfaction}</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-900/5 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-xl font-semibold tracking-tight text-gray-900">Customer Turnover chances</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base leading-7 text-left text-gray-600">{generateTurnover}</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>
                

            </div>

        }

        {/* { !uploadUi  && apiResponse && generateSummary && generateSatisfaction && generateSentiment && generateTurnover && generateTopic &&

            <PdfGenerator summary={generateSummary} sentiment={generateSentiment} satisfaction={generateSatisfaction} turnover={generateTurnover} topics={generateTopic} />
        } */}
        

        {/* {generateSummary && 
            
        <div className='mt-28'>
            <button color="primary" onClick={() => handleGeneratePdf(generateSummary)}
                className='className="mt-40 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"'
            >
                Generate Report
            </button>

        </div>} */}

        </div>
      </header>
    </div>
  );
}

export default App;

function str(file_path: any) {
    throw new Error('Function not implemented.');
}
