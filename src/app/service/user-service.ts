import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService{
    constructor(private httpClient: HttpClient){} 

    create(user: User): Observable<User>{
        return this.httpClient.post<User>("/api/user", user);
    }

    get(id: number): Observable<User>{
        const url = "/api/user/" + id;
        return this.httpClient.get<User>(url);
    }

    getAllUsers(userId: number): Observable<User[]>{
        const url = "/api/user/all";
        return this.httpClient.get<User[]>(url);
    }

    update(user: User): Observable<User>{
        return this.httpClient.put<User>("/api/user", user);
    }

    delete(id: number): Observable<void>{
        const url = "/api/user/" + id;
        return this.httpClient.delete<void>(url);
    }
}