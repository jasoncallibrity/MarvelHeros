export class Hero{
    name: string
    description: string
    //map whatever properties are returned to whatever they need to be mapped to
    //name
    //description (display 'no discription if response is empty)
    // cast api response to object [json, typescript]
    constructor(name: string, description?: string){
        this.name = name;
        this.description = description;
    }
}