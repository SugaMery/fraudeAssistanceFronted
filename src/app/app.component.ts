import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FraudeAssistance';

  ngOnInit() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/responsive.css';
    document.head.appendChild(link);
  }
}
