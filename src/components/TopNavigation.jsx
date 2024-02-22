import { space } from "postcss/lib/list";
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <Search />
      <BellIcon />
      <UserCircle />
      <ThemeIcon />
    </div>
  );
};

const ThemeIcon = () => {
  const darkTheme = true;
  return <span>{darkTheme ? <FaSun size="24" /> : <FaMoon size="24" />}</span>;
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search" />
    <FaSearch size="18" />
  </div>
);

const BellIcon = () => <FaRegBell size="24" className="top-navigation-icon" />;
const UserCircle = () => (
  <FaUserCircle size="24" className="top-navigation-icon" />
);
const HashtagIcon = () => <FaHashtag size="20" className="title-hashtag" />;
const Title = () => <h5 className="title-text">tailwind-css</h5>;

export default TopNavigation;
