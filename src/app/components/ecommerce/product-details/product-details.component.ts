import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, VERSION, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/shared/services/e-commerce/shop.service';
import { ProductdetailsService } from './productdetails.service';
import { Store } from '@ngrx/store';
import { addShopData, getShopData } from 'src/app/shared/ngrx/e-commerce/shop.action';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,

} from 'swiper';


interface Image {
  modal: number | undefined;
  src: string;
  title?: string;
  alt?: string;
}
interface item{
  photo:string;
  oldPrice:string;
  newPrice:string;
  id:number,
  name:string
}
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,

]);


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],})

  export class ProductDetailsComponent implements OnInit {
thumbsSwiper: any;
    setThumbsSwiper(swiper: any) {
      this.thumbsSwiper = swiper;
    }

    breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 50 },
    };


    log(log: string) {
      // console.log(string);
    }

    breakPointsToggle!: boolean;
    breakpointChange() {
      this.breakPointsToggle = !this.breakPointsToggle;
      this.breakpoints = {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
      };
    }

    slidesEx = ['first', 'second'];

    onSlideChange(swiper: any) {
      if (swiper.isEnd) {
        // all swiper events are run outside of ngzone, so use ngzone.run or detectChanges to update the view.
        this.ngZone.run(() => {
          this.slidesEx = [...this.slidesEx, `added ${this.slidesEx.length - 1}`];
        });
        console.log(this.slidesEx);
      }
    }


  store: any;
  imageData: item[]=[
    {
    photo:"./assets/images/products/2.png",
    oldPrice:"$87.00",
    newPrice:"$25.00",
    id:2,
    name:"Smart Watch"

    },
    {
      photo:"./assets/images/products/3.png",
      oldPrice:"$59.00",
      newPrice:"$34.00",
      id:3,
      name:"Soft Toy"
   },
  {
    photo:"./assets/images/products/4.png",
    oldPrice:"$54.00",
    newPrice:"$39.00",
    id:4,
    name:"Smart watch"
    },
    {
       photo:"./assets/images/products/5.png",
       oldPrice:"$37.00",
       newPrice:"$25.00",
       id:5,
       name:"Girls Frock"
      },
      {
       photo:"./assets/images/products/6.png",
       oldPrice:"$64.00",
       newPrice:"$25.00",
       id:6,
       name:"Gold Ring"
        },
      {
      photo:"./assets/images/products/7.png",
      oldPrice:"$35.00",
      newPrice:"$19.00",
      id:7,
      name:"Tee Shirt"
      },
      {
         photo:"./assets/images/products/8.png",
        oldPrice:"$44.00",
        newPrice:"$35.00",
        id:8,
        name:"Sandals"
       }
  ];



  constructor(private shopService: ShopService,private route: ActivatedRoute, private productService: ProductdetailsService,config: NgbCarouselConfig,private cd: ChangeDetectorRef, private ngZone: NgZone) {


  config.interval = 2000;
  config.keyboard = true;
  config.pauseOnHover = true;
  }


  public data:any
  public posts:any


  ngOnInit(): void {


    // console.log(this.route.snapshot.params['id'])
    // console.log(this.shopService.getPosta())
    if(this.route.snapshot.params['id']){
      this.productService.emitProductId(location.pathname);
    }
    if (this.route.snapshot.params['id'] == undefined){
      this.data =[ {
        id: '2',
        image: "./assets/images/products/1.png",
        name: 'Trending Half Hands Tshirt (Best Fabric Premium made T-shirt for Casual wear.)',
        offer_price: 299 ,
        price: 599,
      }]
    }
    else{
      this.data = this.shopService.getPosta().filter(post => post.id === this.route.snapshot.params['id']);
    }

    // console.log("this id=s the Data ", this.data)
  }

input = 1

  minus(){
    this.input++
  }

  plus = ()=>{
    if (this.input > 0){
      this.input--
    }
  }


  click = (id:any)=>{
    var data = this.data.filter((x: { id: any; }) =>{
      return x.id != id
    })
    this.data= data
  }
  AddToCart(id:any){
    const variableOne = this.data.filter((dataInArray: { id: any; }) => dataInArray.id == id);
    this.store.dispatch(addShopData({data:variableOne}))
  }
  name = 'Angular ' + VERSION.major;

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);






}






































