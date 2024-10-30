import React from 'react';

const AdmissionEnquiry = () => {
  return (
    <div className="fixed bottom-24 left-0">
      <a
        href="#admission-form"
        className="w-20 flex text-center text-white text-[12px] bg-transparent border border-solid border-2 rounded-tl-[7px] rounded-tr-[10px] rounded-br-[14px] rounded-bl-[10px] px-2 py-2 shadow-lg transition-transform transform hover:scale-105"
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
