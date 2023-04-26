/// <reference types="vite/client" />

declare global {
    /**
     * For context.provider interfaces data props
     */
    type StoreContextProps = {
        currentPage: "competitions" | "teams" | "matches" | "calendar";
    }

    type CurrentPageProps = "competitions" | "teams" | "matches" | "calendar";

    /**
     * For context.provider props
     */
    interface IStoreContext {
        data: StoreContextProps;
        setPage: (page: CurrentPageProps) => void;
    }

    type AreaProps = {
        id: number;
        name: string;
        code: string;
        flag: string;
    }

    /**
     * Req. props data
     */
    type CompetitionProps = {
        count: number;
        competitions: [{
            id: number;
            area: AreaProps;
            name: string;
            code: string;
            type: string;
            emblem: string;
            plan: string;
        }];
    }

    /**
     * Req. props data
     */
    type TeamProps = {
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
        }];
    }

    /**
     * Req. props data
     */
    type MatchesProps = {
        area: AreaProps;
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

    /**
     * Для отображения списка комманд
     */
    type CompetitionTeamsProps = {
        teams: [{
            id: number;
            name: string;
            tla: string;
            crest: string;
            founded: number;
        }]
    }
}

export { }