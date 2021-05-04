import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonstageBehaviorsubjectService {
  private dataSource = new BehaviorSubject<string>('init');

  currentdata = this.dataSource.asObservable();

  updatedData(data: string){
    this.dataSource.next(data);
  }
}
