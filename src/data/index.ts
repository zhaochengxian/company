import Navs from "./navs"
import Images from "./images"

import { AdvantageDataModel, AboutUsDataModel, CoreFunctionsModel } from "../model"

const AdvantageData: Array<AdvantageDataModel> = [{
    id: 1,
    title: "让生活更美好",
    content: "新生代亲子生活，成为儿童生活方式引领者",
    img: Images[9]
}, {
    id: 2,
    title: "全方位服务",
    content: "为您提供穿搭 · 营养 · 教育和生活的全方位解决方案",
    img: Images[7]
}, {
    id: 3,
    title: "无门槛创业",
    content: "一键分销，轻松做生意多渠道获客 无需囤货，一件代发，物流同步",
    img: Images[8]
}]
const CoreFunctionsData: CoreFunctionsModel[] = [
    {
        id: 1,
        title: "实时提现",
        img: Images[16]
    }, {
        id: 2,
        title: "供应链管理",
        img: Images[17]
    }, {
        id: 3,
        title: "售后管理",
        img: Images[18]
    },
    {
        id: 4,
        title: "团购管理",
        img: Images[11]
    }, {
        id: 6,
        title: "积分商城",
        img: Images[20]
    }, {
        id: 5,
        title: "订单管理",
        img: Images[19]
    },
]
const AboutUsData: Array<AboutUsDataModel> = [
    {
        id: 1,
        title: "一键加入米友团",
        content: "扫码进入米友团小程序",
        img: Images[0]

    }, {
        id: 2,
        title: "下载米友团APP",
        content: "扫码下载米友团APP",
        img: Images[0]

    }, {

        id: 3,
        title: "及时接受官方福利通知",
        content: "扫码关注米友团服务号",
        img: Images[21]

    }
]

export {
    Navs,
    Images,
    AdvantageData,
    AboutUsData,
    CoreFunctionsData
}