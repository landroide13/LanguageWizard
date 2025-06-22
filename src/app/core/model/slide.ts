export interface Slide {
    id: number,
    template: string,
    text: string,
    images: string[],
    imagesCount: number,
    audioUrl: string,
    backgroundColor: string,
    isAnimated: boolean,
    requiresAnswer: boolean
}

