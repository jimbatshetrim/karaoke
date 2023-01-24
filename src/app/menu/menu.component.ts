import {Component} from '@angular/core';
import {Song} from '../misc/karaoke.constant';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  songSelected!: Song;
}
