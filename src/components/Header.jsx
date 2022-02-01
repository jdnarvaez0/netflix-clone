import Title from '../img/title.png'

import {PlayArrow,InfoOutlined} from "@material-ui/icons";
const Header = () => {
  return (
    <div className="h-screen">
      <img className="w-screen object-cover h-90v"
        src="https://www.xtrafondos.com/wallpapers/the-matrix-resurrections-9203.jpg"
        alt="img header"
      />

      <div className="w-2/6 absolute left-10 bottom-20 text-white flex flex-col">
        <img className="w-98"
          src={Title}
          alt="title"
        />
        <span className="mt-5 mr-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="flex mt-3">
          <button className=" h-8 p-2 border-none rounded flex items-center justify-center text-lg font-medium mr-3 cursor-pointer bg-white text-black ">
            <PlayArrow />
            <span className="ml-1">Play</span>
          </button>
          <button className=" h-8 p-2 border-none rounded flex items-center justify-center text-lg font-medium mr-2 cursor-pointer bg-gray-500 text-white ">
            <InfoOutlined />
            <span className="ml-1">Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
