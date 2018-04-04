import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotos } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: [ './rover-form.component.css' ],
  providers: [ MarsRoverApiPhotos ]
})

export class RoverFormComponent {
  photos: any[]=null;
  constructor(private marsRoverPhotos: MarsRoverApiPhotos) { }
  getRoverImages(date: string, camera: string) {
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
        this.photos = response.json();
    });
  }
}
