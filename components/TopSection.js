import React from 'react';
import Image from 'next/image';

import FatherSon from '../public/images/Image-FatherSon.jpg';
import Fruit from '../public/images/Image-Fruit.jpg';
import Veggies from '../public/images/Image-Veggie.jpg';

const TopSection = () => {
  return (
    <section>
      <div className="py-16 px-6">
        <div className="container m-auto w-100 px-12 text-gray-600 md:px-0 xl:px-0">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="p-0 rounded-xl group sm:flex space-x-2 hover:rounded-2xl">
              <div className="rounded-xl group w-100  h-100 flex  hover:rounded-2x px-1 sm:px-2">
                <Image
                  src={FatherSon}
                  alt="user avatar"
                  height="600"
                  width="554"
                  loading="lazy"
                ></Image>
              </div>
              <div>
                <div>
                  <div>
                    <Image
                      src={Fruit}
                      alt="user avatar"
                      height="290"
                      width="384"
                      loading="lazy"
                    ></Image>
                    <Image
                      src={Veggies}
                      alt="user avatar"
                      height="290"
                      width="384"
                      loading="lazy"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-12/12 sm:w-10/12 pl-0 p-5 ">
              <div className="space-y-2">
                <div className="space-y-4 py-4">
                  <span className="underline underline-offset-8 ">
                    <h4 className="text-2xl font-extralight text-slate-300  content-center py-4">
                      ANSWER YOUR BODY'S NEEDS
                    </h4>
                  </span>
                  <p className="leading-relaxed text-slate-300 font-thin py-4 w-96">
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
