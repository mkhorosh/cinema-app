import { BaseSession, Session } from "./Session.interface";
import { Sessions } from "./Sessions.interface";

// database recieve 

let sessionList: Sessions = {
    1: {
        id: 1,
        filmName: "naruto",
        filmDescription: "string",
        supervisor: "Marina",
        theatre: "Орлёнок",
        date: "2022-03-20T14:00",
        duration: "01:20",
        status: "ok",
    }
};



export const findAll = async (): Promise<Session[]> => Object.values(sessionList);

export const find = async (id: number): Promise<Session> => sessionList[id];

export const create = async (newItem: BaseSession): Promise<Session> => {
    const id = new Date().valueOf();

    sessionList[id] = {
        id,
        ...newItem,
    };
    return sessionList[id];
}

export const update = async (
    id: number,
    itemUpdate: BaseSession
): Promise<Session | null> => {
    const item = await find(id);
    if(!item){
        return null;
    }
    sessionList[id] = {id, ...itemUpdate};
    return sessionList[id];
}

export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
    if(!item){
        return null;
    }
    delete sessionList[id];
}
