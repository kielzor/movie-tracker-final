import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})

export class CardContainerComponent implements OnInit {
  cards = [];

  constructor(private moviesService: MoviesService, private user: UserService) { }

  ngOnInit() {
    this.moviesService.getMovies('now_playing')
      .subscribe(movies => {
        movies.results.map(movie => movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`);
          this.moviesService.currentMovies.next(movies.results);
        }
      );

    this.moviesService.getCurrentMovies.subscribe(movie => {
      this.cards = movie;
    });
  }

  handleClick(card) {
    this.user.getFavorites()
    .subscribe(movies => {
      const match = movies.data.find(movie => movie.id === card.id);

      if (match) {
        this.user.deleteFavorite(card);
      } else {
        this.user.addFavorite(card);
      }
    });
  }
}
