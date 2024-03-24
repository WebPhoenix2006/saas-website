import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.scss']
})
export class SvgIconsComponent {
  @Input() name;
  constructor() {}

  ngOnInit(): void {}
}
