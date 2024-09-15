import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartComponent } from '../shared/start/start.component';

@Component({
  selector: 'app-sbpc',
  standalone: true,
  imports: [CommonModule, StartComponent],
  templateUrl: './sbpc.component.html',
  styleUrl: './sbpc.component.scss'
})
export class SbpcComponent {

}
