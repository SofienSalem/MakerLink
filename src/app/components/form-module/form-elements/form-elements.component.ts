import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment';
import { ToastrService } from 'ngx-toastr';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
// import { IDropdownSettings, IDropdownSettings } from 'ng-multiselect-dropdown';
interface DropdownItem {
  item_id: number;
  item_text: string;
}


@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
})

  export class FormElementsComponent  {
  
    displayMonths = 2;
    navigation = 'select';
    showWeekNumbers = false;
    outsideDays = 'visible';
  angForm!: FormGroup;
 [x: string]: any;
model3 = {
  email: '',
  password: '',
};
required: any;
minlength: any;
 loginForm: FormGroup;
firstName = new FormControl("", Validators.required);
userData = {
  email: '',
  password:'',};
  submitted = false;

onSubmit(form: { reset: () => void; },formData: any,$scope: any) {
alert('Form submitted successfully');
    form.reset();
    console.log("model-based form submitted");
    console.log($scope);
   }


   dropdownList :DropdownItem[]= [];
   selectedItems :DropdownItem[] = [];
   dropdownSettings={}
  model2!: NgbDateStruct;
  model1!: NgbDateStruct;
  model4!: NgbDateStruct;


  itemList = [];

  settings = {};

   MultiseletDropDown:any = [];
  MultiseletDropDown1:any = [];
  MultiseletDropDown2:any = [];
  MultiseletDropDown3:any = [];
  MultiseletDropDown4:any = [];
  MultiseletDropDown5:any = [];
  MultiseletDropDown6:any = [];
  MultiseletDropDown7:any = [];
  MultiseletDropDown8:any = [];
	multipleItems:any = [];
	multipleSettings = {};
  DisableItem = [];
	DisableSettings = {};
  groupDropdown:any = [];
  groupDropdown1:any = [];
  groupDropdown2:any = [];
	groupItems = [];
  groupItems1 = [];
	groupSettings = {};
  groupItems2 = [];
	SingleItems = [];
	SingleSettings = {};
  HideSelectAll = []
  HideSelectAllSettings = {}
  MutipleSelectItem = []
  MutipleSelectItem1 = []
  MutipleSelectItem2 = []
  MutipleSelectItem3 = []
  MutipleSelectItem4 = []
 GroupOption = []
  SelectFilter1 = []
  SelectFilter2 = []
  SelectFilterSetting = {}
  SelectFilter = []
  SelectFilterSettings = {}
selected!: {startDate:  Moment, endDate: Moment};
public customForm! : FormGroup;
 constructor(private  formBuilder: FormBuilder, private toastr: ToastrService, ){
this.loginForm = formBuilder.group({
      "emailId": ["",Validators.required],
      "password": ["", Validators.required, Validators.minLength(6),
      Validators.maxLength(40)],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],});
      this.createForm();
  }
