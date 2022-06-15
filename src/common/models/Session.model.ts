export interface BaseSession {
  filmName: string;
  filmDescription: string;
  supervisor: string;
  theatre: string;
  startDate: Date;
  endDate: Date;
  duration: string;
  genre: string;
}

export interface Session extends BaseSession {
  id: number;
}
