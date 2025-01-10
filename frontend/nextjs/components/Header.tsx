import Image from "next/image";

interface HeaderProps {
  loading?: boolean;
  isStopped?: boolean;
  showResult?: boolean;
  onStop?: () => void;
  onNewResearch?: () => void;
}

const Header = ({ loading, isStopped, showResult, onStop, onNewResearch }: HeaderProps) => {

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-white py-5">
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
      <div className="flex lg:flex-1 container items-center flex flex-col">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">PaperPilot</span>
          <Image className="h-8 w-auto" width={300} height={60} src="/img/PaperPilot-Logo-Black.png" alt="" />
        </a>
      </div>
      <div className="flex flex-col items-center">
          <div className={`flex gap-2 transition-all duration-300 mt-2`}>
            {loading && !isStopped && (
              <button
                onClick={onStop}
                className="flex items-center justify-center px-6 h-8 text-sm text-white bg-red-500 rounded-full hover:bg-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg whitespace-nowrap"
              >
                Stop
              </button>
            )}
            {(isStopped || !loading) && showResult && (
              <button
                onClick={onNewResearch}
                className="flex items-center justify-center px-6 h-8 text-sm text-white bg-[rgb(168,85,247)] rounded-full hover:bg-[rgb(147,51,234)] transform hover:scale-105 transition-all duration-200 shadow-lg whitespace-nowrap"
              >
                New Research
              </button>
            )}
          </div>
        </div>
    </div>
  );
};

export default Header;
