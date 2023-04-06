/* eslint-disable @next/next/no-img-element */
import { BsPersonFill } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';
const header = () => {
  const headerItem = [
    { id: '1', lable: 'صفحه اصلی', link: '/' },
    { id: '1', lable: 'وبلاگ', link: './components/weblag.js' },
    { id: '1', lable: 'اخبار و مقالات', link: '/' },
    { id: '1', lable: 'مورد علاقه ها', link: '/' },
    { id: '1', lable: 'درباره ما', link: '/' },
    { id: '1', lable: 'تماس با ما', link: '/' },
  ];
  return (
    <header className=" fixed w-full">
      <nav className=" py-2.5">
        <div className="flex items-center justify-between max-w-screen-xl px-6 mx-auto">
          {/* ////////////////////////////////////////////////////////////////////////// */}
          <a href="#" className="flex items-center">
            <img src="/logo.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
            <span className=" text-xl font-semibold  text-mainColor">LOGO</span>
          </a>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="flex items-center lg:order-2">
            <div className="mx-3">
              <div className="absolute text-xs text-mainColor">
                <BsCircleFill />
              </div>
              <button className="border border-[#A6B6C5] rounded-full p-3  shadow-sm shadow-gray-200 relative">
                <div className="text-[#484848] xl:text-2xl">
                  {' '}
                  <BsPersonFill />
                </div>
              </button>
            </div>
            <div>
              <div className="border border-black rounded-full  ">
                <button class="bg-[#484848] text-white   px-4 rounded-full pb-1 ">
                  ورود
                </button>
                <button className="px-7">ثبت نام</button>
              </div>
            </div>

            {/* ///////////////////////res */}
            <button
              type="button"
              className=" items-center p-2 ml-1 text-sm  rounded-lg lg:hidden    text-gray-400 hover:bg-gray-700 "
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* //////////////////////////// */}
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 ">
            <ul className="flex gap-x-8 xl:text-sm ">
              {headerItem.map(({ id, lable, link }) => {
                return (
                  <div key={id}>
                    <li className="text-black hover:text-mainColor">
                      <a href={link}>{lable}</a>
                    </li>
                  </div>
                );
              })}

              {/* <li className="text-black hover:text-mainColor">صفحه صلی</li>
              <li className="text-black hover:text-mainColor">وبلاگ</li>
              <li className="text-black hover:text-mainColor">
                اخبار و مقالات
              </li>
              <li className="text-black hover:text-mainColor">مورد علاقه ها</li>
              <li className="text-black hover:text-mainColor">درباره ها</li>
              <li className="text-black hover:text-mainColor">تماس با ها</li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
