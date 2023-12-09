import { FaGlobeEurope } from 'react-icons/fa';

export default function AcmeLogo() {
  return (
    <div
      className='flex flex-row items-center leading-none text-white'
      style={{
        background:
          'linear-gradient(to right, #f0ab00, #f0ab00, #f0ab00, #f0ab00, #f0ab00, #f0ab00, #f0ab00, #f0ab00, #f0ab00, #f0ab00)',
      }}
    >
      <FaGlobeEurope className='h-7 w-7 rotate-[15deg] mr-3' />
      <p className='text-3xl'>AMA</p>
    </div>
  );
}
