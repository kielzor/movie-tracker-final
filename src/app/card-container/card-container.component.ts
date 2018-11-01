import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})

export class CardContainerComponent implements OnInit {
  cards = [];
  faves = [];
  selectedType: string;

  constructor(private moviesService: MoviesService, private user: UserService) { }

  ngOnInit() {
    this.moviesService.getCurrentMovies.subscribe(movie => {
      this.cards = movie;
    });

    this.user.getFavoriteArray.subscribe(faves => {
      this.faves = faves;
    });

    this.user.getSelectedType.subscribe(type => {
      this.selectedType = type;
    });

    this.updateFavorites();

    this.updateMovies('now_playing');
  }

  handleClick(card) {
    const match = this.faves.find(movie => movie.title === card.title);

    if (match) {
      this.user.deleteFavorite(match.movie_id).subscribe(() => {
        this.updateFavorites();
        this.updateMovies(this.selectedType);
      });
    } else {
      this.user.addFavorite(card).subscribe(() => {
        this.updateFavorites();
      });
    }
  }

  handleFaves(card) {
    let match;

    if (this.faves) {
      match = this.faves.filter(movie => movie.title === card.title);
    }

    if (match && match[0]) {
      return 'favorited';
    }
  }

  updateFavorites() {
    this.user.getFavorites().subscribe(res => {
      this.user.favorites.next(res['data']);
    });
  }

  updateMovies(type) {
    if (type === 'favorites') {
      this.user.getFavorites()
        .subscribe(movies => {
          this.user.selectedType.next(type);
          this.moviesService.currentMovies.next(movies.data);
        });
      return;
    }

    this.moviesService.getMovies(type)
      .subscribe(movies => {
        movies.results.map(movie => movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`);
        this.moviesService.currentMovies.next(movies.results);
      }
    );
  }
}
