export interface Slide {
    id: number,
    template: string,
    text: string,
    images: string[],
    imagesCount: number,
    audioUrl: string,
    backgroundColor: string,
    textOptions: TextOptions[]
    isAnimated: boolean,
    requiresAnswer: boolean
}

interface TextOptions{
    id: number, 
    expectedSelection: boolean, 
    text: string
}
