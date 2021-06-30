import Carousel from '../components/Carousel';
import Link from 'next/link';
import Image from 'next/image';
import Amenities from '../components/Amenities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Gallery from '../components/gallery/Gallery';
import Badges from '../components/Badges';
import { getImages } from '../lib/getImages';

const AirbnbButton = () => {
  return (
    <>
      <div className="flex items-center space-x-8 mt-8">
        <div className="flex items-center bg-pink-100 text-pink-900 px-4 py-4 xl:px-6 xl:py-3 rounded text-sm xl:text-lg">
          <span className="inline-block md:pr-4 pr-2 font-semibold">
            Book on Airbnb
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 24 24"
            transform="rotate(360)"
            className="text-pink-900 h-5 w-5"
            fill="currentColor"
          >
            <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
          </svg>
        </div>
        <div className="flex items-center bg-green-100 text-green-900 px-4 lg:px-6 lg:py-3 py-4 rounded font-semibold text-sm">
          <span className="inline-block pr-2">Book direct</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default function TheLodge({ images }) {
  return (
    <div className="max-w-screen-lg mx-auto text-gray-700">
      {/* Nav */}
      <div className="mx-auto flex justify-between items-center pt-8 pb-4 px-4 lg:px-8 shadow-md">
        <div className="text-2xl font-serif font-semibold text-gray-700">
          <span className="font-medium">Pencraig</span> Lodge
        </div>
        <div className="space-x-4 text-sm text-gray-500 font-semibold">
          <a
            className="hover:text-gray-900 hover:border-b hover:border-b-gray-900 transition ease-in-out duration-300"
            href="https://www.airbnb.co.uk/rooms/49956819?guests=1&source_impression_id=p3_1621946776_juSb%2BkbGNtGd12NO&adults=1"
            target="_blank"
          >
            Book
          </a>
          <Link href="#">
            <a className="hover:text-gray-900 transition ease-in-out duration-300">
              {' '}
              Contact{' '}
            </a>
          </Link>
        </div>
      </div>

      <div className="md:block w-full xl:mt-12">
        <Gallery />
      </div>
      <div className="px-4 xl:px-0 mt-4">
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
            <h1 className="mt-4">
              <span className="block text-2xl xl:text-3xl font-semibold">
                Cosy three bedroom cottage with hot tub &amp; log fire
              </span>
              <span className="block text-base mt-2 font-semibold text-gray-600">
                Llechryd, Pembrokeshire
              </span>
              {/* 
              
              <div>
                <a
                  className="font-bold text-sm text-blue-600"
                  hreg="https://www.airbnb.co.uk/rooms/49956819/reviews?guests=1&source_impression_id=p3_1621946776_juSb%2BkbGNtGd12NO&adults=1" target="_blank"
                >
                  Read our reviews on Airbnb
                </a>
              </div>
              */}
              {/* 
            
          <span className="block mt-4 text-sm font-semibold text-gray-500">
            4 guests &middot; 3 bedrooms &middot; 3 beds &middot; 1 bath
          </span>
            */}
            </h1>
            <p className="text-base leading-normal mt-3">
              Pencraig Lodge is a detached cottage situated in the idyllic
              location of Llechryd in the Teifi valley.
            </p>
            <p class="mt-2">
              We are within easy driving distance of the West Wales coastline
              with the sandy beaches of Poppit, Mwnt, Tresaith and Penbryn just
              a short journey away.
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className="xl:mt-16 mt-12">
          <div className="border-b border-pink-200 pb-1">
            <h2 className="font-semibold text-lg">About our cottage</h2>
          </div>

          <div class="mt-4 leading-7">
            <p class="mt-2">
              The cottage is set on the edge of our twentyfour acre home,
              surrounded by fields and woodland. Within walking distance we have
              a pub, chip shop and small convenience store.
            </p>
            <p className="mt-2">
              We have a lovely hot tub area, and plenty of grassy garden around
              the cottage to enable you to sit and enjoy a glass of something
              nice or to eat outside and for for the children, dog or both to
              play!
            </p>
            <p class="mt-2">
              The market town of{' '}
              <a
                className="inline-link"
                href="https://www.cardigan-bay.com/cardigan-west-wales/"
                target="_blank"
              >
                Cardigan{' '}
              </a>
              is a ten minute drive where you can find three supermarkets along
              with a highstreet lined with shops, cafes, restaurants and pubs.
            </p>

            <div className="mt-4">
              <h3 className="text-base font-semibold">Living arrangements</h3>
              <ul className="px-6 list-disc mt-2">
                <li>Living room</li>
                <li>Kitchen/diner</li>
                <li>Three bedrooms (1 single, 1 double)</li>
                <li>Bathroom with shower</li>
              </ul>
              <div className="mt-4">
                <span className="text-base font-semibold">House rules</span>
                <Badges />
              </div>
            </div>
            {/*  
            <Link href="/airbnb/">
              <a className="inline-block px-8 py-1 bg-gray-700 text-gray-50 text-lg tracking-wider mt-4 rounded-lg">
                Book now
              </a>
            </Link>

*/}
          </div>
        </div>
        {/* Section host */}
        <div className="xl:mt-12 mt-12">
          <div className="pb-1 border-b border-pink-200">
            <h2 className="font-semibold text-lg">About your host</h2>
          </div>
          <div class="mt-4">
            <div className="flex items-center">
              <div className="bg-pink-300 p-1 rounded-full">
                <img
                  src="/img/linzi.jpg"
                  alt="Linzi Giles"
                  className="w-16 h-16 object-cover rounded-full bg-white p-0.5"
                />
              </div>
              <h3 className="text-lg font-semibold pl-4">Hi I'm Linzi!</h3>
            </div>
            <p className="mt-2">
              During your stay I'm available nearly 24/7 to answer any questions
              or to help in any way possible! Please don’t be afraid to message
              or email me and I’ll get back to you as soon as I can!
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Amenities></Amenities>
          <div className="mt-6">
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
      <div className=" hidden md:grid md:grid-cols-3 md:gap-8 mt-12">
        {images.map((image) => {
          return (
            <div className="shadow-xl flex items-end">
              <Image
                src={image}
                width={1024}
                height={768}
                className="rounded"
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const images = await getImages();
  console.log(images);
  return {
    props: { images }, // will be passed to the page component as props
  };
}
