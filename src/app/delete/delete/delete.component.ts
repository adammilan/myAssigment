import { Component, OnInit, Input } from '@angular/core';
import { AutoFocusComponent } from '../auto-focus/auto-focus.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _modalService: NgbModal) { }

  @Input() movietoDel;

  ngOnInit() {
  }

  open(name: string) {
    const modelRef = this._modalService.open(AutoFocusComponent);
    modelRef.componentInstance.movie = this.movietoDel;

  }


}