import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})

export class CardContainerComponent implements OnInit {
  cards: Array<{}>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies('now_playing');
    this.moviesService.getCurrentMovies.subscribe(movie => {
      this.cards = movie;
    });
  }

}
