import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Song} from '../../misc/karaoke.constant';

@Component({
	selector: 'app-audio',
	templateUrl: './audio.component.html',
	styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit, AfterViewInit {
	audioPlaying = false;

	@Input() selectedSong!: Song;
	private audio!: HTMLAudioElement;

	ngOnInit(): void {
		if (this.selectedSong) {
			this.audio = this.initAudio();
		}
	}

	ngAfterViewInit(): void {
		// this.audio.play();
	}

	initAudio(): HTMLAudioElement {
		const audio = new Audio(this.selectedSong.path);
		audio.autoplay = false;
		audio.preload = 'auto';
		return audio;
	}

	play(): void {
		this.audioPlaying ? this.audio.pause() : this.audio.play();
		this.audioPlaying = !this.audioPlaying;
	}
}
