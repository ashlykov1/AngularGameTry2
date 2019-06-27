import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyClass } from '../lib/library';

@Injectable()
export class MyclassdataService {
    client: HttpClient;

  constructor(http: HttpClient) {
    this.client = http;
  }

  public getData() {
    return this.client.get<MyClass[]>("https://localhost:44346/api/MyClasses");
  }

  public save(data : MyClass[]) {
    let dataToSubmit = { toSave: data, toDelete : [] };
    return this.client.post<MyClass[]>("https://localhost:44346/api/MyClasses", dataToSubmit);
  }

}
