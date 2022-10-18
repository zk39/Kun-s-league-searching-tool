import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../globalConstants';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  search: string = 'Hide on bush';
  baseUrl = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
  riotAPIkey: string = GlobalConstants.riotAPI;
  riotAPI =this.baseUrl +this.search+"?api_key="+this.riotAPIkey;






  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any>(this.riotAPI).subscribe(
       (data) => console.log(data)
    )
  }
  onClick(str : string) {
    this.riotAPI = this.baseUrl +str+"?api_key="+this.riotAPIkey;
    this.http.get<any>(this.riotAPI).subscribe(
      (data) => console.log(data)
   )
  }
}
