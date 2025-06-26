import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private status = new BehaviorSubject<boolean>(true);
  public status$ = this.status.asObservable();

  constructor() {
    this.initNetworkMonitoring();
   }
 
   async initNetworkMonitoring() {
    const status = await Network.getStatus();
    this.status.next(status.connected);

    Network.addListener('networkStatusChange', (newStatus) => {
      this.status.next(newStatus.connected);
    });
  }

  isOnline(): boolean {
    return this.status.value;
  } 

}