createForm() {
    this.angForm = this.formBuilder.group({
       email: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
 
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    // this.dropdownSettings:IDropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };



  this.doReset();
  this.MultiseletDropDown1 = [
                          {"id":1,"itemName":"Alabama"},
                          {"id":2,"itemName":"Alaska"},
                          {"id":3,"itemName":"California"},
                          {"id":4,"itemName":"Delaware"},
                          {"id":5,"itemName":"Tennessee"},
                          {"id":6,"itemName":"Texas"},
                          {"id":7,"itemName":"Washington"},
                          {"id":7,"itemName":"August"},
                          {"id":7,"itemName":"September"},
                          {"id":7,"itemName":"October"},
                          {"id":7,"itemName":"November"},
                          {"id":7,"itemName":"December"}

                        ];
 this.MultiseletDropDown2 = [
      {"id":1,"itemName":"january"},
      {"id":2,"itemName":"febraury"},
      {"id":3,"itemName":"march"},
      {"id":4,"itemName":"april"},
      {"id":5,"itemName":"May"},
      {"id":6,"itemName":"June"},
      {"id":7,"itemName":"July"},
      {"id":7,"itemName":"August"},
      {"id":7,"itemName":"September"},
      {"id":7,"itemName":"October"},
      {"id":7,"itemName":"November"},
      {"id":7,"itemName":"December"}

    ];

    this.MultiseletDropDown3 = [
      {"id":1,"itemName":"January"},
      {"id":2,"itemName":"febraury"},
      {"id":3,"itemName":"March"},
      { "id":4, "itemName":"April" , isDisabled: this['disableApril'], },
      {"id":5,"itemName":"May"},
      {"id":6,"itemName":"June"},
      {"id":7,"itemName":"July"},
      {"id":8,"itemName":"August"},
      {"id":9,"itemName":"September"},
      {"id":10,"itemName":"October"},
      {"id":11,"itemName":"November"},
      {"id":12,"itemName":"December"},
    ];

    this.MultiseletDropDown4 = [
      {"id":1,"itemName":"1"},
      {"id":2,"itemName":"2"},
      {"id":3,"itemName":"3"},
      {"id":4, "itemName":"4"},
      {"id":5,"itemName":"5"},
      {"id":6,"itemName":"6"},
      {"id":7,"itemName":"7"},
      {"id":8,"itemName":"8"},
      {"id":9,"itemName":"9"},
      {"id":10,"itemName":"10"},
      {"id":11,"itemName":"11"},
      {"id":12,"itemName":"12"},
    ];

    this.MultiseletDropDown5 = [
      {"id":1,"itemName":"First"},
      {"id":2,"itemName":"Second"},
      {"id":3,"itemName":"Third"},
      {"id":4,"itemName":"Fourth"},
    ],

    this.MultiseletDropDown6 = [
      {"id":1,"itemName":"1"},
      {"id":2,"itemName":"2"},
      {"id":3,"itemName":"3"},
      {"id":4, "itemName":"4"},
      {"id":5,"itemName":"5"},
      {"id":6,"itemName":"6"},
      {"id":7,"itemName":"7"},
      {"id":8,"itemName":"8"},
      {"id":9,"itemName":"9"},
      {"id":10,"itemName":"10"},
      {"id":11,"itemName":"11"},
      {"id":12,"itemName":"12"},
    ],

    this.MultiseletDropDown7 = [
      {"id":1,"itemName":"January"},
      {"id":2,"itemName":"febraury"},
      {"id":3,"itemName":"March"},
      {"id":4, "itemName":"April"},
      {"id":5,"itemName":"May"},
      {"id":6,"itemName":"June"},
      {"id":7,"itemName":"July"},
      {"id":8,"itemName":"August"},
      {"id":9,"itemName":"September"},
      {"id":10,"itemName":"October"},
      {"id":11,"itemName":"November"},
      {"id":12,"itemName":"December"},
    ];

    this.MultiseletDropDown8 = [
      {"id":1,"itemName":"Arizona"},
      {"id":2,"itemName":"Colorado"},
      {"id":3,"itemName":"Idaho"},
      {"id":4, "itemName":"Montana"},
      {"id":5,"itemName":"New Mexico"},
      {"id":6,"itemName":"North Dakota"},
      {"id":7,"itemName":"Utah"},
      {"id":8,"itemName":"Wyoming"},
      {"id":9,"itemName":"Alabama"},
      {"id":10,"itemName":"Arkansas"},
      {"id":11,"itemName":"November"},
      {"id":12,"itemName":"December"},
    ];
    this.multipleSettings = {
                              singleSelection: false,
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              classes:"myclass custom-class",
                            };
    this.DisableSettings = {
			disabled: true
		}


    this.groupDropdown = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" },
    ];

    this.groupDropdown1 = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" },
    ];

    this.groupDropdown2 = [
      { "id": 1, "itemName": "option1", "category": "group1" },
      { "id": 2, "itemName":"option2", "category": "asia pacific" },
      { "id": 3, "itemName": "option3", "category": "Europe" },
      { "id": 4, "itemName": "option4", "category": "Europe" },
      { "id": 5, "itemName": "option5", "category": "group1" },
      { "id": 6, "itemName": "option6", "category": "Europe" },
    ];
    this.groupSettings = {
			singleSelection: false,
			text: 'Select Group',
			selectAllText: 'Select All',
			unSelectAllText: 'UnSelect All',
			searchPlaceholderText: 'Search Group',
			enableSearchFilter: false,
			badgeShowLimit: 5,
			groupBy: 'category'
		};
    this.SelectFilterSettings={
      singleSelection: false,
			text: 'Select',
			enableSearchFilter: true,
    };
    this.SingleSettings = {
			singleSelection: true,
			text: "Choose One",
			classes: "myclass custom-class"
		};
  }




 showToaster(){
    if(this.model3.password.length>=8&&this.model3.email.includes('@')){
  console.log(this.model3);

 this.toastr.success("LogIn Successful")
    }
    else
    {

      this.toastr.error("LogInFailed")
    }

    // onReset() {
 this.doReset();
 }


