import Image from "next/image";
import Link from "next/link";
import Modal from './Settings/Modal';

interface ChatBoxSettings {
  report_source: string;
  report_type: string;
  tone: string;
}

interface ChatBoxProps {
  chatBoxSettings: ChatBoxSettings;
  setChatBoxSettings: React.Dispatch<React.SetStateAction<ChatBoxSettings>>;
}

const Footer = ({ setChatBoxSettings, chatBoxSettings}: ChatBoxProps) => {
  
  return (
    <>
    <div className="bg-[#151A2D]">
      <div className="container flex min-h-[72px] mt-2 items-center justify-between px-4 pb-3 pt-5 lg:min-h-[72px] lg:px-0 lg:py-5">
        <Modal setChatBoxSettings={setChatBoxSettings} chatBoxSettings={chatBoxSettings} />
        <div className="text-sm text-gray-100">
            © {new Date().getFullYear()} PaperPilot. All rights reserved.
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;