/// <reference types="vite/client" />

declare global {
    type StoreContextProps = {
        currentPage: "competitions" | "teams" | "matches" | "calendar";
    }

    type CurrentPageProps = "competitions" | "teams" | "matches" | "calendar";

    interface IStoreContext {
        data: StoreContextProps;
        setPage: (page: CurrentPageProps) => void;
    }

    type CompetitionProps = {
        count: number;
        competitions: [{
            id: number;
            area: {
                id: number;
                name: string;
                code: string;
                flag: string;
            };
            name: string;
            code: string;
            type: string;
            emblem: string;
            plan: string;
        }]
    }

    type TeamProps = {
        count: number;
        teams: [{
            id: number;
            name: string;
            shortName: string;
            tla: string;
            crest: string;
            address: string;
            website: string;
            founded: number;
            clubColors: string;
            venue: string;
        }]
    }

    type MatchesProps = {
        area: {
            id: number;
            name: string;
            code: string;
            flag: string;
        };
        competition: {
            id: number;
            name: string;
            code: string;
            type: string;
            emblem: string;
        };
        season: {
            id: number;
            startDate: string;
            endDate: string;
            currentMatchday: number;
        };
        id: number;
        utcDate: string;
        status: string;
        matchday: number;
        stage: string;
        homeTeam: {
            id: number;
            name: string;
            shortName: string;
            tla: string;
            crest: string;
        };
        awayTeam: {
            id: number;
            name: string;
            shortName: string;
            tla: string;
            crest: string;
        };
        score: {
            winner: string;
            duration: string;
        };
        referees: [{
            id: number;
            name: string;
            type: string;
            nationality: string;
        }]
    }
}

export { }