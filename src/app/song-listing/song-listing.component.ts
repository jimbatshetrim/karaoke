import {Component} from '@angular/core';

interface Song {
	title: string;
	artist: string;
}

@Component({
	selector: 'app-song-listing',
	templateUrl: './song-listing.component.html',
	styleUrls: ['./song-listing.component.css']
})
export class SongListingComponent {
	songList: Song[] = [
		{title: 'Doja', artist: 'Central Cee'},
		{title: 'Relapse', artist: 'Eminem'},
		{title: 'Hello', artist: 'Adele'},
		{title: 'Vossi Bop', artist: 'Stormzy'},
		{title: 'Colt 45', artist: 'Afroman'},
		{title: 'Doja', artist: 'Central Cee'},
		{title: 'Relapse', artist: 'Eminem'},
		{title: 'Hello', artist: 'Adele'},
		{title: 'Vossi Bop', artist: 'Stormzy'},

		{title: 'Doja', artist: 'Central Cee'},
		{title: 'Relapse', artist: 'Eminem'},
		{title: 'Hello', artist: 'Adele'},
		{title: 'Vossi Bop', artist: 'Stormzy dsfjklsdajflsdajfldsaj'},
	];

}
