import React from 'react';
import Image from 'next/image';
import chicken from '../public/images/Image-Chicken.jpg';
import Food from '../public/images/Image-Food.jpg';
import stew from '../public/images/Image-Stew.jpg';

const BottomSection = () => {
  return (
    <section className="text-gray-600 body-font py-0 pl-20 sm:pl-0">
      <div className="container px-5 py-4 mx-auto">
        <h2 className="uppercase text-4xl text-white font-extralight text-center">
          All the latest from aeg
        </h2>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl  overflow-hidden ">
              <span className="border-b-2 border-transparent border-regal-red">
                <Image
                  src={Food}
                  alt="user avatar"
                  height="492"
                  width="579"
                  loading="lazy"
                ></Image>
              </span>
              <div className="p-6">
                <h1 className="title-font text-xl font-medium text-white mb-3">
                  Summer Lunch Menu By Mark Best
                </h1>
                <p className="text-lg text-slate-400 font-thin  leading-relaxed mb-3">
                  AEG ambassador Mark Best’s summer eats are guaranteed to help
                  you make the most of the warmer weather and entertaining at
                  home.
                </p>
                <div className="flex items-center flex-wrap ">
                  <button
                    onClick={() => alert('Please')}
                    className="uppercase text-slate-300 text-1xl font-bold transition duration-150 border-b-2 border-transparent border-regal-red"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl overflow-hidden">
              <span className="border-b-2 border-transparent border-regal-red">
                <Image
                  className="md:h-86 w-full object-cover object-center"
                  src={chicken}
                  alt="user avatar"
                  height="492"
                  width="579"
                  loading="lazy"
                ></Image>
              </span>
              <div className="p-6">
                <h1 className="title-font text-xl font-medium text-white mb-3">
                  A Traditional Christmas Eve, Mark Best Style
                </h1>
                <p className="text-lg text-slate-400 font-thin  leading-relaxed mb-3">
                  One of Australia's best chefs and AEG ambassador, Mark Best,
                  shares his favourite Christmas Eve menu which is sure to
                  impress your guests.
                </p>
                <div className="flex items-center flex-wrap ">
                  <button
                    onClick={() => alert('Please')}
                    className="uppercase text-slate-300 text-1xl font-bold transition duration-150 border-b-2 border-transparent border-regal-red"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full rounded-xl  overflow-hidden">
              <span className="border-b-2 border-transparent border-regal-red">
                <Image
                  className="md:h-86 w-full object-cover object-center"
                  src={stew}
                  alt="user avatar"
                  height="492"
                  width="579"
                  loading="lazy"
                ></Image>
              </span>
              <div className="p-6">
                <h1 className="title-font text-xl font-medium text-white mb-3">
                  Taking Taste Further
                </h1>
                <p className=" text-lg text-slate-400 font-thin  leading-relaxed mb-3">
                  This exclusive cookbook gives you all the know‑how you need.
                  We’ve designed it to make sure you get the most out of our
                  products – and the best out of your food.
                </p>
                <div className="flex items-center flex-wrap ">
                  <button
                    onClick={() => alert('Please')}
                    className="uppercase text-slate-300 text-1xl font-bold transition duration-150 border-b-2 border-transparent border-regal-red"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
