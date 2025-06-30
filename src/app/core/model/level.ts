export interface Level {
    id: number, 
    languageCode: string,
    title: string 
}

export interface LevelResponse {
  levels: Level[]; 
}
