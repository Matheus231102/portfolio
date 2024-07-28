import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact-notification-popup',
  standalone: true,
  imports: [],
  templateUrl: './contact-notification-popup.component.html',
  styleUrl: './contact-notification-popup.component.css',
})
export class ContactNotificationPopupComponent {
  @ViewChild("notification") notificationElement!: ElementRef;

  constructor(private renderer2: Renderer2) {}

  public notificationMessage: string = '';

  changeMessage(message: string): void {
    this.notificationMessage = message;
  }

  showNotification(){
    this.toggleVisibility()
    setTimeout(() => {
      this.toggleVisibility()
    }, 2000)
  }

  toggleVisibility() {
    let element = this.notificationElement.nativeElement

    if (element.classList.contains("hidden")) {
      this.renderer2.removeClass(element, "hidden")
    } else {
      this.renderer2.addClass(element, "hidden")
    }
  }

}
