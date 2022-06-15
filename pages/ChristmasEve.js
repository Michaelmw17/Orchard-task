import Chicken from '../public/images/Image-Chicken.jpg';
import Image from 'next/image';

function ChristmasEve() {
  return (
    <div>
      <Image
        src={Chicken}
        alt="Chicken"
        height="492"
        width="579"
        loading="lazy"
      ></Image>
    </div>
  );
}

export default ChristmasEve;
