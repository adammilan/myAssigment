import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from "../Movie";
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  closeResult: string;

  model: any = {
  }
  @Input() movie: Movie;

  constructor(private modalService: NgbModal, private data: DataService) { }

  ngOnInit() {
    this.model = {
      year: this.movie.Year,
      title: this.movie.Title,
      runtime: this.movie.Runtime,
      genere: this.movie.Genre,
      director: this.movie.Director,
      id: this.movie.Id
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {
        this.closeResult = `closed`;
      }, (reason) => {
        this.closeResult = `Dismissed `;
      });
  }
  onSubmit(e, modalPoup) {

    if (e.valid) {
      this.data.editMovie(e.form.value)
      modalPoup.close();
    }
  }

}
