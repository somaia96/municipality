
export interface INavLink{
    id:number,
    link:string,
    text:string
}

export interface IInfo {
    id:number,
    tabName?:string,
    img:string,
    title:string,
    description:string|string[],
    date?:string,
    imgs?:string[],
}

export interface IMember{
    id:number,
    name:string,
    position:string,
    description:string,
    img:string,
}

export interface INewsApi{
    id:number,
    img?:string,
    title:string,
    description:string|string[],
    photos?:string[],
    activity_date?:string,
    service_category_id?:number,
    activity_type_id?:number,
    created_at?:string,
}
export interface ISerTabs{
    id:number,
    name:string
}
