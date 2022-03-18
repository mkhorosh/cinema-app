export interface BaseSession {
  filmName: string;
  filmDescription: string;
  supervisor: string;  //TODO change to a person interface
  theatre: string;  //TODO change to a place interface
  date: string;  //TODO string or date type??????????
  duration: string;
  status: string;  //TODO enum? как вычисляется?
};

export interface Session extends BaseSession {
  id: number;
}