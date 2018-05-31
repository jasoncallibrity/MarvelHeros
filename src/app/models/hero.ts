import { ImageVariant } from './image-variant.enum'

export class Hero {
    name: string
    description: string
    pictureURL: string

    constructor(name: string, description?: string, pictureURL?: string) {
        this.name = name;
        this.description = description;
        this.pictureURL = pictureURL;
    }

    public getPictureURL(iv: ImageVariant) {
        return `${this.pictureURL}/${iv}.jpg`
    }
}



///``getPictureUrl(ImageVariant.PORTRAIT_SMALL)