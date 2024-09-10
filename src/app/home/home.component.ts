// import { Component } from '@angular/core';
// import { GoogleMapsModule } from '@angular/google-maps';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [GoogleMapsModule],
//   templateUrl: './home.component.html',
//   // styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   constructor() {}
//   center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 }; // Default center (New York)
//   zoom = 12; // Default zoom level
// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { title } from 'process';
import { Interface } from 'readline';
interface marker {
  position: google.maps.LatLngLiteral;

  label: any;
  title: any;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({
      label: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),

      log: new FormControl('', [Validators.required]),


    });
    this.loginForm

  }


  addNewMarker() {
    const newMarker: marker = {
      position: {
        lat: parseFloat(this.loginForm.get('lat')?.value),
        lng: parseFloat(this.loginForm.get('log')?.value)
      },
      label: this.loginForm.get('label')?.value,
      title: this.loginForm.get('label')?.value
    };
    this.defaultListOptions.push(newMarker);
    this.loginForm.reset();
    console.log(this.defaultListOptions);
  }
  updatePosition($event: DragEvent) {
    throw new Error('Method not implemented.');
  }
  defaultListOptions: any[] = [{
    position: { lat: 40.730610, lng: -73.935242 },
    title: 'test1',
    label: 'testLabel',

  },
  {
    position: { lat: 41.730610, lng: -72.935242 },
    title: 'test2',
    label: 'testLabel2',
  }
  ]


  public display: any;
  center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242 }; // Default center (New York)
  zoom = 12; // Default zoom level
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) this.display = event.latLng.toJSON();
  }

}

