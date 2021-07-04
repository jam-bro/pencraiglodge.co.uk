import { motion } from 'framer-motion';
import Link from 'next/link';
import Meta from '../components/Meta'

export default function Index() {
  return (
    <>
    <Meta title="Pencraig Lodge | Holiday cottage in Pembrokeshire" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img src="/img/pencraig.jpg" className=" -mt-24 w-full sm:w-1/3"></img>
        <h1 className="mt-12 text-gray-700 text-5xl font-serif font-light">
          Pencraig Lodge
        </h1>
        <Link href="/about/">
          <a className="mt-4 sm:mt-8 bg-green-100 py-2 px-8 font-semibold tracking-wider block text-base text-green-900 border border-green-900 rounded-lg hover:bg-green-50  transform duration-300 ease-in-out">
            View the cottage
          </a>
        </Link>
      </div>
    </motion.div>
    </>
  );
}
