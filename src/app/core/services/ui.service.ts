import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Network } from '@capacitor/network';
import { isPlatform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private currentStatus: boolean | null = null;
  private networkStatus = new BehaviorSubject<boolean>(true);
  public isOnline$ = this.networkStatus.asObservable();

  constructor() {
    this.initNetworkMonitoring();
   }
 
  private async initNetworkMonitoring() {
    const status = await Network.getStatus();
    this.currentStatus = status.connected;
    this.networkStatus.next(status.connected);

    Network.addListener('networkStatusChange', (status) => {
      if (this.currentStatus !== status.connected) {
        this.currentStatus = status.connected;
        this.networkStatus.next(status.connected);
      }
    });

  }

}
