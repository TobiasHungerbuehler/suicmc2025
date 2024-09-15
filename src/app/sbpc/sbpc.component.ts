import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartComponent } from '../shared/start/start.component';
import { UnserVereinComponent } from '../shared/unser-verein/unser-verein.component';
import { AnmeldungComponent } from '../shared/anmeldung/anmeldung.component';

@Component({
  selector: 'app-sbpc',
  standalone: true,
  imports: [CommonModule, StartComponent, AnmeldungComponent,UnserVereinComponent],
  templateUrl: './sbpc.component.html',
  styleUrl: './sbpc.component.scss'
})
export class SbpcComponent {

}
