import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

/**
 * 用来充当事件总线的Service
 */
@Injectable()
export class EventBusService {
  public eventBus:Subject<string> = new Subject<string>();

  constructor() { }

}
