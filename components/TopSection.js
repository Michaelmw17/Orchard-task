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
      <div className="py-6 px-6">
        <div className="container m-auto w-100 px-2 text-gray-600 md:px-0 xl:px-0">
          <div className="grid gap-16 mr-8   lg:grid-cols-2">
            <div className="p-12 px-2 gap-2   mr-8 rounded-xl group flex space-x-2 hover:rounded-2xl">
              <div className="rounded-xl group  flex  hover:rounded-2x sm:px-0">
                <Image
                  src={imgArray[0]}
                  alt="user avatar"
                  height="550"
                  width="954"
                  loading="lazy"
                  onClick={() => handleShowDialog(imgArray[0])}
                ></Image>
              </div>
              <div>
                <Image
                  src={imgArray[1]}
                  alt="user avatar"
                  height="390"
                  width="484"
                  loading="lazy"
                  onClick={() => handleShowDialog(imgArray[1])}
                ></Image>
                <Image
                  src={imgArray[2]}
                  alt="user avatar"
                  height="390"
                  width="484"
                  loading="lazy"
                  onClick={() => handleShowDialog(imgArray[2])}
                ></Image>
              </div>
              {isOpen && (
                <dialog
                  className="dialog"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '1',
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
                    alt="no image"
                  />
                </dialog>
              )}
            </div>
            <div className="md:w-12/12 sm:w-10/12 pl-0 p-5 ">
              <div className="space-y-2">
                <div className="space-y-4 py-4">
                  <span className="underline underline-offset-20 decoration-2 decoration-white">
                    <h4 className="tracking-widest text-2xl font-extralight text-slate-300  content-center py-4">
                      ANSWER YOUR BODY'S NEEDS
                    </h4>
                  </span>
                  <p className="leading-loose text-light-gray font-light py-4 w-96">
                    The way ingredients are sourced affects the way we nourish
                    our bodies. Author Mark Schatzer believes our body naturally
                    devolops an appetite for the foods and nutrients it needs to
                    be healthy, but that artificial flavourings are getting in
                    the way. This can be reversed by focusing on high-quality
                    ingredients and being mindful as your appetite guides you to
                    consume according to your body's needs.
                  </p>
                </div>
                <h4 className="text-regal-red">BE MINDFUL</h4>
                <p className="text-slate-300 font-bold py-4 w-96">
                  Sourcing local or organic food is a good way to start being
                  more mindful about what you're cooking and eating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
