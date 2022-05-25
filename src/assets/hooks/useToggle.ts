import { useState, useCallback } from "react";


const useToggle = (initialState: boolean = true): [boolean, any] => {

  const [state, setState] = useState<boolean>(initialState);

  
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};

export default useToggle;
