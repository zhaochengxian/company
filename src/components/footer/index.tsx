import { ReactElement } from "react";
import { Images } from "../../data";
import "./index.scss";

interface ContactUsProps {}

const ContactUs = (props: ContactUsProps): ReactElement => {
  return (
    <div className="footer">
      <div className="title">
        <img src={Images[4]} />
        <span>联系我们</span>
      </div>
      <div className="contact-us">
        <div>
          <span>杭州亿投科技有限公司 </span>
          <span style={{ marginLeft: "7px" }}>联系方式：</span>
          <span>18768465625</span>
        </div>
        <span className="btn">联系我们</span>
      </div>
      <div className="record-no">
        <span>备案号：</span>
        <span>浙ICP备2022016274号</span>
      </div>
    </div>
  );
};

export default ContactUs;
