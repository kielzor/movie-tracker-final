import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { CardContainerComponent } from '../card-container/card-container.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cards: Array<{}>;

  constructor(private displayedMovies: MoviesService) { }

  ngOnInit() {
  }

  handleMovieType(type) {
    this.displayedMovies.getMovies(type);
  }
}
