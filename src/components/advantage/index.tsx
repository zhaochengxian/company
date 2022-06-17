import { ReactElement, useEffect } from "react";
import { AdvantageDataModel } from "@/model";

import "./index.scss";

interface AdvantageProps {
  AdvantageData: AdvantageDataModel[];
}

const Advantage = (props: AdvantageProps): ReactElement => {
  const { AdvantageData } = props;
  useEffect(() => {}, []);
  return (
    <div className="wd1300 advantage" id="trigger4">
      {AdvantageData?.map((item: AdvantageDataModel, index: number) => (
        <div
          key={item.id}
          className="item animate4 box2 black outline"
          id="jiba"
        >
          <img src={item.img} />
          <div>{item.title}</div>
          <div>
            {index !== 2 ? item.content : item.content.slice(0, 16)}
            <br />
            {index !== 2 ? "" : item.content.slice(16, 34)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advantage;
