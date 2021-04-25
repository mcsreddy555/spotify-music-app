import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albumId:any;
  public album:any;
  public tracks:any;
  constructor(private activatedRoute:ActivatedRoute,
              private service:SpotifyService,
              private router:Router) { }

  ngOnInit() {

    // get album ib from the broswer url
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      this.albumId=paramMap.get('id');
    })

    // get an album from the service
    this.service.getAlbum(this.albumId).subscribe((data)=>{
      this.album=data;
    })

    // get album tracks

    this.service.getAllTracks(this.albumId).subscribe((data)=>{
      this.tracks=data.items
    })


    

  }
  backToArtist(){
    this.router.navigate([`/artists/${this.album.artists[0].id}`])
  }

}
