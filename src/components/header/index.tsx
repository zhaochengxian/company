import { MouseEventHandler, ReactElement } from "react";
import { Images } from "../../data";
import { NavModel } from "@/model";

import "./index.scss";

interface HeaderProps {
  Navs: Array<NavModel>;
  anchor: (id: number) => void;
}

const Header = (props: HeaderProps): ReactElement => {
  const { Navs, anchor } = props;
  return (
    <div className="header">
      <div>
        <img src={Images[5]} />
        <div className="navs">
          {Navs.map((item: NavModel) => (
            <span key={item.id} onClick={() => anchor(item.id)}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
