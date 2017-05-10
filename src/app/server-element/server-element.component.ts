import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }
 // Component Lifecycle


  ngOnChanges(changes: SimpleChanges) { // Called after a bound input property changes. Only hook that recieves an argument.
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() { // Called once the component is initialized
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() { // Called during every change detection run or event fired
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {  // Called after content (ng-content) has been projected into view
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() { // Called every time the projected content has been checked
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() { // Called after the conponent's view (and child views) has been initialized
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() { // Called everytime the view (and child views) have been checked
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() { // Called once the component is about to be destroyed
    console.log('ngOnDestroy called!');
  }

}
