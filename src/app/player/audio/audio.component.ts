import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Song} from '../../misc/karaoke.constant';

@Component({
	selector: 'app-audio',
	templateUrl: './audio.component.html',
	styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit, AfterViewInit {
	audioPlaying = false;

	// @Input() selectedSong!: Song;
	@Input() set selectedSong(song: Song) {
		if (song.path !== '') {
			this.initAudio(song);
			this.audio.play();
		}
	}

	private audio!: HTMLAudioElement;

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
	}

	initAudio(song: Song): void {
		this.audio = new Audio(song.path);
		this.audio.autoplay = false;
		this.audio.preload = 'auto';
	}

	play(): void {
		this.audioPlaying ? this.audio.pause() : this.audio.play();
		this.audioPlaying = !this.audioPlaying;
	}
}
