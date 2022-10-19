import { Component, OnInit } from '@angular/core';
import { Pays } from '../pays';
import { PaysService } from './../pays.service';

@Component({
  selector: 'app-all-pays',
  templateUrl: './all-pays.component.html',
  styleUrls: ['./all-pays.component.css']
})
export class AllPaysComponent implements OnInit {

  dtOptions: DataTables.Settings={};

  constructor(private paysService:PaysService) { }

  servicePays:Pays[]=[];

  ngOnInit(): void {
    this.dtOptions={
      autoWidth:true,
      //serverSide:true,
      //processing:true,
      language:{
        url:"/assets/fr-FR.json"
      },
      ajax:{
        method:"GET",
        url:"http://localhost:3000/pays",
      },
      columns:[
      {
        title:"Code",
        data:"code"
      },
      {
        title:"Continent",
        data:"name"
      }
    ]
    }
    this.getAll()
  }

  getAll(){
    return this.paysService.get().subscribe((data)=>{
      this.servicePays=data;
    })
  }

}
