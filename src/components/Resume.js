import React from 'react';
import { Button } from '@mui/material';
import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
  const PDF_FILE_URL = '/Neelakandan_Karthick.pdf'; // Update the path based on your project structure

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Neelakandan_karthick.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <section id='Resume' className='flex flex-col px-5 md:flex-row bg-secondary'>
      <div className='flex justify-center py-5 md:justify-end md:w-1/2'>
        <img className='w-[300px]' src={ResumeImg} alt='Resume' />
      </div>
      <div className='flex justify-center md:w-1/2 '>
        <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
          <p className='pb-6'>
            You can View My Resume{' '}
            <Button variant="contained" onClick={() => handleDownload(PDF_FILE_URL)}>
              Download
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
