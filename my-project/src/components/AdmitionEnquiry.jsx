import React from 'react';

const AdmissionEnquiry = () => {
  return (
    <div className="fixed bottom-10 left-2 sm:bottom-12 sm:left-4 md:bottom-14 md:left-6 lg:bottom-16 lg:left-8">
      <a
        href="#admission-form"
        className="flex items-center justify-center w-20 h-10 text-white text-[12px] border-2 border-solid rounded-tl-[7px] rounded-tr-[10px] rounded-br-[14px] rounded-bl-[10px] px-2 py-2 shadow-lg transition-transform transform hover:scale-105 
          sm:w-24 sm:h-12 sm:text-[14px] md:w-28 md:h-14 md:text-[16px] lg:w-32 lg:h-16 lg:text-[18px]"
        style={{
          backgroundImage: 'linear-gradient(180deg, #123583 0%, #f2295b 100%)',
        }}
      >
        Admission Enquiry
      </a>
    </div>
  );
};

export default AdmissionEnquiry;
