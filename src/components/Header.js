import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 flex justify-between items-center text-white p-4 w-full text-center">
      <div className="mx-6 text-2xl text-blue-300">Coding<div className="text-white inline">Playz</div></div>
      <ul className="flex gap-3 mx-7">
        <li className="cursor-pointer"><Link href='/'>Home</Link></li>
        <li className="cursor-pointer"><Link href='/Blog'>Blog</Link></li>
        <li className="cursor-pointer"><Link href='/About'>About</Link></li>
        <li className="cursor-pointer"><Link href='/Contact'>Contact</Link></li>
      </ul>
    </header>
  );
}
