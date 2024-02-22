import { useState, useEffect } from "preact/hooks";

const useDarkMode = () => {
  const [enabled, setEnabled] = useState(false);
  const isEnabled = typeof enabledState === 'undefined' && enabled;
  return ( 
    return [enabled, setEnabled]
   );
}
 
export default useDarkMode;