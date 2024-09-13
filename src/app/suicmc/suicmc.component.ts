import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartComponent } from '../shared/start/start.component';

@Component({
  selector: 'app-suicmc',
  standalone: true,
  imports: [CommonModule, StartComponent],
  templateUrl: './suicmc.component.html',
  styleUrl: './suicmc.component.scss'
})
export class SuicmcComponent {

}
