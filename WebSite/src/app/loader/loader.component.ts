import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  template: '<ngx-loading [show]="loading | async"></ngx-loading>',
})
export class LoaderComponent implements OnInit {

  constructor(private load :LoaderService) { }
  
  public loading : Subject<boolean> = this.load.isLoading

  ngOnInit(): void {}
}
