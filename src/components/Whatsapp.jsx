import { useState } from "react";
import { MessageCircleMore } from "lucide-react";

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* WhatsApp Button */}
      <div
        className="fixed bottom-10 right-5 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center text-xl cursor-pointer shadow-md hover:scale-105 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircleMore size={24} />
      </div>

      {/* WhatsApp Form */}
      <div
        className={`fixed bottom-[6rem] right-5 w-72 bg-white rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100 visible" : "translate-y-5 opacity-0 invisible"
        }`}
      >
        <h3 className="text-center text-sm font-semibold text-gray-700 mb-2">
          WhatsApp Inquiry
        </h3>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded text-sm text-black"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded text-sm text-black"
            required
          />
          <input
            type="text"
            placeholder="Enter your country"
            className="w-full p-2 border border-gray-300 rounded text-sm text-black"
            required
          />
          <input
            type="text"
            placeholder="Enter your WhatsApp number"
            className="w-full p-2 border border-gray-300 rounded text-sm text-black"
            required
          />
          <textarea
            placeholder="Enter your message"
            className="w-full p-2 border border-gray-300 rounded text-sm text-black h-20 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-[#25D366] text-white rounded font-semibold text-sm hover:bg-[#1ebe57] transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Whatsapp;
