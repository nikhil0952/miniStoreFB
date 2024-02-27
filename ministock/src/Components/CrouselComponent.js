
import { Carousel } from 'flowbite-react';


function CarouselComponent() {
  return (
    <div className="h-56 sm:h-[40rem] xl:h-[50rem] 2xl:h-[55rem] rounded-none ">

      <Carousel pauseOnHover >

        <div className='relative'>
          <img className='w-[100%]' src="https://source.unsplash.com/random/900×700/?men fashion" alt="..." />
          <div 
          className=" absolute flex justify-center items-center  inset-0 mx-auto my-auto  text-white px-4 py-2 rounded-lg">
            <button className=' crouselsection'>
              Men Section
            </button>
          </div>
        </div>

        <div className='relative'>
          <img className='w-[100%]' src="https://source.unsplash.com/random/900×700/?women fashion" alt="..." />
          <div 
          className=" absolute flex justify-center items-center  inset-0 mx-auto my-auto  text-white px-4 py-2 rounded-lg">
            <button className=' crouselsection'>
              Women Section
            </button>
          </div>
        </div>

        <div className='relative'>
          <img className='w-[100%]' src="https://source.unsplash.com/random/900×700/?kidsfashion" alt="..." />
          <div 
          className=" absolute flex justify-center items-center  inset-0 mx-auto my-auto  text-white px-4 py-2 rounded-lg">
            <button className='crouselsection'>
              Kid Section
            </button>
          </div>
        </div>

        <div className='relative'>
          <img className='w-[100%]' src="https://source.unsplash.com/random/900×700/?fashion" alt="..." />
          <div 
          className=" absolute flex justify-center items-center  inset-0 mx-auto my-auto  text-white px-4 py-2 rounded-lg">
            <button className='crouselsection'>
              All Section
            </button>
          </div>
        </div>

      </Carousel>
    </div>
  );
}


export default CarouselComponent;




