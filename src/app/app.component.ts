import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
// import { CreteModalComponent } from './shared/crete-modal/crete-modal.component';
// import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'masTi-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'masTi-finance';
}
