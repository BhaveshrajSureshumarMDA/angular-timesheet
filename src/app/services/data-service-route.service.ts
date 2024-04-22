import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timesheet } from '../models/timesheet';

@Injectable({
  providedIn: 'root'
})
export class DataServiceRouteService {

  constructor(private httpClient: HttpClient) { }

  apiUrl:string ="http://127.0.0.1:8000/api";

  fetchDataTimesheet(skip:number, take:number){
    return this.httpClient.get<timesheet>(this.apiUrl+"/dashboard?skip="+skip+"&take="+take);
  }

  fetchDataTimesheetDetails(){

  }

}
