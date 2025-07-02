import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BiographyLinks = () => (
  <div className="flex justify-center gap-8 mt-2 text-black">
    <a
      href="https://www.instagram.com/jinkyunghu/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-500 transition"
    >
      <FaInstagram size={22} />
    </a>
    <a
      href="https://www.linkedin.com/in/jinkyung-hu-a5034624b/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-500 transition"
    >
      <FaLinkedin size={22} />
    </a>
    <a
      href="mailto:nubddak1@nate.com"
      className="hover:text-gray-500 transition"
    >
      <MdEmail size={22} />
    </a>
  </div>
);

export default BiographyLinks; 