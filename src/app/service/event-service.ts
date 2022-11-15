
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from './../model/event';
import { Injectable } from "@angular/core";

@Injectable() 
export class EventService{
    
    constructor(private httpClient: HttpClient) { }

    create(event: Event): Observable<Event>{
        return this.httpClient.post<Event>("/api/event", event); 
        }
   
    get(id: number): Observable<Event>{
        const url = "/api/event/" + id;
        return this.httpClient.get<Event>(url);
    }

    getAll(): Observable<Event[]>{
        const url = "/api/event/all";
        return this.httpClient.get<Event[]>(url);
    }

    update(event: Event): Observable<Event>{
        return this.httpClient.put<Event>("/api/event", event);
    }

    delete(id: number): Observable<void>{
        const url = "/api/event/" + id;
        return this.httpClient.delete<void>(url);
    }
}



