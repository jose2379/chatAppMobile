import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";


@Injectable()
export class UserService{

  constructor(private http: Http){}

  getUser(): Observable<Object>{
    return this.http.get('https://randomuser.me/api/?results=10')
      .map(this.listUser);
  }

  listUser(res: Response){
    let respuesta = res.json();
    console.log('listUser', respuesta);
    return respuesta;
  }
}
