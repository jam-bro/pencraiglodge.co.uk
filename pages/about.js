import Image from 'next/image';
// Components
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Amenities from '../components/Amenities';
import Gallery from '../components/gallery/Gallery';
import Badges from '../components/Badges';
import Footer from '../components/Footer';
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
        <header>
          <Navigation />
        </header>
        <div className="max-w-screen-lg mx-auto text-gray-700 xl:mt-6">
          <div className="w-full xl:px-6">
            <Gallery />
          </div>

          <main className="px-6 2xl:px-0 mt-4">
            <section>
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
                We are within easy driving distance of the West Wales coastline
                with the sandy beaches of Poppit, Mwnt, Tresaith and Penbryn
                just a short journey away.
              </p>
              <div className="flex mt-8 space-x-4">
                <a
                  className="text-sm flex items-center font-semiboldbg-white border text-pink-600 hover:text-white border-pink-600 shadow px-4 py-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
                  href="https://www.airbnb.co.uk/rooms/49956819?guests=1&source_impression_id=p3_1621946776_juSb%2BkbGNtGd12NO&adults=1"
                >
                  <span className="pr-2">View on Airbnb</span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 276 276"
                    transform="rotate(360)"
                  >
                    <path
                      d="M238.04 223.123c-1.93 14.344-11.583 26.756-25.097 32.272-6.62 2.755-13.79 3.585-20.962 2.755-6.894-.826-13.79-3.033-20.96-7.166-9.93-5.522-19.859-14.068-31.442-26.756 18.204-22.34 29.233-42.75 33.372-60.95 1.931-8.551 2.206-16.274 1.38-23.446-1.102-6.894-3.585-13.24-7.448-18.755-8.55-12.41-22.89-19.582-38.887-19.582s-30.338 7.448-38.888 19.582c-3.863 5.516-6.342 11.861-7.447 18.755-1.102 7.172-.827 15.17 1.38 23.447 4.136 18.198 15.443 38.885 33.372 61.221-11.308 12.691-21.513 21.24-31.443 26.757-7.17 4.138-14.066 6.345-20.96 7.169a44.124 44.124 0 01-20.961-2.755c-13.515-5.516-23.166-17.932-25.098-32.273-.826-6.893-.275-13.787 2.483-21.51.826-2.76 2.207-5.513 3.584-8.825 1.932-4.411 4.139-9.103 6.343-13.793l.278-.548c19.028-41.097 39.439-83.018 60.676-123.835l.827-1.658c2.207-4.133 4.411-8.544 6.62-12.683 2.205-4.414 4.687-8.552 7.72-12.14 5.792-6.62 13.515-10.205 22.065-10.205s16.272 3.585 22.064 10.206c3.034 3.587 5.516 7.725 7.723 12.14 2.207 4.138 4.411 8.549 6.618 12.682l.83 1.658c20.959 41.092 41.37 83.013 60.4 124.11v.273c2.207 4.414 4.136 9.382 6.343 13.793 1.38 3.312 2.758 6.064 3.584 8.825 2.207 7.17 3.034 14.068 1.932 21.235zm-110.044-12.964c-14.892-18.752-24.547-36.405-27.856-51.294-1.377-6.345-1.656-11.861-.826-16.826.55-4.414 2.207-8.277 4.41-11.589 5.241-7.44 14.066-12.137 24.272-12.137 10.205 0 19.306 4.417 24.27 12.137 2.205 3.312 3.861 7.175 4.412 11.589.827 4.965.551 10.756-.827 16.826-3.309 14.616-12.963 32.267-27.855 51.294zm124.386-14.34c-1.378-3.31-2.758-6.894-4.136-9.928-2.207-4.962-4.414-9.654-6.345-14.068l-.276-.273c-19.028-41.373-39.439-83.294-60.952-124.658l-.826-1.66c-2.207-4.137-4.414-8.551-6.618-12.963-2.76-4.967-5.519-10.202-9.93-15.17C154.47 6.067 141.786 0 128.27 0c-13.79 0-26.2 6.067-35.303 16.55-4.135 4.963-7.169 10.203-9.927 15.171-2.207 4.411-4.414 8.825-6.62 12.964l-.827 1.65c-21.235 41.37-41.921 83.294-60.952 124.664l-.275.551c-1.932 4.411-4.139 9.098-6.346 14.066a182.774 182.774 0 00-4.135 9.93C.298 205.748-.804 215.403.574 225.33 3.61 246.016 17.4 263.394 36.43 271.114c7.169 3.036 14.616 4.414 22.34 4.414 2.206 0 4.964-.276 7.171-.554 9.1-1.105 18.477-4.133 27.577-9.376 11.31-6.343 22.067-15.443 34.201-28.682 12.134 13.239 23.167 22.34 34.199 28.682 9.103 5.243 18.479 8.271 27.58 9.376 2.207.278 4.965.554 7.171.554 7.723 0 15.444-1.378 22.34-4.414 19.306-7.72 32.82-25.373 35.854-45.784 2.207-9.655 1.102-19.303-2.482-29.512z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#contact-us"
                  className="flex items-center bg-green-100 text-green-900 hover:bg-green-50 transition duration-300 font-semibold text-sm px-5 py-3 rounded-lg border border-green-900 shadow"
                >
                  <span>Book direct</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mt-12">
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
                    <li>Three bedrooms (2 single, 1 double)</li>
                    <li>Bathroom with shower</li>
                    <li>Large garden</li>
                    <li>Roofed picnic area</li>
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
            </section>

            <Amenities />

            {/* Section host */}
            <section className="mt-12" id="contact-us">
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
                <p className="mt-2">
                  For availability please contact me or{' '}
                  <a
                    href="https://www.airbnb.co.uk/rooms/49956819?guests=1&source_impression_id=p3_1621946776_juSb%2BkbGNtGd12NO&adults=1"
                    className="inline-link"
                  >
                    view the booking calendar
                  </a>{' '}
                  on Airbnb.
                </p>
                <div className="mt-6">
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
            </section>
          </main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
