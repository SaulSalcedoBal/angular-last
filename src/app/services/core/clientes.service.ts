import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'http://http://apinetcore.midominio.com/api/user';
const endPointWishlist: string = 'http://apinetcore.midominio.com/api/product/wishlist/';
const endPointCode: string = 'http://apinetcore.midominio.com/api/code/';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  id;
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(endPoint);
  }

  public getWishListByUserId(id: string) {
    // this.id = parseInt(id);
    return this.http.get(`${endPointWishlist}/user/${id}`);
  }

  public getCodesByUserId(id: string) {
    // this.id = parseInt(id);
    return this.http.get(`${endPointCode}/cliente/${id}`);
  }

  public registrarUsuario(usuario: any) {
    return this.http.post(`${endPoint}`,
      usuario, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
