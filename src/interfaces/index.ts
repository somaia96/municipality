export interface INavLink{
    id:number,
    link:string,
    text:string
}

export interface IMember{
    id:number,
    name:string,
    photo:string,
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
    decision_id?:number,
}

export interface ISerTabs{
    id:number,
    name:string
}