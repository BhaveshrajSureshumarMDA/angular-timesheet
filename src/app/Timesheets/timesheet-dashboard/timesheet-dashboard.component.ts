import { Component, inject } from '@angular/core';
import { DataServiceRouteService } from '../../services/data-service-route.service';
import { timesheet } from '../../models/timesheet';
import { TimesheetGridComponent } from './timesheet-grid/timesheet-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-timesheet-dashboard',
  standalone: true,
  imports: [
    GridModule,
    TimesheetGridComponent
  ],
  templateUrl: './timesheet-dashboard.component.html',
  styleUrl: './timesheet-dashboard.component.css'
})
export class TimesheetDashboardComponent {
  timesheets:any[] = []
  user:string = ""
  dataService = inject(DataServiceRouteService)

}
