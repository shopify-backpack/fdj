import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly toast: ToastrService,
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: any
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: environment.baseUrl + req.url,
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });
    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (isPlatformBrowser(this.platformId)) {
          this.toast.error(error.message);
        }
        this.router.navigate([""])
        return throwError(() => new Error(error.message));
      })
    );
  }
}
