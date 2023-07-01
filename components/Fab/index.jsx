import React from "react";
import { FaWhatsapp } from "react-icons/fa";
function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919811029255?text=Hi%20Attattiva%20!"
      className="w-12 h-12 flex items-center justify-center bg-green-400 fixed bottom-10 right-10 z-50 text-white rounded-full"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;
