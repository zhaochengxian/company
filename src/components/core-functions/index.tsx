import { ReactElement, useState } from "react";
import { CoreFunctionsModel } from "@/model";
import { Images } from "../../data";

import "./index.scss";

interface CoreFunctionsProps {
  CoreFunctionsData: CoreFunctionsModel[];
  swiperBtnActionBack: (type?: string | undefined) => void;
}

const CoreFunctions = (props: CoreFunctionsProps): ReactElement => {
  const [swiperBtns, setSwiperBtns] = useState<Array<string>>([
    Images[15],
    Images[12],
  ]);
  const { CoreFunctionsData, swiperBtnActionBack } = props;
  const swiperBtnAction = (): void => {
    if (swiperBtns[0] === Images[15]) {
      setSwiperBtns([Images[14], Images[13]]);
      swiperBtnActionBack("init");
    } else {
      setSwiperBtns([Images[15], Images[12]]);
      swiperBtnActionBack();
    }
  };
  return (
    <div className="core-functions">
      <div className="title">
        <img src={Images[5]} />
        <span>核心功能</span>
      </div>
      <div className="cricle"></div>
      <div className="swiper wd1300">
        <img
          src={swiperBtns[0]}
          className="swiper-btn"
          onClick={swiperBtnAction}
        />
        <div className="core-functions-list">
          {CoreFunctionsData?.map((item: CoreFunctionsModel, index: number) => (
            <div key={item.id} className="item">
              <img src={item.img} />
              <div>{item.title}</div>
              {index === 1 ? (
                <div className="swiper-dots">
                  <span
                    onClick={swiperBtnAction}
                    style={{
                      background:
                        swiperBtns[0] === Images[15] ? "#000000" : "#EDEDED",
                    }}
                  ></span>
                  <span
                    onClick={swiperBtnAction}
                    style={{
                      background:
                        swiperBtns[0] === Images[15] ? "#EDEDED" : "#000000",
                    }}
                  ></span>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        <img
          src={swiperBtns[1]}
          className="swiper-btn"
          onClick={swiperBtnAction}
        />
      </div>
    </div>
  );
};

export default CoreFunctions;
