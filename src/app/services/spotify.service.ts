import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  private AutherizationKey=`Bearer BQDUmgIcvEPWaL4ppFf0wK3uIMeq1mlEMDE6PvcTbm5AAaVuEtwGxxTmX768xLUGRbBgpvaB1A8DhxnexSIX9OD0sfvK0sq2P1YsPxPNyPp0R70L2DAWzYNGOAR_GfL_nv_ezFAo4MQmqSGoOH5L_tlOuw4en14`;

  private httpOptions={
    headers:new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type':'application/json',
      'Authorization':this.AutherizationKey
    })
  }

  constructor(private httpclient:HttpClient) { }


  // get search all artists
  public getAllAtrists(searchQuery):Observable<any>{
    let url=`https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`
    return this.httpclient.get<any>(url, this.httpOptions)
  }

    // get single artist
    public getAtrist(artistId):Observable<any>{
      let Artisturl=`https://api.spotify.com/v1/artists/${artistId}`
      return this.httpclient.get<any>(Artisturl, this.httpOptions)
    }

      // get all albums
  public getAllAlbums(artistId):Observable<any>{
    let Albumurl=`https://api.spotify.com/v1/artists/${artistId}/albums`
    return this.httpclient.get<any>(Albumurl, this.httpOptions)
  }

    // get  single album 
    public getAlbum(albumId):Observable<any>{
      let Alurl=`https://api.spotify.com/v1/albums/${albumId}`
      return this.httpclient.get<any>(Alurl, this.httpOptions)
    }

        // get album tracks
    public getAllTracks(albumId):Observable<any>{
      let Alturl=`https://api.spotify.com/v1/albums/${albumId}/tracks`
      return this.httpclient.get<any>(Alturl, this.httpOptions)
    }
}
