import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <a
      href="https://banszky.men"
      className="block p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-gray-800/90 group"
      target="_self"
    >
      <ArrowLeft className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
      <span className="sr-only">Back to main site</span>
    </a>
  );
};

export default BackButton;