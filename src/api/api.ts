import ky from "ky";

/**
 * https://cors-anywhere.herokuapp.com/corsdemo использую данный сервис чтобы получить права на CORS
 */
const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4';

export const getCompetitions = async () => {
    const data: CompetitionProps = await ky.get(`${API_URL}/competitions`, {
        headers: {
            "X-Auth-Token": import.meta.env.VITE_API_TOKEN
        }
    }).json();

    return data;
}

export const getTeams = async () => {
    const data: { teams: TeamProps[] } = await ky.get(`${API_URL}/teams`, {
        headers: {
            "X-Auth-Token": import.meta.env.VITE_API_TOKEN
        }
    }).json();

    return data;
}

export const getTeamsWithID = async (id: number) => {
    const data: TeamProps = await ky.get(`${API_URL}/teams/${id}`, {
        headers: {
            "X-Auth-Token": import.meta.env.VITE_API_TOKEN
        }
    }).json();

    return data;
}

export const getMatches = async () => {
    const data: MatchesProps = await ky.get(`${API_URL}/matches`, {
        headers: {
            "X-Auth-Token": import.meta.env.VITE_API_TOKEN
        }
    }).json();

    return data;
}

export const getTeamsFromCompetitions = async (id: number) => {
    const data: CompetitionTeamsProps = await ky.get(`${API_URL}/competitions/${id}/teams`, {
        headers: {
            "X-Auth-Token": import.meta.env.VITE_API_TOKEN
        }
    }).json()

    return data.teams;
}