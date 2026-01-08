import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  rutaLogoDev = "assets/images/logoDev.svg";

  colapsarTodo(): void {

  }

  
  expandirTodo(): void {
    
  }

  
  descargarComoPDF(): void {
    
  }

}
