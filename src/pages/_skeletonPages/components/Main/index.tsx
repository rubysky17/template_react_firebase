import { memo } from "react";
import { ComponentA, ComponentB } from "../";
import { useStore } from "../../context/store";
const Main = () => {
  const { state, dispatch, actions } = useStore();
  const { defaultState } = state;

  console.group("__ skeleton main console");
  console.log("_defaultState", defaultState);
  console.log("_actions", actions);
  console.log("_dispatch", dispatch);
  console.groupEnd();

  return (
    <div className="hrv-tta-container">
      <div className="hrv-tta-row hrv-tta-my-20">
        <div className="hrv-tta-col-12">
          <ComponentA />
          <ComponentB />
        </div>
      </div>
    </div>
  );
};

export default memo(Main);
