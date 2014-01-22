module MyApp.Drivers {

    export interface IDriversService {
        getAllDrivers: () => Array<IDriver>;
    }

} 