import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  value3 = 'Choose one'



  constructor(private modalService: NgbModal) { }

  SuccessOpen(successmodal: any) {
    this.modalService.open(successmodal, { centered: true });
  }

  SmallOpen(smallmodal: any) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }

  LargeOpen(largemodal: any) {
    this.modalService.open(largemodal, { size: 'lg' });
  }

  ExtraLargeOpen(extraLargeModal: any) {
    this.modalService.open(extraLargeModal, { size: 'xl' });
  }

  ScrollableContentOpen(largeContent: any) {
    this.modalService.open(largeContent, { scrollable: true });
  }

  FullScreenModalOpen(fullscreenmodal: any) {
    this.modalService.open(fullscreenmodal, { fullscreen: true });
  }


  InputModal(inputModal: any) {
    this.modalService.open(inputModal);
  }
  BasicModalOpen(basicmodal: any) {
    this.modalService.open(basicmodal);

  }
  ScrollableOpen(scrollablemodal: any) {
    this.modalService.open(scrollablemodal, { centered: true })
  }

  ngOnInit(): void {
  }

}
