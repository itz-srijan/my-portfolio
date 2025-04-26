import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 py-4 flex justify-between items-center'>
      {/* Logo */}
      <div className='text-2xl font-bold text-white tracking-wide'>SM</div>

      {/* Social Icons */}
      <div className='flex gap-5 text-white text-xl'>
        <Link
          href='https://linkedin.com/in/yourprofile'
          target='_blank'
          aria-label='LinkedIn'
        >
          <FaLinkedin className='hover:text-blue-500 transition duration-300' />
        </Link>
        <Link
          href='https://github.com/yourprofile'
          target='_blank'
          aria-label='GitHub'
        >
          <FaGithub className='hover:text-gray-400 transition duration-300' />
        </Link>
        <Link
          href='https://instagram.com/yourprofile'
          target='_blank'
          aria-label='Instagram'
        >
          <FaInstagram className='hover:text-pink-500 transition duration-300' />
        </Link>
      </div>
    </nav>
  );
}
