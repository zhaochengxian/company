import { ReactElement } from "react";
import { Images } from "../../data";

import "./index.scss";

interface BannerProps {}

const Banner = (props: BannerProps): ReactElement => {
  return (
    <div className="banner">
      <div className="banner-left">
        <div>
          米友团 <br />
          一站式购物生活社区.
        </div>
        <div>
          专为儿童生活打造的购物商城，为孩子们提供了各类他们所需的商品，如穿
          <br />
          的、吃的、玩的、学的样样都有。
        </div>
        <div>
          <div className="qrcode-item">
            <div>
              <img src={Images[0]} />
            </div>
            <div>扫码下载APP</div>
          </div>
          <div className="qrcode-item">
            <div>
              <img src={Images[0]} />
            </div>
            <div>扫描体验小程序</div>
          </div>
        </div>
      </div>

      <img src={Images[6]} className="img" />
    </div>
  );
};

export default Banner;
