import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SpotifyService) { }
  public searchQuery:string
  public  allArtist
  getAllArt(){
    this.service.getAllAtrists(this.searchQuery).subscribe((data)=>{
      this.allArtist=data.artists.items;
    }) 
  }
  ngOnInit() {
    // this.getAllArt()
  }

}
