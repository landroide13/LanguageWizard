export interface Slide {
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

interface ImageObject {
  url: string;
}


interface TextOptions{
    id: number, 
    expectedSelection: boolean, 
    text: string
}
