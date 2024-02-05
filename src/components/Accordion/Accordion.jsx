import { useState } from "react";
import './Accordion.scss';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


function Accordion({ item }) {
    const [isOpened, setIsOpened] = useState(false);

    const onToggleClick = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div className="Accordion py-2">
            <button type="button" className="flex justify-between w-full font-medium" onClick={onToggleClick}>
                <span>{item.question}</span>
                <span className=" text-lg ">{isOpened ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpened
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className=" overflow-hidden"> {item.answer}</div>
            </div>
        </div>
    );
}

export default Accordion;
