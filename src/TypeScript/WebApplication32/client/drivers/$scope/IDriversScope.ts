module MyApp.Drivers.UsingScope {

    export interface IDriversScope extends ng.IScope {
        drivers?: Array<IDriver>;
        name?: string;
        teamName?: string;
        driverFilter?: (d: IDriver) => boolean;
    }

} 