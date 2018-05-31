import { ImageVariant } from './image-variant.enum'

export class Hero {
    name: string
    description: string
    pictureURL: string
    pictureExtension: string

    constructor(name: string, description?: string, pictureURL?: string, pictureExtension?: string) {
        this.name = name;
        this.description = description;
        this.pictureURL = pictureURL;
        this.pictureExtension = pictureExtension;
    }

    public getPictureURL(iv: ImageVariant) {
        return `${this.pictureURL}${iv.length?'/'+iv:''}.${this.pictureExtension}`
    }
}