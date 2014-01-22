module MyApp.Drivers.UsingScopeViewModel {

    export interface IDriversViewModel {
        drivers?: Array<IDriver>;
        name?: string;
        teamName?: string;
        driverFilter?: (d: IDriver) => boolean;
    }

    export interface IDriversScope extends ng.IScope {
        viewModel: IDriversViewModel;
    }

} 