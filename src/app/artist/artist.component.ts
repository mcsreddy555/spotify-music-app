import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public artistId:string;

  public artist:any;
  public albums:any;
  constructor(private activatedRoute:ActivatedRoute,
              private service:SpotifyService,
              private router:Router) { }

  ngOnInit() {
    // get artist id from broswer url
    this.activatedRoute.paramMap.subscribe((paramMpa:ParamMap)=>{
      this.artistId=paramMpa.get('id');
    })

    // get artist from service
    // this.service.getAtrist(this.artistId).subscribe((data)=>{
    //   this.artist=data;
    // })
    this.singleArtist()
    this.albumsData()
  }

  // get artist from service
  singleArtist(){
    this.service.getAtrist(this.artistId).subscribe((data)=>{
      this.artist=data
    })
  }

  // get albums
  albumsData(){
    this.service.getAllAlbums(this.artistId).subscribe((data)=>{
      this.albums=data.items
    })
  }
}
