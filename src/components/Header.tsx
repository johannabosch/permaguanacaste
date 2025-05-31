import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/perma-logo.png"
            alt="Permaguanacaste Logo"
            width={180}
            height={60}
            className="h-22 w-auto"
          />
        </Link>
        
        {/* Navigation buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/about" className="text-white hover:text-green-200 px-4 pb-2 pt--1 transition-colors font-maname tracking-widest">
            ABOUT
          </Link>
          <Link href="/learn" className="text-white hover:text-green-200 px-4 pb-2 pt--1 transition-colors font-maname tracking-widest">
            LEARN
          </Link>
          <Link href="/projects" className="text-white hover:text-green-200 px-4 pb-2 pt--1 transition-colors font-maname tracking-widest">
            PROJECTS
          </Link>
          <Link 
            href="/contact" 
            className="bg-transparent border border-white text-white hover:bg-white hover:text-green-800 px-3 pb-2 pt--1 h-10 rounded-full transition-colors font-maname tracking-widest flex items-center justify-center"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-maname">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/learn">Learn</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact" className="btn btn-primary btn-sm mt-2">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 