import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  loading?: boolean;
  isStopped?: boolean;
  showResult?: boolean;
  onStop?: () => void;
  onNewResearch?: () => void;
}

const Header = ({ loading, isStopped, showResult, onStop, onNewResearch }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b to-transparent"></div>
      
      <div className={`container relative px-4 lg:px-0 transition-all duration-300 ${
        isScrolled ? 'h-[50px] pt-2 pb-2' : 'h-[60px] lg:h-[80px] pt-4 pb-4'
      }`}>
        <div className="flex flex-col items-center">
          <a href="/">
            <Image
              src="/img/PaperPilot-Logo-Black.png"
              alt="logo"
              width={300}
              height={60}
              className={`transition-all duration-300 transform ${
                isScrolled ? 'scale-50' : 'lg:h-14'
              }`}
            />
          </a>
          
          <div className={`flex gap-2 transition-all duration-300 ${
            isScrolled ? 'mt-1' : 'mt-2'
          }`}>
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
    </div>
  );
};

export default Header;
