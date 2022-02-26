import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() public onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() public onDebounce : EventEmitter<string> = new EventEmitter();
  @Input()  public placeholder: string = '';
  
  public termino: string = '';
  public debounce: Subject<string> = new Subject();
  
  ngOnInit() {
    this.debounce
      .pipe( debounceTime(300) )
      .subscribe( valor => {
        this.onDebounce.emit( valor )
    })
  }
  
  public search() {
    this.onEnter.emit( this.termino );
  }

  public presionarTecla() {
    this.debounce.next( this.termino );
  }
}
