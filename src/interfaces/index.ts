
export interface INavLink{
    id:number,
    link:string,
    text:string
}

export interface IInfo {
    id:number,
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

