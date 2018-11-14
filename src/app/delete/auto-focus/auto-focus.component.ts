import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data.service';
import { Movie } from "src/app/Movie";

@Component({
  selector: 'app-auto-focus',
  templateUrl: './auto-focus.component.html'

})
export class AutoFocusComponent implements OnInit {

  constructor(public modal: NgbActiveModal, private data: DataService) { }

  movie: Movie;

  ngOnInit() {
  }

  deleteMovie() {
    this.data.deleteMovie(this.movie);
  }

}
