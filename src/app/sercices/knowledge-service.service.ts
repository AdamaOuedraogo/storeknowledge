import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})

export class KnowledgeServiceService {

  knowledges =[
    {
      title:'Evangelisation de Noel',
      category:'Note',
      sold:true
    },
        {
      title:'How to describe banans',
      category:'Topic',
      sold:false
    },
    {
      title:'Messages Andre',
      category:'Notes',
      sold:true
    }

  ]

  constructor() { }


  getknowledges(){
    return new Promise(
      (resolve,reject)=>{
        if(this.knowledges && this.knowledges.length>0){
          resolve(this.knowledges);
        }else{
          const error = new Error('knoledge doest not exist or is empty');
          reject(error);
        }
      }
    )
  }



}
