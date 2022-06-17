export interface AdvantageDataModel {
    id: number
    title: string
    content: string
    img: string
}

export interface NavModel {
    id: number
    name: string
}

export type AboutUsDataModel = Omit<AdvantageDataModel, ''>
export type CoreFunctionsModel = Omit<AdvantageDataModel, 'content'>