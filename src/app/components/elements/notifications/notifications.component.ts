import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  
  constructor(private toastr: ToastrService) {
	}

  ngOnInit(): void {
  }


  showSuccess() {
    this.toastr.success('Details Successfully Uploaded', 'Success', {
      timeOut: 3000,
      positionClass: 'toast-top-center',
    });
  }
 
  showError() {
    this.toastr.error('Oops! An Error Occurred ', 'Error', {
      timeOut: 3000,
      positionClass: 'toast-top-left',
    });
  }
  showWarning() {
    this.toastr.warning('Something Went Wrong', 'Warning', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });
  }




  notificationStyle1=true;
  notificationStyle2=true;
  notificationStyle3=true;
  notificationStyle4=true;
}

