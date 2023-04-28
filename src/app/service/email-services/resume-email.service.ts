import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ResumeEmailService {
    private baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    sendResumeEmail(body: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/api/send-resume-email`, body);
    }; 
}