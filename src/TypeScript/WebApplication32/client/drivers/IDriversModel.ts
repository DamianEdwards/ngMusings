module MyApp.drivers {

    export interface IDriversModel {
        drivers: Array<IDriver>;
        name: string;
        teamName: string;
        filteredDrivers() : Array<IDriver>
    }

} 