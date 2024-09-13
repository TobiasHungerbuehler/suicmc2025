import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartComponent } from '../shared/start/start.component';

@Component({
  selector: 'app-pre-ecmc',
  standalone: true,
  imports: [CommonModule, StartComponent],
  templateUrl: './pre-ecmc.component.html',
  styleUrl: './pre-ecmc.component.scss'
})
export class PreEcmcComponent {

}
