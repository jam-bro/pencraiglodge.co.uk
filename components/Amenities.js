const amenities = ["Kitchen", "Free on-premises parking", "WiFi" , "Television", "Hot tub", "Log fire", "EV charger", "Washing machine & dryer"];

export default function Amenities() {
  return (
    <section className="mt-12">
      <h2 className="font-semibold text-lg border-b border-pink-200 pb-1">Amenities</h2>
      <ul className=' mt-6 grid md:grid-cols-2  gap-x-6 xl:gap-x-12 md:gap-x-16 gap-y-4'>
        {amenities.map((amenity) => {
          return (
            <li key={amenity}>
              <div className='flex justify-between items-center pr-0'>
                <span>{amenity}</span>
                <div className="pl-4 ">
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-green-300 '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>

                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
