import React, { useState,useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { resumeData } from '../utils/constants';
import { useAppSelector } from '../../app/hooks';



type GenerateTextProps = {
    textValue: string;
    jobTitle: string;
    companyName: string;
    numberOfCharacters:number;

}

const GenerateText: React.FC<GenerateTextProps> = (props) => {

    
    
    const { textValue, jobTitle, companyName , numberOfCharacters=400 } = props
    const genAI = new GoogleGenerativeAI('AIzaSyC19WH6mOpBab2lF3zPd8fcooeQHrlrX8s');

    const SECRET:string = useAppSelector(state=> state.userReducer.SECRET);
   

    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const handleCopy = () => {
        if (!textValue || !jobTitle) {
            window.alert('Fill in all details');
        } else {
            try {
                navigator.clipboard.writeText(aiResponse).then(function (x) {
                    alert("Text copied to clipboard: ");
                });
            } catch (error) {
                window.alert('Failed to copy text to clipboard:');
                // Handle error (e.g., show an error message to the user)
            }
        }
    };
    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }
    useEffect(() => {
        
    
      return () => {
       
      }
    }, [])
    const handleGenerate = async () => {
        let prompt = "";
        if (!textValue || !companyName || !jobTitle) {
            window.alert('Fill in all details');
        } else {
            prompt = `
            As the Hiring Manager at ${companyName}, 
            you are actively seeking a highly skilled and motivated individual to join your team in the role of ${jobTitle}. 
            I will now furnish you with the detailed job description for the ${jobTitle} position,
            Job descrpitoin will be present in between the tags <Job Description> and </Job Description>.
            My resume data will be present in between the tags <ResumeSection> and </ResumeSection>. 
            Your goal is to generate a summary section for my resume based on the provided job description. 
            Please make sure to include soft skills in the generated summary section that matches the candidate you're looking to hire based on the given Job description. 
            Ensure that the summary does not exceed ${numberOfCharacters} characters and is presented in a single paragraph. 
            The summary should be crafted in a generic and professional manner without explicitly mentioning the company name.

                <JobDescription>
                Job Title: ${jobTitle}
                ${textValue} 
                </JobDescription>

                <ResumeSection>
                ${resumeData} 
                </ResumeSection>

          `;
            setPrompt(prompt);
            await aiRun();
        }

    };





    return (
        <div>
            <button onClick={() => handleGenerate()}>Generate</button>

            {
                loading && aiResponse === '' ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    : <>
                        <br />
                        <button style={{ margin: '5px' }} onClick={() => handleCopy()}>Copy</button>
                        <div className="input-field">
                            <label htmlFor="textarea">Summary</label>
                            <textarea
                                id="textarea"
                                value={aiResponse}
                                disabled
                                placeholder="Job Description..."
                                rows={10}
                                cols={50}
                                className="input-box"
                            />
                        </div>
                    </>
            }
        </div>
    );
};

export default GenerateText;
