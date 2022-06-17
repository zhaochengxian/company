import { ReactElement } from "react";
import { AboutUsDataModel } from "@/model";

import { Images } from "../../data";

import "./index.scss";

interface AboutUsProps {
  AboutUsData: AboutUsDataModel[];
  id: string;
}

const AboutUs = (props: AboutUsProps): ReactElement => {
  const { AboutUsData, id } = props;
  return (
    <div className="about-us" id={id}>
      <div className="title">
        <img src={Images[10]} />
        <span>关于我们</span>
      </div>
      <div className="des">
        米友团是一个专注于新生代亲自真实生活的社交电商平台，为孩子们提供了各类他们所需的商品，如穿的、吃的、玩的、学的样样都有。核心团队拥有二十多年供应链管理经验，
        层层精选国内外优质好物和原创设计品牌，不追随，不盲从，创造3-12岁儿童的至美生活。
      </div>
      <div className="about-us-data">
        {AboutUsData?.map((item: AboutUsDataModel) => (
          <div key={item.id} className="item">
            <div>
              <img src={item.img} />
            </div>
            <div>{item.title}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
