import { Injectable } from "@angular/core";
import { Motorcycle } from "./../model/motorcycle";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class MotorcycleService {

    constructor(private httpClient: HttpClient) { }

    create(motorcycle: Motorcycle): Observable<Motorcycle>{
        let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post<Motorcycle>('/api/motorcycle', motorcycle, {
            headers: headerList,
        });
    }
    
    get(id:number): Observable<Motorcycle> {
        const url = '/api/motorcycle/' + id ;
        return this.httpClient.get<Motorcycle>(url);
    }
    
    getAllMotorcycle(): Observable<Motorcycle[]>{
        const url = "/api/motorcycle/all";
        return this.httpClient.get<Motorcycle[]>(url);
    }

    update(motorcycle: Motorcycle): Observable<Motorcycle>{
        let headerList = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.put<Motorcycle>('/api/motorcycle', motorcycle, {
            headers: headerList,
        });
    }

    delete(id: number): Observable<void> {
        const url = '/api/motorcycle/' + id;
        return this.httpClient.delete<void>(url);
    }

    
}