public config1: DropzoneConfigInterface = {
  clickable: true,
  maxFiles: 1,
  addRemoveLinks: true,
  autoReset: null,
  errorReset: null,
  cancelReset: null
};
files: File[] = [];

onSelect(event: any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event: any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

multiSelectSelected = ['opera',];
  multiSelect = [{name: 'opera'},
     {name: 'chrome'},
  {name: 'safari'},
  {name: 'internet explorer'},
  {name: 'firefox'}

  ];

  groupByFn = (item: any) => item.child.state;

  groupValueFn = (_: string, children: any[]) => ({
    name: children[0].child.state,
    total: children.length,
  });

  public color6: string = '#1973c0';
  public color9: string = '#278ce2';
  public color11: string = '#f2ff00';
  public color13: string = 'rgba(0,97,218,0.5)';
  public grayColor:string = '#b7b7b7'
  public CancleColor:string = '#8c5bff'

  time = ""
  settime(){

    this.time = new Date().toLocaleTimeString();
  }


  tab = 1;
	keepSorted = true;
	key!: any;
	display: any;
	filter = false;
	source!: Array<any>;
	confirmed!: Array<any>;
	userAdd = '';
	disabled = false;

  sourceLeft = true;




	doReset() {

	}

	doDelete() {
		if (this.source.length > 0) {
			this.source.splice(0, 1);
		}
	}

	doCreate() {
		if (typeof this.source[0] === 'object') {
			const o = {};

			this.source.push( o );
		} else {
			this.source.push(this.userAdd);
		}
		this.userAdd = '';
	}

	doAdd() {
		for (let i = 0, len = this.source.length; i < len; i += 1) {
			const o = this.source[i];
			const found = this.confirmed.find( (e: any) => e === o );
			if (!found) {
				this.confirmed.push(o);
				break;
			}
		}
	}

	doRemove() {
		if (this.confirmed.length > 0) {
			this.confirmed.splice(0, 1);
		}
	}

	doFilter() {
		this.filter = !this.filter;
	}

	filterBtn() {
		return (this.filter ? 'Hide Filter' : 'Show Filter');
	}

	doDisable() {
		this.disabled = !this.disabled;
	}

	disableBtn() {
		return (this.disabled ? 'Enable' : 'Disabled');
	}
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
////forms
selectedAccounts = [{ name: 'Adam' }];
hideselectedAccounts = [{ name: 'Adam' }];

selectedCars = ['select cars'];
cars = [
  { id: 0, name: 'Select all', disabled: true },
  { id: 1, name: 'Volvo' },
  { id: 2, name: 'Saab' },
  { id: 3, name: 'Opel' },
  { id: 4, name: 'Audi' },
];

toppings = new FormControl('select all');
toppingList: string[] = [
  'Extra cheese',
  'Mushroom',
  'Onion',
  'Pepperoni',
  'Sausage',
  'Tomato',
];

//Items with already grouped children array
selectedProjects = [];
projects = [
  {
    id: 'p1',
    title: 'Project A',
    subprojects: [
      { title: 'Subproject 1 of A', id: 's1p1' },
      { title: 'Subproject 2 of A', id: 's2p1' },
    ],
  },
  {
    id: 'p2',
    title: 'Project B',
    subprojects: [
      { title: 'Subproject 1 of B', id: 's1p2' },
      { title: 'Subproject 2 of B', id: 's2p2' },
    ],
  },
];

//Selectable groups
selectedAccount = [{ country: 'Colombia' }];
accounts = [
  {
    name: 'Jill',
    email: 'jill@email.com',
    age: 15,
    country: undefined,
    child: { state: 'Active' },
  },
  {
    name: 'Henry',
    email: 'henry@email.com',
    age: 10,
    country: undefined,
    child: { state: 'Active' },
  },
  {
    name: 'Meg',
    email: 'meg@email.com',
    age: 7,
    country: null,
    child: { state: 'Active' },
  },
  {
    name: 'Adam',
    email: 'adam@email.com',
    age: 12,
    country: 'United States',
    child: { state: 'Active' },
  },
  {
    name: 'Homer',
    email: 'homer@email.com',
    age: 47,
    country: '',
    child: { state: 'Active' },
  },
  {
    name: 'Samantha',
    email: 'samantha@email.com',
    age: 30,
    country: 'United States',
    child: { state: 'Active' },
  },
  {
    name: 'Amalie',
    email: 'amalie@email.com',
    age: 12,
    country: 'Argentina',
    child: { state: 'Active' },
  },
  {
    name: 'Estefanía',
    email: 'estefania@email.com',
    age: 21,
    country: 'Argentina',
    child: { state: 'Active' },
  },
  {
    name: 'Adrian',
    email: 'adrian@email.com',
    age: 21,
    country: 'Ecuador',
    child: { state: 'Active' },
  },
  {
    name: 'Wladimir',
    email: 'wladimir@email.com',
    age: 30,
    country: 'Ecuador',
    child: { state: 'Inactive' },
  },
  {
    name: 'Natasha',
    email: 'natasha@email.com',
    age: 54,
    country: 'Ecuador',
    child: { state: 'Inactive' },
    disabled: true,
  },
  {
    name: 'Nicole',
    email: 'nicole@email.com',
    age: 43,
    country: 'Colombia',
    child: { state: 'Inactive' },
  },
  {
    name: 'Michael',
    email: 'michael@email.com',
    age: 15,
    country: 'Colombia',
    child: { state: 'Inactive' },
  },
  {
    name: 'Nicolás',
    email: 'nicole@email.com',
    age: 43,
    country: 'Colombia',
    child: { state: 'Inactive' },
  },
];

compareAccounts = (item: any, selected: any) => {
  if (selected.country && item.country) {
    return item.country === selected.country;
  }
  if (item.name && selected.name) {
    return item.name === selected.name;
  }
  return false;
};
///
cities = [
  {
    id: 1,
    name: 'Vilnius',
    avatar:
      '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
  },
  {
    id: 2,
    name: 'Kaunas',
    avatar:
      '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15',
  },
  {
    id: 3,
    name: 'Pavilnys',
    avatar:
      '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15',
  },
  {
    id: 4,
    name: 'Siauliai',
    avatar:
      '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x',
  },
];
selectedCity = this.cities[1].name;


imgdata = ['./assets/img/users/7.jpg'];

//    file.io
// Variable to store shortLink from api response
shortLink: string = '';
loading: boolean = false; // Flag variable
fileUpload: File | any = null; // Variable to store fileUpload

  }