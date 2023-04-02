import Image from "next/image";

import dude from "../public/assets/avatars/Dude.jpg";

function Avatar() {
  return (
    <figure className="rounded-full w-8 h-8">
      <Image src={dude} alt="User name here" className="rounded-full" />
    </figure>
  );
}
export default Avatar;
