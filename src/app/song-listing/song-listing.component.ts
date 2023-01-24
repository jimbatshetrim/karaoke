import {Component, EventEmitter, Output} from '@angular/core';
import {Song} from '../misc/karaoke.constant';

@Component({
	selector: 'app-song-listing',
	templateUrl: './song-listing.component.html',
	styleUrls: ['./song-listing.component.css']
})
export class SongListingComponent {
	@Output() songSelected: EventEmitter<Song> = new EventEmitter<Song>();

	songList: Song[] = [
		{title: 'Doja', artist: 'Central Cee', path: '/assets/songs/doja.mp3'},
		{title: 'Relapse', artist: 'Eminem', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Hello', artist: 'Adele', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Vossi Bop', artist: 'Stormzy', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Colt 45', artist: 'Afroman', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Doja', artist: 'Central Cee', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Relapse', artist: 'Eminem', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Hello', artist: 'Adele', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Vossi Bop', artist: 'Stormzy', path: '/assets/songs/never-gonna-give-you-up.mp3'},

		{title: 'Doja', artist: 'Central Cee', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Relapse', artist: 'Eminem', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Hello', artist: 'Adele', path: '/assets/songs/never-gonna-give-you-up.mp3'},
		{title: 'Vossi Bop', artist: 'Stormzy', path: '/assets/songs/never-gonna-give-you-up.mp3'},
	];

}
