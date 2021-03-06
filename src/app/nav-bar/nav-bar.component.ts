import { Component, OnInit } from '@angular/core';
import { MoviesService  } from '../services/movies.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  selectedType: string;

  constructor(private moviesService: MoviesService, private user: UserService, private router: Router) { }

  ngOnInit() {
    this.user.getSelectedType.subscribe(type => {
      this.selectedType = type;
    });
  }

  handleMovieType(type): any {
    if (type === 'favorites') {
      this.user.getFavorites()
        .subscribe(movies => {
          this.user.selectedType.next(type);
          this.moviesService.currentMovies.next(movies.data);
        });
      return;
    }

    this.user.selectedType.next(type);

    this.moviesService.getMovies(type)
      .subscribe(movies => {
        movies.results.map(movie => movie.poster_path = `https://image.tmdb.org/t/p/w200${movie.poster_path}`);
        this.moviesService.currentMovies.next(movies.results);
      });
  }

  handleLogout() {
    this.user.currentUser.next({});
    this.router.navigate(['/login']);
  }
}
