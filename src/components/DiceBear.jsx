import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

const diceBearStyles = [
  "adventurer",
  "adventurer-neutral",
  "avataaars",
  "bear",
  "big-ears",
  "bottts",
  "bunny",
  "chibi",
  "chibi-neutral",
  "croodles",
  "micah",
];

const generateAvatar = () => {
  const avatar =
    diceBearStyles[Math.floor(Math.random() * diceBearStyles.length)];

  return `https://api.dicebear.com/7.x/${avatar}/svg`;
};

function App() {
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 128,
      // ... other options
    }).toDataUriSync();
  }, []);

  return <img src={avatar} alt="Avatar" />;
}

export default App;
