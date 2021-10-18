import { useNavigation } from "@react-navigation/core";
import { useCallback, useState } from "react";

function useGoTo(screen) {
  const [screenState] = useState(screen);
  const navigation = useNavigation();

  return useCallback((params) => {
    navigation.navigate(screenState, params);
  }, [screenState]);
}

export default useGoTo;