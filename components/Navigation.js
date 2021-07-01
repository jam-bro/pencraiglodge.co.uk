import Link from 'next/link';
export default function Navigation() {
  return (
    <header className="shadow-sm">
      <div className="mx-auto max-w-screen-lg  flex justify-between items-center pt-8 pb-4 px-6 2l:px-0">
        <div className="text-2xl font-serif font-semibold text-gray-700">
          <span className="font-medium">Pencraig</span> Lodge
        </div>
        <nav className="space-x-4 text-sm lg:text-base text-pink-600 font-semibold">
          <Link href="#contact-us">
            <a className="hover:text-pink-400 hover:border-b-pink-400 hover:border-b  transition ease-in-out duration-300">
              Get in touch
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
