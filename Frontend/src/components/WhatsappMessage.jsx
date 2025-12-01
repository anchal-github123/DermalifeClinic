import {  MessageCircleMore } from "lucide-react";

export default function WhatsappMessage() {
  return (
    <a
      href="https://wa.me/919776636330"
      target="_blank"
      className="
        fixed 
        bottom-6 
        right-6 
        bg-primary
        text-white 
        p-4 
        rounded-full 
        shadow-lg 
        hover:bg-secondary
        transition 
        z-50
      "
    >
      <MessageCircleMore size={28} />
    </a>
  );
}
