import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IngressClient {
  constructor(private http: HttpClient) {
  }

  deploy(appId: number, cluster: string, resourceId: number, tplId: number, template: any): Observable<any> {
    return this.http
      .post(`/api/v1/kubernetes/apps/${appId}/ingresses/${resourceId}/tpls/${tplId}/clusters/${cluster}`, template)
      .catch(error => Observable.throw(error));
  }

  get(appId: number, cluster: string, namespace: string, name: string): Observable<any> {
    return this.http
      .get(`/api/v1/kubernetes/apps/${appId}/ingresses/${name}/namespaces/${namespace}/clusters/${cluster}`)
      .catch(error => Observable.throw(error));
  }


  deleteByName(appId: number, cluster: string, namespace: string, name: string): Observable<any> {
    return this.http
      .delete(`/api/v1/kubernetes/apps/${appId}/ingresses/${name}/namespaces/${namespace}/clusters/${cluster}`)
      .catch(error => Observable.throw(error));
  }

}
