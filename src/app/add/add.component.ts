import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Movie } from "../Movie";
import { CapitalizeFirstPipePipe } from '../capitalize-first-pipe.pipe';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  closeResult: string;
  model: any = {}

  constructor(private modalService: NgbModal, private data: DataService, private capitalize: CapitalizeFirstPipePipe) { }

  ngOnInit() {
    console.log('add component called.')
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
      .then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }


  onSubmit(e) {
    let newMovie: Movie = {
      Id: this.data.newId(),
      Title: this.capitalize.transform(e.form.value.title),
      Year: e.form.value.dateOfBirth,
      Runtime: e.form.value.runtime,
      Genre: e.form.value.genere,
      Director: e.form.value.director,
      Poster: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
    }
    console.log('added new movie with id:', newMovie.Id);
    this.data.addMovie(newMovie);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
