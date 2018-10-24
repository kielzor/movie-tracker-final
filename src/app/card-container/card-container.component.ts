import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})

export class CardContainerComponent implements OnInit {
  cards: Array<{}>;

  constructor(private nowPlaying: MoviesService) { }

  ngOnInit() {
    this.nowPlaying.getMovies('now_playing').subscribe(movie => {
      this.cards = movie;
      console.log(this.cards);
    });
  }

}
