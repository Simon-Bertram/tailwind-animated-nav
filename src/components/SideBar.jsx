import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 bg-gray-900 text-white shadow-lg">
      <nav>
        <ul>
          <li>
            <SideBarIcon icon={<FaFire size="28" />} />
          </li>
          <li>
            <SideBarIcon icon={<BsPlus size="32" />} />
          </li>
          <li>
            <SideBarIcon icon={<BsFillLightningFill size="28" />} />
          </li>
          <li>
            <SideBarIcon icon={<FaPoo size="24" />} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

const SideBarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};

export default Sidebar;
