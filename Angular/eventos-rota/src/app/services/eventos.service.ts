import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/interface.evento';


import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

const localUrl = 'assets/data/eventos.json';

@Injectable()
export class EventosService {

    //acesso ao HTTP
    public constructor(private http: HttpClient) { }

    public getEventosWS(): Observable<HttpResponse<IEvento[]>> {
        return this.http.get<IEvento[]>(
            localUrl, { observe: 'response'});
    }

    public getEventos(): IEvento[] {
        return [
            { descricao: 'Avaliação Angularsss', data: '23/10/2018', preco: 0 },
            { descricao: 'Formatura', data: '02/05/2020', preco: 140 },
            { descricao: 'Torneio de Tenis', data: '10/07/2018', preco: 210 },
            { descricao: 'Congresso de TI', data: '16/01/2019', preco: 400 }
        ];
    }
}