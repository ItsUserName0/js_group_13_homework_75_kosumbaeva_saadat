import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesService } from './services/messages.service';
import { Data } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('f') form!: NgForm;

  constructor(private messagesService: MessagesService) {
  }

  encodeMessage() {
    if (this.form.value.decoded === '') {
      return;
    }
    const data = new Data(this.form.value.password, this.form.value.decoded);
    this.messagesService.encodeMessage(data).subscribe(result => {
      this.form.controls['encoded'].setValue(result.encoded);
    });
  }

  decodeMessage() {
    if (this.form.value.encoded === '') {
      return;
    }
    const data = new Data(this.form.value.password, this.form.value.encoded);
    this.messagesService.decodeMessage(data).subscribe(result => {
      this.form.controls['decoded'].setValue(result.decoded);
    });
  }
}
