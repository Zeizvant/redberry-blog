import TestImg from 'assets/test-blog.png';
import More from 'assets/more.svg';

export const Blog = () => {
  return (
    <div className='flex justify-self-start w-408 flex-col gap-2'>
      <img src={TestImg} className='rounded-xl w-408 h-328 object-cover' />
      <p className='text-blog-p pt-4'>ლილე კვარაცხელია</p>
      <p className='text-xs font-normal text-gray-date'>02.11.2023</p>
      <p className='text-xl text-blog-p font-medium pt-2'>
        OMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
      </p>
      <div className='flex gap-4 pt-4 pb-4 overflow-scroll w-408 text-nowrap'>
        <div className='text-[#D6961C] bg-[#ffff64d9] py-1.5 px-2.5 rounded-30 text-xs font-medium'>
          მარკეტი
        </div>
        <div className='text-[#D6961C] bg-[#ffff64d9] py-1.5 px-2.5 rounded-30 text-xs font-medium'>
          აპლიკაცია
        </div>
        <div className='text-[#D6961C] bg-[#ffff64d9] py-1.5 px-2.5 rounded-30 text-xs font-medium'>
          ხელოვნური ინტელექტი
        </div>
      </div>
      <p className='text-blog-paragraph font-normal leading-7 h-14'>
        6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
        სიზუსტისთვის, ეს პროცესი...
      </p>
      <div className='pt-2 flex align-center gap-1 font-medium text-sm cursor-pointer'>
        <p className='text-more-button'>სრულად ნახვა</p>
        <img src={More} />
      </div>
    </div>
  );
};
