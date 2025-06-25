export interface Slidedetail {
    id: number,
    template: string,
    text: string,
    images: ImageObject[],
    imagesCount: number,
    audioUrl: string,
    backgroundColor: string,
    textOptions: TextOptions[]
    isAnimated: boolean,
    requiresAnswer: boolean 
}

export interface Slide{
  id: number,
  order: number,
  template: string,
}

interface ImageObject {
  url: string;
}


interface TextOptions{
    id: number, 
    expectedSelection: boolean, 
    text: string
}
