import React, { useState, ChangeEvent } from 'react';
import GenerateText from '../AIGenerator/GenerateText';

const TextAreaComponent1: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [textValue, setTextValue] = useState<string>('');
  const [numberOfCharacters, setNumberOfCharacters] = useState<number>(400)

  const handleCompanyNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };

  const handleJobTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJobTitle(event.target.value);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };
  const handleNumberOfCharacters= (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if(value>=250)
    setNumberOfCharacters(value);
  };

  return (
    <div className="textarea-container">
      <div className="input-field">
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={handleCompanyNameChange}
          placeholder="Enter Company Name"
          className="input-box"
        />
      </div>
      <div className="input-field">
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={handleJobTitleChange}
          placeholder="Enter Job Title"
          className="input-box"
        />
      </div>
      <div className="input-field">
        <label htmlFor="textarea">Enter Job Description:</label>
        <textarea
          id="textarea"
          value={textValue}
          onChange={handleTextChange}
          placeholder="Job Description..."
          rows={4}
          cols={50}
          className="input-box"
        />
      </div>
      <div className="input-field">
        <label htmlFor="numberOfCharacters">Number Of Characters [Optional]:</label>
        <input
          type="number"
          id="numberOfChar"
          value={numberOfCharacters}
          onChange={handleNumberOfCharacters}
          placeholder="Enter Number of Characters"
          className="input-box"
        />
      </div>
      <div className="generate-text-container">
        <GenerateText
          textValue={textValue}
          jobTitle={jobTitle}
          companyName={companyName}
          numberOfCharacters={numberOfCharacters}
        />
      </div>
    </div>
  );
};

export default TextAreaComponent1;
