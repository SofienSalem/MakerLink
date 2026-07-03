import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editor, Toolbar, Validators } from 'ngx-editor';
@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent{

  constructor()  {
   }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
 // ngx-editor
 editordoc = '';

 editor!: Editor;
 toolbar: Toolbar = [
   ['bold', 'italic'],
   ['underline', 'strike'],
   ['code', 'blockquote'],
   ['ordered_list', 'bullet_list'],
   [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
   ['link', 'image'],
   ['text_color', 'background_color'],
   ['align_left', 'align_center', 'align_right', 'align_justify'],

 ];

 form:any = new FormGroup({
   editorContent: new FormControl(
     { value: '', disabled: false },
     Validators.required()
   ),
 });

 get doc(): AbstractControl {
   return this.form.get('editorContent');
 }

 ngOnInit(): void {
   this.editor = new Editor();
 }

 ngOnDestroy(): void {
   this.editor.destroy();
 }

}
