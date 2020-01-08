import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  label = 'Teste';
  formato = 'FORMATO';

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner
  ) {}

  scan() {

    //ToDO: use later
    const options = {
      format: 'CODE_39'
    };

    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log("Barcode data", barcodeData);
        this.label = barcodeData.text;
        this.formato = barcodeData.format;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
