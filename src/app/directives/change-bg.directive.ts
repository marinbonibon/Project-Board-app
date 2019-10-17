import {Directive, ElementRef, OnChanges, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective implements OnChanges {

  @Input('appChangeBg') highlightedObj: object;

  constructor(private elementRef: ElementRef) {
  }

  public ngOnChanges(): void {
    this.highlight(this.highlightedObj);
  }

  private highlight(highlightedObj: any) {
    const currentDate = new Date().getTime();
    const dueDate = new Date(highlightedObj.date).getTime();
    const MILLISECONDS_PER_DAY = 86400000;
    const daysToEnd = (dueDate - currentDate) / MILLISECONDS_PER_DAY;

    if (highlightedObj.isDone) {
      return;
    } else if (daysToEnd < 3) {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    } else if (daysToEnd < 7) {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
  }
}
