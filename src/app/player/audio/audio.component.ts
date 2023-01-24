import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
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
		if (this.audio) {
			this.audio.srcObject = null;
		}
		this.initAudio(song);
		this.audio.play();
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
