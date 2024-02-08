import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2 bg-white'>
    <Image
      src='/assets/brain.gif'
      alt='loader'
      width={100}
      height={100}
      className='object-contain'
    />
    <p className='text-sm font-bold text-dark'>Loading...</p>
  </div>
);

export default Loader;
