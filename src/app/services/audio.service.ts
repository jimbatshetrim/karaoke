import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Song} from '../misc/karaoke.constant';

@Injectable({
	providedIn: 'root'
})
export class AudioService {
	private _currentSong = new BehaviorSubject<Song>({
		artist: '',
		path: '',
		title: ''
	});
	private _currentSong$ = this._currentSong.asObservable();

	constructor() {
	}

	getCurrentSong = (): Observable<Song> => this._currentSong$;

	setCurrentSong = (song: Song): void => this._currentSong.next(song);
}
