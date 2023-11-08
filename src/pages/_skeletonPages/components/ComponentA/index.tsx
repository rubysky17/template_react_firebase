import { memo } from "react";
import "./index.scss";
import { useStore } from '../../context/store';
const ComponentA = () => {
  const {state, dispatch, actions} = useStore();
  const { defaultState } = state;

  return (
    <div>
      Component A
      <button onClick={() => dispatch(actions.setDefaultAction(!defaultState))}>Click to run default action</button>
    </div>
  );
}

export default memo(ComponentA);
