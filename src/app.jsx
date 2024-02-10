import { useState } from "preact/hooks";
import Sidebar from "./components/SideBar";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Hello, Tailwind!</h1>
      <p className="text-center">
        This is a simple Preact app with Tailwind CSS.
      </p>
      <p className="text-center">You clicked {count} times.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <Sidebar />
    </div>
  );
}
