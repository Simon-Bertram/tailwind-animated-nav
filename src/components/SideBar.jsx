import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-22 flex flex-col bg-gray-900 bg-white dark:bg-gray-900 marker:shadow-lg">
      <nav className="mt-8">
        <ul>
          <button aria-label="Home">
            <SideBarIcon icon={<FaFire size="28" />} text="Home" />
          </button>

          <li>
            <button aria-label="New Item">
              <SideBarIcon icon={<BsPlus size="32" />} text="New Item" />
            </button>
          </li>
          <li>
            <button aria-label="Lighting">
              <SideBarIcon
                icon={<BsFillLightningFill size="28" />}
                text="Trending"
              />
            </button>
          </li>
          <li>
            <button aria-label="Poo">
              <SideBarIcon icon={<FaPoo size="24" />} text="Foobar" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡'" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;
