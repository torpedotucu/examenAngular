import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ServiceCubos{

    public token:string;
    constructor(private _http:HttpClient) {
        this.token="";
    }

    

    loadCubos():Observable<any>{
        let request="api/cubos";
        let url=environment.urlApiCubos+request;
        return this._http.get(url);
    }
    loadDetallesCubo(id:string):Observable<any>{
        let request="api/Cubos/"+id;
        let url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    iniciarSesion(loginModel:any):Observable<any>{
        let request="api/manage/login";
        let url=environment.urlApiCubos+request;
        let header=new HttpHeaders();
        header=header.set("Content-type", "application/json");
        let json=JSON.stringify(loginModel);
        return this._http.post(url,json,{headers:header});
    }
    loadMarcas():Observable<any>{
        let request="api/cubos/marcas";
        let url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    loadCubosMarca(marca:string):Observable<any>{
        let request='api/Cubos/CubosMarca/'+marca;
        let url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    loadComentarios(idCubo:string):Observable<any>{
        let request='api/comentarioscubo/getcomentarioscubo/'+idCubo;
        let url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    loadInfoUser():Observable<any>{
        let request="api/manage/perfilUsuario"
        let url=environment.urlApiCubos+request;
        let token=localStorage.getItem("token");

        let header={
            "Authorization": "bearer "+token
        }
        return this._http.get(url,{headers:header});
    }

    comprarCubo(id:number):Observable<any>{
        console.log(id);
        let request="api/Compra/InsertarPedido/"+id;
        let url=environment.urlApiCubos+request;
        let token=localStorage.getItem("token");
        console.log(token);
        let header={
            "Authorization": "bearer "+token
        }
        let json={

        }
        return this._http.post(url,json,{headers:header});
    }
    mostrarCompras():Observable<any>{
        let request="api/Compra/ComprasUsuario/";
        let url=environment.urlApiCubos+request;
        let token=localStorage.getItem("token");
        console.log(token);
        let header={
            "Authorization": "bearer "+token
        }
        return this._http.get(url,{headers:header});
    }

    
}