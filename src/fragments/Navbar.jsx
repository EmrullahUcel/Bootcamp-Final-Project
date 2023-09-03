import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, setSearhedItems } from "/src/features/DataSlice";
import { NavLink } from "react-router-dom";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { MdOutlineFestival } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";
import { FaLaughBeam } from "react-icons/fa";

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
    <nav className="bg-[#3DCE88] flex justify-center items-center w-full h-44 relative">
      <NavLink to="/" className="w-32 mt-[-90px]">
        ETKİNLİKLER.COM
      </NavLink>
      <div className="w-full flex justify-around items-end absolute mb-[-7rem] ">
        <input
          className="w-[60rem] rounded-s-full rounded-e-full h-16 pl-6 font-semibold "
          onChange={handleSearch}
          type="search"
          placeholder="Etkinlik , sanatçı , mekan ya da tarihe göre ara ..."
        />
        <input
          type="date"
          className="w-[18rem] h-16 rounded-s-full rounded-e-full p-5"
          onChange={handleDate}
        />
      </div>
      <div className="w-full  mt-12 flex justify-center gap-14 items-center h-20 absolute bottom-[-25rem]  ">
        <NavLink
          className="w-40 h-20  hover:border-green-600 border-4 border-white flex
           justify-center items-center rounded-lg bg-white text-black "
          to="/concerts"
        >
          <PiMicrophoneStageFill className="text-green-500 mr-2 text-2xl" />
          KONSER
        </NavLink>
        <NavLink
          to="/festivals"
          className="w-40 h-20 hover:border-green-600 border-4 border-white flex
           justify-center items-center rounded-lg bg-white text-black "
        >
          <MdOutlineFestival className="text-green-500 mr-2 text-2xl" />
          FESTİVAL
        </NavLink>
        <NavLink
          to="/theaters"
          className="w-40 h-20 hover:border-green-600 border-4 border-white flex
           justify-center items-center rounded-lg bg-white text-black "
        >
          <FaTheaterMasks className="text-green-500 mr-2 text-2xl" />
          TİYATRO
        </NavLink>
        <NavLink
          to="/standups"
          className="w-40 h-20 hover:border-green-600 border-4 border-white flex 
          justify-center items-center rounded-lg bg-white text-black "
        >
          <FaLaughBeam className="text-green-500 mr-2 text-2xl" />
          STAND-UP
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
