import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Position, CheckingAccount, Patrimony } from "./userData";
import { Observable } from "rxjs";


@Injectable()
export class UserDataService {

    constructor(private http: HttpClient){}

    protected apiBaseUrl : string = "http://localhost:3000/";

    GetPosition() : Observable<Position[]> {
        return this.http.get<Position[]>(this.apiBaseUrl + "positions");
    }

    GetCheckingAccount() : Observable<CheckingAccount[]> {
        return this.http.get<CheckingAccount[]>(this.apiBaseUrl + "checkingAccountAmount");
    }

    GetPatrimony() : Observable<Patrimony[]> {
        return this.http.get<Patrimony[]>(this.apiBaseUrl + "Consolidated");
    }
}