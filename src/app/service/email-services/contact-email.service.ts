import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ContactEmailService {
    private baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    sendEmail(body: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/api/send-email`, body);
    }
}