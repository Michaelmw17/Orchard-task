import React, { useState } from 'react';
import Image from 'next/image';

import FatherSon from '../public/images/Image-FatherSon.jpg';
import Fruit from '../public/images/Image-Fruit.jpg';
import Veggies from '../public/images/Image-Veggie.jpg';

const imgArray = [FatherSon, Fruit, Veggies];

const TopSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState();

  const handleShowDialog = (image) => {
    setIsOpen(!isOpen);
    setCurrent(image);
  };

  return (
    <section>
      <div className="container m-auto grid gap-20 w-100 px-2 text-gray-600 md:px-0 xl:px-0">
        <div className="grid gap-0 md:ml-16 lg:grid-cols-2">
          <div className="relative p-12 pl-2 pr-2 md:pr-0 gap-2 mr-4 md:mr-8 rounded-xl group flex space-x-2 hover:rounded-2xl">
            <div className="grid rounded-xl group flex hover:rounded-2x sm:px-0">
              <Image
                src={imgArray[0]}
                alt="Father Son"
                height="619"
                width="384"
                loading="lazy"
                onClick={() =>
                  handleShowDialog(imgArray[0]) ||
                  console.log('FatherSon Image Clicked')
                }
              ></Image>
            </div>
            <div className="grid gap-5">
              <Image
                src={imgArray[1]}
                alt="Fruit"
                height="290"
                width="384"
                loading="lazy"
                onClick={() =>
                  handleShowDialog(imgArray[1]) ||
                  console.log('Fruit Image Clicked')
                }
              ></Image>
              <Image
                src={imgArray[2]}
                alt="Veggies"
                height="290"
                width="384"
                loading="lazy"
                onClick={() =>
                  handleShowDialog(imgArray[2]) ||
                  console.log('Veggies Image Clicked')
                }
              ></Image>
            </div>
            {isOpen && (
              <dialog
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                open
                onClick={handleShowDialog}
              >
                <Image
                  className="image"
                  src={current}
                  height="690"
                  width="684"
                  onClick={handleShowDialog}
                  alt="Pop up image"
                />
              </dialog>
            )}
          </div>
          <div className="container m-auto md:w-12/12 sm:w-10/12 pl-0 p-10 p-5 pt-0 md:pt-4">
            <div className="space-y-2">
              <div className="space-y-4 py-4">
                <span className="underline underline-offset-8 md:underline-offset-20 decoration-1 decoration-white">
                  <h4 className="tracking-widest text-2xl font-extralight text-slate-300 content-center p-6 py-4 mb-0 md:mb-10 md:p-0">
                    ANSWER YOUR BODY&apos;S NEEDS
                  </h4>
                </span>
                <p className="leading-loose text-gray-300 font-light p-6 py-4 md:p-0 mb-0 md:mb-10 w-96">
                  The way ingredients are sourced affects the way we nourish our
                  bodies. Author Mark Schatzer believes our body naturally
                  devolops an appetite for the foods and nutrients it needs to
                  be healthy, but that artificial flavourings are getting in the
                  way. This can be reversed by focusing on high-quality
                  ingredients and being mindful as your appetite guides you to
                  consume according to your body&apos;s needs.
                </p>
              </div>
              <h4 className="text-regal-red p-6 md:p-0 mb-0 md:mb-10">
                BE MINDFUL
              </h4>
              <p className="text-slate-300 font-medium p-6 py-4 md:p-0 w-96">
                Sourcing local or organic food is a good way to start being more
                mindful about what you&apos;re cooking and eating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
