import { Schema, model } from 'mongoose';

interface ISession {
    filmName: string;
    roomNumber: number;
    numberOfFreeSeats: number;
    ticketCost: number;
    filmDuration: string;
  };

  const schema = new Schema<ISession>({
    filmName: { type: String, required: true },
    roomNumber: {type: Number, required: true},
    numberOfFreeSeats:{type: Number, required: true},
    ticketCost:{type: Number, required: true},
    filmDuration:{type: String, required: true}
  });

  const SessionModel = model<ISession>("sessions", schema);

  export default SessionModel;