import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartComponent } from '../shared/start/start.component';
import { UnserVereinComponent } from '../shared/unser-verein/unser-verein.component';
import { AnmeldungComponent } from '../shared/anmeldung/anmeldung.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-pre-ecmc',
  standalone: true,
  imports: [CommonModule, StartComponent, AnmeldungComponent,UnserVereinComponent, FooterComponent],
  templateUrl: './pre-ecmc.component.html',
  styleUrl: './pre-ecmc.component.scss'
})
export class PreEcmcComponent {

}
