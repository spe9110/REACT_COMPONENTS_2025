import { useState, useCallback, useRef } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Accordion = (props) => {
    const { title, content } = props;
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const toggleAccordion = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

  return (
    <div className="flex flex-col gap-2 mb-4">
      <header className="flex justify-between items-center border-1 border-gray-200 rounded-lg shadow-md p-[16px] bg-green-100 hover:bg-green-200 transition-colors duration-300 cursor-pointer" onClick={toggleAccordion}>
        <h1 className="text-2xl font-bold text-gray-950">{title}</h1>
        <span className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
          {isOpen ? <FaMinus fontSize={24} /> : <FaPlus fontSize={24} />}
        </span>
      </header>
        <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-lg shadow-sm`}
        style={{
          maxHeight: isOpen
            ? contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "200px"
            : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-4">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
      {/* {isOpen && <div className="transition-max-height duration-50 ease-in-out bg-white rounded-lg shadow-sm">
        <p className="text-gray-700 p-[16px] bg-white rounded-lg shadow-sm">
          {content}
        </p>
      </div>}  */}
    </div>
  );
};

export default Accordion;