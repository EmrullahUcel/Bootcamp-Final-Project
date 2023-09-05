import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, setSearhedItems } from "/src/features/DataSlice";
import { NavLink } from "react-router-dom";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { MdOutlineFestival } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";
import { FaLaughBeam } from "react-icons/fa";
import { TiTicket } from "react-icons/ti";
import { BiSolidMicrophoneAlt } from "react-icons/bi";

const Navbar = () => {
  const concerts = useSelector((state) => state.data.concerts);
  const festivals = useSelector((state) => state.data.festivals);
  const standups = useSelector((state) => state.data.standups);
  const theaters = useSelector((state) => state.data.theaters);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    dispatch(setSearchTerm(searchValue));

    const allEvents = [...concerts, ...festivals, ...standups, ...theaters];

    const filtered = allEvents.filter((event) => {
      const normalizedSearchValue = searchValue.toLowerCase();
      return (
        event.city.toLowerCase().includes(normalizedSearchValue) ||
        event.artist?.toLowerCase().includes(normalizedSearchValue) ||
        event.location.toLowerCase().includes(normalizedSearchValue) ||
        event.title?.toLowerCase().includes(normalizedSearchValue) ||
        event.date.toLowerCase().includes(normalizedSearchValue)
      );
    });

    dispatch(setSearhedItems(filtered));
  };
  const handleDate = (e) => {
    const searchValue = e.target.value;
    dispatch(setSearchTerm(searchValue));
    const allEvents = [...concerts, ...festivals, ...standups, ...theaters];
    console.log(searchValue);
    const filtered = allEvents.filter((event) => {
      return event.date.includes(searchValue);
    });

    dispatch(setSearhedItems(filtered));
  };

  return (
    <nav className="bg-blue-600 text-white flex justify-center items-center w-full h-44 relative">
      <div className="w-full flex justify-evenly h-full mt-10 items-start">
        <NavLink to="/" className="items-center flex ">
          <BiSolidMicrophoneAlt className="text-4xl" />
          <h1 className="font-extrabold font">ÜÇŞEHİRETKİNLİK</h1>
        </NavLink>
        <NavLink className="flex w-auto h-auto items-center" to="/basket">
          <h1 className="font-extrabold font">BİLETLERİM</h1>
          <TiTicket className="text-4xl" />
        </NavLink>
      </div>
      <div className="w-full flex justify-around items-end absolute mb-[-7rem] ">
        <input
          className="w-[35rem] rounded-s-full rounded-e-full h-16 pl-6 text-blue-900 font-semibold "
          onChange={handleSearch}
          type="search"
          placeholder="Etkinlik , sanatçı ya da mekan ara ..."
        />
        <input
          type="date"
          className="w-[18rem] h-16 rounded-s-full rounded-e-full text-black p-5 sm:w-[10rem]"
          onChange={handleDate}
        />
      </div>
      <div className="w-full mt-12 flex justify-center gap-14 items-center h-20 absolute bottom-[-25rem] sm:flex sm:flex-wrap sm:text-sm sm:h-40 sm:gap-1 sm:pt-16 ">
        <NavLink
          className="w-40 h-20   hover:border-blue-600 border-4 border-green-600 flex
           justify-center items-center rounded-lg bg-white text-black sm:w-24 sm:h-12"
          to="/concerts"
        >
          <PiMicrophoneStageFill className="text-green-500 mr-2 text-2xl " />
          KONSER
        </NavLink>
        <NavLink
          to="/festivals"
          className="w-40 h-20 hover:border-blue-600 border-4 border-green-600 flex
           justify-center items-center rounded-lg bg-white text-black sm:w-24 sm:h-12"
        >
          <MdOutlineFestival className="text-green-500 mr-2 text-2xl " />
          FESTİVAL
        </NavLink>
        <NavLink
          to="/theaters"
          className="w-40 h-20 hover:border-blue-600 border-4 border-green-600 flex
           justify-center items-center rounded-lg bg-white text-black sm:w-24 sm:h-12"
        >
          <FaTheaterMasks className="text-green-500 mr-2 text-2xl" />
          TİYATRO
        </NavLink>
        <NavLink
          to="/standups"
          className="w-40 h-20 hover:border-blue-600 border-4 border-green-600 flex 
          justify-center items-center rounded-lg bg-white text-black sm:w-24 sm:h-12"
        >
          <FaLaughBeam className="text-green-500 mr-2 text-2xl " />
          STAND-UP
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
