export interface IStory {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    text: string;
    time: number;
    title: string;
    type: string;
    url: string;
  }
  
  export interface StoriesState {
    list: IStory[];
    startAt: number;
    pending: Boolean;
    error: Object | null;
  }