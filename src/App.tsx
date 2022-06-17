import { ReactElement, useEffect, useState } from "react";

import Header from "./components/header/";
import Line from "./components/line";
import Banner from "./components/banner";
import Advantage from "./components/advantage";
import CoreFunctions from "./components/core-functions/";
import AboutUs from "./components/about-us";
import Footer from "./components/footer";

import { Navs, AdvantageData, CoreFunctionsData, AboutUsData } from "./data";
import type { CoreFunctionsModel } from "@/model";

import "./App.scss";

const App = (): ReactElement => {
  const [CoreFunctionsChoosedData, setCoreFunctionsChoosedData] = useState<
    Array<CoreFunctionsModel>
  >(
    CoreFunctionsData.filter(
      (item: CoreFunctionsModel, index: number) => index > 2
    )
  );
  const swiperBtnActionBack = (type: string | undefined): void => {
    type === "init"
      ? setCoreFunctionsChoosedData(
          CoreFunctionsData.filter(
            (item: CoreFunctionsModel, index: number) => index < 3
          )
        )
      : setCoreFunctionsChoosedData(
          CoreFunctionsData.filter(
            (item: CoreFunctionsModel, index: number) => index > 2
          )
        );
  };
  const anchor = (id: number): void => {
    if (id === 2) {
      window.scrollTo({
        top: document.getElementById("about")?.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="App">
      <div className="top">
        <div className="wd1300">
          <Header Navs={Navs} anchor={anchor} />
          <Line />
          <Banner />
        </div>
      </div>

      <Advantage AdvantageData={AdvantageData} />
      <CoreFunctions
        CoreFunctionsData={CoreFunctionsChoosedData}
        swiperBtnActionBack={swiperBtnActionBack}
      />

      <AboutUs AboutUsData={AboutUsData} id="about" />

      <Footer />
    </div>
  );
};

export default App;
