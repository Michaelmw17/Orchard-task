import Food from '../public/images/Image-Food.jpg';
import Image from 'next/image';

function SummerLunch() {
  return (
    <div>
      <Image
        src={Food}
        alt="user avatar"
        height="492"
        width="579"
        loading="lazy"
      ></Image>
      ;
    </div>
  );
}

export default SummerLunch;
