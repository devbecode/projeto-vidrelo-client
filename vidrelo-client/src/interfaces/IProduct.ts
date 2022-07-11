import IGallery from "./IGallery";

export default interface IProduct {
    id: string,
    status:string,
    name: string,
    short_description: string,
    full_description: string,
    gallery: IGallery[]
}