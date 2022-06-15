import Stew from '../public/images/Image-Stew.jpg';
import Image from 'next/image';

function TasteFurther() {
  return (
    <div>
      <Image
        src={Stew}
        alt="Stew"
        height="492"
        width="579"
        loading="lazy"
      ></Image>
    </div>
  );
}

export default TasteFurther;
