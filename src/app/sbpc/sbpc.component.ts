import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartComponent } from '../shared/start/start.component';
import { UnserVereinComponent } from '../shared/unser-verein/unser-verein.component';
import { AnmeldungComponent } from '../shared/anmeldung/anmeldung.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { WasIstComponent } from '../shared/was-ist/was-ist.component';
import { AwarenessComponent } from '../shared/awareness/awareness.component';
import { SupportUsComponent } from '../shared/support-us/support-us.component';

@Component({
  selector: 'app-sbpc',
  standalone: true,
  imports: [CommonModule, StartComponent, AnmeldungComponent,UnserVereinComponent, FooterComponent, WasIstComponent, AwarenessComponent, SupportUsComponent],
  templateUrl: './sbpc.component.html',
  styleUrl: './sbpc.component.scss'
})
export class SbpcComponent {

}
