import Link from 'next/link';
import Image from 'next/image';
import { Icons } from "@/components/ui/icons"

// kanji 音楽
// furigana おんがく
// romanji ongaku

const Navbar = () => {
  return (
    <nav className="bg-background-2">
      {/* <Image src="/logo.png" width={40} height={40} alt='logo' className='absolute ml-2 mt-1.5'/> */}
      <h1 className='absolute items-center p-3 text-2xl font-bold text-purple text-shadow'>おんがく</h1>
      <ul className="flex items-center justify-end space-x-4 p-4">
        <li>
          <Link href="/">
            <div className="text-foreground cursor-pointer hover:underline hover:underline-offset-8">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/songs">
            <div className="text-foreground cursor-pointer hover:underline hover:underline-offset-8">Songs</div>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <div className="text-foreground cursor-pointer hover:underline hover:underline-offset-8">About</div>
          </Link>
        </li>
        <li>
            <div className="cursor-pointer fill-foreground"><Icons.sun   /></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
