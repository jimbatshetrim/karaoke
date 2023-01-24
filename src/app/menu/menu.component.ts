import {Component} from '@angular/core';
import {Song} from '../misc/karaoke.constant';
import {Observable, tap} from 'rxjs';
import {AudioService} from '../services/audio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  songSelected$: Observable<Song> = this.audioService.getCurrentSong();

  constructor(private audioService: AudioService) {
  }

}
