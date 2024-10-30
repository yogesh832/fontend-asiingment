import React from "react";

const notices = [
  {
    title: "Important Notice for Students Regarding ABC ID",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/10/Notice-for-students-ABC-ID_compressed.pdf",
    date: "Updated on 08.10.24",
  },
  {
    title:
      "Revised Proposed Datesheet for End Term Theory Examinations (Dec 2024 Jan 2025)",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/10/Revised-Proposed-Datesheet-BTech-Nov-Dec-2023-1_compressed.pdf",
    date: "Updated on 08.10.24",
  },
  {
    title: "Important Notice for Students Regarding Academic Bank of Credits",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/09/Important-Notice-for-Students-Regarding-Academic-Bank-of-Credits_compressed.pdf",
  },
  {
    title: "MBA offline counselling Schedule on 12th September",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/09/Offline-round-counselling-schedule_compressed.pdf",
  },
  {
    title:
      "New enrollment numbers of upgraded students of B.Tech admitted in 2023-27.",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/Notice-New-Enrollment-Nos.-of-upgraded-B.Tech-students_compressed.pdf",
  },
  {
    marqueeText: "Apply Online MQ Admissions",
    color: "text-green-500",
  },
  {
    title:
      "Reappear Notice alongwith All Branches combined Student List October-2024",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/10/Reappear-Notice-alongwith-All-Branches-combind-Student-List-October-2024_compressed.pdf",
    date: "Updated on 18.10.24",
  },
  {
    title: "Practical Examination (Odd Sem) 1st, 3rd, 5th & 7th sem 2024",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/10/Proposed-Datesheet-BTech-1_compressed.pdf",
    date: "Updated on 01.10.24",
  },
  {
    title: "BBA offline counselling Schedule on 6th September",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/09/Offline-round-counselling-schedule_compressed.pdf",
  },
  {
    title: "Revised final list of BBA MQ 2024-25",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/Revised-final-list-of-BBA-MQ-2024-25_compressed.pdf",
  },
  {
    title:
      "Revise Final List of Admitted students in mq after second counselling B.Tech",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/Revised-List-B.Tech-24_compressed.pdf",
  },
  {
    title:
      "Final List of Admitted students in mq after second counselling B.Tech",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/B.Tech-Final-List.pdf",
  },
  {
    title:
      "Final List of Admitted students in mq after second counselling B.Tech LE",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/Final-List-B.Tech-LE.pdf",
  },
  {
    title: "Final List of Admitted students in mq after second counselling MBA",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/Final-list-MBA.pdf",
  },
  {
    title: "Commencement of Classes for the Academic Year 2024-25",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/07/academic-session.pdf",
  },
  {
    title: "Nodal officer for management quota admissions 2024-25",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/07/Nodal-officer-for-management-quota-admissions-2024-25_compressed.pdf",
  },
  {
    title: "Notice for First year classes",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/Notice11082024.pdf",
  },
  {
    title: "List of Admitted students in mq after first counselling B.Tech",
    url: "https://bpitindia.ac.in/wp-content/uploads/2024/08/B.Tech-List-2024.pdf",
  },
];

const NoticeComponent = () => {
  return (
    <div className="container mx-auto p-1">
      {/* Inline Styles */}
      <style jsx>{`
        @keyframes scroll-date {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Bounce marquee for Apply Online - Restricted within container */
        .apply-marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .apply-marquee-text {
          display: inline-block;
          animation: bounce 3s ease-in-out infinite alternate;
        }

        @keyframes bounce {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>

      <div className="border-4 border-[#98C3D6] font-serif p-4 pt-1 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center my-4">
          <h2 className="text-sm font-bold">
            <a
              href="https://bpitindia.ac.in/previous-notice/?preview_id=5747"
              className="hover:underline text-black"
            >
              Notices/News
            </a>
          </h2>
        </div>

        {/* Notices List */}
        <div className="flex flex-col gap-4">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="w-full border border-[#C9DEE7] rounded-sm p-1 text-center shadow-[#C9DEE7] shadow-sm "
            >
              <h2 className="text-[11px] font-serif text-[#217FCE]">
                <a
                  href={notice.url}
                  target="_blank"
                  className="hover:underline"
                >
                  {notice.title}
                </a>
              </h2>
              {notice.date && (
                <div className=" mt-1 text-xs text-red-500">
                  <marquee behavior="scroll" direction="left">
                    {" "}
                    <span className="date-marquee-text">{notice.date}</span>
                  </marquee>
                </div>
              )}
              {notice.marqueeText && (
                <div className="apply-marquee-container overflow-hidden text-sm font-bold text-green-500 mt-1">
                  <span className="apply-marquee-text">
                    {notice.marqueeText}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeComponent;
