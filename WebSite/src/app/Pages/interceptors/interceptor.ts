import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaderResponse, HttpEvent, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http';

import { Observable, finalize} from 'rxjs';

import { AuthService } from 'src/app/resources/service/auth.service';
import { LoaderService } from 'src/app/resources/loader/loader.service';


/** Pass untouched request through to the next request handler. */
@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor( private auth: AuthService, private loaderService: LoaderService){}
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpResponse<any> | HttpHeaderResponse | HttpProgressEvent |  HttpEvent<any>| HttpUserEvent<any>>{

   const get = this.auth.Token();
   let request: HttpRequest<any> = req;
   
   if(get){
      req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${get}`)
     })
   }
  this.loaderService.show();
  return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
  }

}
/* conflito com o toastrs
.pipe(
  catchError(this.handleError));/

private handleError(error: HttpErrorResponse) {
  
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}*/