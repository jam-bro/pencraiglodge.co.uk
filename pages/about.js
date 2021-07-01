import Link from 'next/link';
import Image from 'next/image';
// Components
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Amenities from '../components/Amenities';
import Gallery from '../components/gallery/Gallery';
import Badges from '../components/Badges';
// Libraries
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Meta title="Pencraig Lodge | About our cottage" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-lg mx-auto text-gray-700 mb-16">
          <Navigation />
          <div className="md:block w-full xl:mt-12 xl:px-6">
            <Gallery />
          </div>
          <div className="px-6 2xl:px-0 mt-4">
            <div className="">
              <div className="flex space-x-4 font-semibold text-gray-600">
                <span className="text-xs rounded-lg py-1 px-2 text-center bg-blue-100 text-blue-900">
                  4 guests
                </span>
                <span className="text-xs rounded-lg py-1 px-2 text-center bg-blue-100 text-blue-900">
                  3 bedrooms
                </span>
                <span className="text-xs rounded-lg py-1 px-2 text-center bg-blue-100 text-blue-900">
                  3 beds
                </span>
                <span className="text-xs rounded-lg py-1 px-2 text-center bg-blue-100 text-blue-900">
                  1 bath
                </span>
              </div>
              <div>
                <h1 className="mt-4 xl:mt-8">
                  <span className="block text-2xl xl:text-3xl font-semibold">
                    Cosy three bedroom cottage with hot tub &amp; log fire
                  </span>
                  <span className="block text-base mt-2 font-semibold text-gray-600">
                    Llechryd, Pembrokeshire
                  </span>
                </h1>
                <p className="text-base leading-normal mt-3">
                  Pencraig Lodge is a detached cottage situated in the idyllic
                  location of Llechryd in the Teifi valley.
                </p>
                <p className="mt-2">
                  We are within easy driving distance of the West Wales
                  coastline with the sandy beaches of Poppit, Mwnt, Tresaith and
                  Penbryn just a short journey away.
                </p>
              </div>
            </div>
            {/* Section 2 */}
            <div className="xl:mt-12 mt-12">
              <div className="border-b border-pink-200 pb-1">
                <h2 className="font-semibold text-lg">About our cottage</h2>
              </div>
              <div className="mt-4 leading-7 xl:grid grid-cols-2 gap-x-24">
                <div>
                  <h3 className="text-base font-semibold text-gray-600">
                    Where you'll stay
                  </h3>
                  <p className="mt-2">
                    The cottage is set on the edge of our twenty-four acre home,
                    surrounded by fields and woodland. Within walking distance
                    we have a pub, chip shop and small convenience store.
                  </p>
                  <p className="mt-2">
                    We have a lovely hot tub area, and plenty of grassy garden
                    around the cottage to enable you to sit and enjoy a glass of
                    something nice or to eat outside and for for the children,
                    dog or both to play!
                  </p>
                  <p className="mt-2">
                    The market town of{' '}
                    <a
                      className="inline-link"
                      href="https://www.cardigan-bay.com/cardigan-west-wales/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cardigan
                    </a>{' '}
                    is a ten minute drive away where you can find three
                    supermarkets along with a highstreet lined with shops,
                    cafes, restaurants and pubs.
                  </p>
                </div>
                <div className="mt-4 xl:mt-0">
                  <h3 className="text-base font-semibold text-gray-600">
                    Living arrangements
                  </h3>
                  <ul className="px-6 list-disc mt-2">
                    <li>Living room</li>
                    <li>Kitchen/diner</li>
                    <li>Three bedrooms (1 single, 1 double)</li>
                    <li>Bathroom with shower</li>
                    <li>Large garden</li>
                    <li>Private hot tub</li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-base font-semibold text-gray-600">
                      House rules
                    </span>
                    <Badges />
                  </div>
                </div>
              </div>
            </div>
            <Amenities />
            {/* Section host */}
            <div className="xl:mt-12 mt-12" id="contact-us">
              <div className="pb-1 border-b border-pink-200">
                <h2 className="font-semibold text-lg">About your host</h2>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="bg-pink-300 rounded-full p-1">
                    <div className="relative h-16 w-16">
                      <Image
                        className="rounded-full"
                        src="/img/linzi.jpg"
                        alt="Linzi Giles"
                        layout="fill"
                        objectFit="cover"
                      ></Image>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold pl-4">Hi, I'm Linzi!</h3>
                </div>
                <p className="mt-2">
                  During your stay I'm available nearly 24/7 to answer any
                  questions or to help in any way possible! Please don’t be
                  afraid to message or email me and I’ll get back to you as soon
                  as I can!
                </p>
                <div className="mt-4">
                  <div className="flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <a href="tel:07581487254" className="inline-link">
                      07581 487 254
                    </a>
                  </div>
                  <div className="flex items-center mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                    <a
                      href="mailto:hello@pencraiglodge.co.uk"
                      className="ml-4 inline-link"
                    >
                      hello@pencraiglodge.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
