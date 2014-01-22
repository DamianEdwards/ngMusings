module MyApp.Drivers.ControllerAs {

    export interface IDriversModel {
        drivers: Array<IDriver>;
        name: string;
        teamName: string;
        driverFilter: (d: IDriver) => boolean;
    }

} 