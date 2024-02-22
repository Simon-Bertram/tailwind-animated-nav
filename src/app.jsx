import { useState } from "preact/hooks";
import Sidebar from "./components/SideBar";
import ContentContainer from "./components/ContentContainer";
import ChannelBar from "./components/ChannelBar";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex container mx-auto">
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}
