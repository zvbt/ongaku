import Link from 'next/link';
import Image from 'next/image';
import { Icons } from "@/components/ui/icons"

// kanji 音楽
// furigana おんがく
// romanji ongaku

const handleClick = () => {
    const body = document.body;
    
    if (body.classList.contains("ctp-mocha")) {
        body.classList.remove("ctp-mocha");
        body.classList.add("ctp-latte");
    } else if (body.classList.contains("ctp-latte")) {
        body.classList.remove("ctp-latte");
        body.classList.add("ctp-mocha");
    } else {
        // Default behavior if neither class is present
        body.classList.add("ctp-mocha");
    }
};

const Navbar = () => {
  return (
    <nav className="bg-ctp-crust">
      {/* <Image src="/logo.png" width={40} height={40} alt='logo' className='absolute ml-2 mt-1.5'/> */}
      <h1 className='absolute items-center p-3 text-2xl font-bold bg-gradient-to-r from-ctp-pink to-ctp-mauve bg-clip-text text-transparent text-shadow'>おんがく</h1>
      <ul className="flex items-center justify-end space-x-4 p-4">
        <li>
          <Link href="/">
            <div className="text-ctp-text cursor-pointer hover:underline hover:underline-offset-8">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/songs">
            <div className="text-ctp-text cursor-pointer hover:underline hover:underline-offset-8">Songs</div>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <div className="text-ctp-text cursor-pointer hover:underline hover:underline-offset-8">About</div>
          </Link>
        </li>
        <li>
            <div className="cursor-pointer"><Icons.moon className='fill-current text-ctp-text' onClick={handleClick}/></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
