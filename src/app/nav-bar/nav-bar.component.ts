import { Component, OnInit } from '@angular/core';
import { MoviesService  } from '../services/movies.service';
import { CardContainerComponent } from '../card-container/card-container.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cards: [];
  selectedType: string;

  constructor(private moviesService: MoviesService, private user: UserService) { }

  ngOnInit() {
    this.selectedType = 'now_playing';
  }

  handleMovieType(type): any {
    this.selectedType = type;

    if (type === 'favorites') {
      this.user.getFavorites();
      return;
    }

    this.moviesService.getMovies(type)
      .subscribe(movies => {
        this.moviesService.currentMovies.next(movies.results);
      });
  }
}
