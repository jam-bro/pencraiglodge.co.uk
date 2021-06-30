import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Index() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="min-h-screen flex flex-col justify-center items-center">
          <img src="/img/pencraig.jpg" className="mt-8 w-full sm:w-1/3"></img>
          <h1 className="mt-12 text-gray-700 text-5xl font-serif font-light">
            Pencraig Lodge
          </h1>
          <p className="mt-4">Holiday cottage set in beautiful Pembrokeshire</p>
          <Link href="/about/">
            <a className="mt-8 sm:mt-12 bg-green-100 py-2 px-12 font-sans tracking-wider block text-xl text-green-900 rounded-lg hover:-translate-y-1  transform duration-500">
              Explore
            </a>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
