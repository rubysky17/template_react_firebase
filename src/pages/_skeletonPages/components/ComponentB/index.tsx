import { memo } from "react";
import "./index.scss";

const ComponentB = () => {

  return (
    <div>
      Component B
    </div>
  );
}

export default memo(ComponentB);
