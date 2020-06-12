import { Component, OnInit } from '@angular/core';
import { KnowledgeServiceService } from '../sercices/knowledge-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  knowledges=[];

  constructor(
    private knowlegService:KnowledgeServiceService
  ) { }

  ngOnInit(): void {
    this.knowlegService.getknowledges().then(
      (data:any)=>{
        console.log(data);
        this.knowledges=data;

      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  }

  getSoldvalue(index){

    if(this.knowledges[index].sold){
      return 'green';
    }else{
      return 'red'  ;
    }


  }



}
