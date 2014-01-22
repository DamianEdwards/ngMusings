module MyApp.Drivers {

    export interface IDriver {
        id: number;
        firstName: string;
        lastName: string;
        teamName: string;
        points: number;
        image?: string;
    }

} 