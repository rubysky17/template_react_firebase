import { memo } from "react";
import { Provider } from "./context";
import { Main } from "./components";

const UpdateYourPageName = () => {
  return (
    <Provider>
      <Main />
    </Provider>
  );
};

export default memo(UpdateYourPageName);
