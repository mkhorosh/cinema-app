export const GET_SESSIONS: string = 'GET_SESSIONS';

interface GetSessions {
    type: typeof GET_SESSIONS;
}

export const getSessions = (): GetSessions => ({ type: GET_SESSIONS });

export type SessionActions = GetSessions;
