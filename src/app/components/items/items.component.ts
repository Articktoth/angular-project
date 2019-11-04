import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ProjectService]
})
export class ItemsComponent implements OnInit {
  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems (){
    this._projectService.getItems()
    .subscribe(res => {
      this._projectService.items = res as Project[];
      console.log(res);
    });
  }

}
