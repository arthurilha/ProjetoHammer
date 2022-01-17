import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpEvent, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/resources/service/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()

export class Interceptor implements HttpInterceptor {

  

  constructor( private auth: AuthService ){}
 
  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpResponse<any> | HttpHeaderResponse | HttpProgressEvent |  HttpEvent<any>| HttpUserEvent<any>> {
   const token = this.auth.Token();
   let request: HttpRequest<any> = req;

   if(token){
     req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
     })
   }
  return next.handle(req)  
  }
}