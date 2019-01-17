import { Injectable } from '@angular/core';
declare let alertify: any; // Don't import it because already add it in angular.json
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  // okCallBack is function | tell what to do (any) if user say ok
  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
      // e: represents the User clicking the okay button - Click event
      if (e) {
        okCallback();
      } else {} // Don't need do anything if Use cancel
    });
  }
  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
  message(message: string) {
    alertify.message(message);
  }

}
