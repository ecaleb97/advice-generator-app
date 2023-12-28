import { useAdvice } from "../hooks/useAdvice";
import "../components/Advice.css";

export function Advice() {
  const { advice, id, refreshAdvice } = useAdvice();

  const handleClick = async () => {
    refreshAdvice();
  }

  return (
    <div className="flex flex-col items-center justify-center
    bg-[#323a49] rounded-lg relative
    px-5 py-6 w-full
    max-w-[375px]">
      <small className="uppercase tracking-widest text-[#52ffa8] mb-[1.5rem]">Advice #{id}</small>
      <p className="text-3xl text-center text-[#cee3e9]">{advice}</p>
      <div className="my-[1.5rem]">
        <svg className="my-[1.5rem]" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
      </div>
      <button 
        className="bg-[#52ffa8] p-4 rounded-full absolute 
        -bottom-[1.5rem] left-1/2 transform -translate-x-1/2 
        transition-all hover:scale-110 button-shadow" 
        onClick={handleClick}
      >
        <div>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </div>
      </button>
    </div>
  );
}