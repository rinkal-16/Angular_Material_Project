import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DreamCatcher } from '../shared/dream';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DreamService } from '../services/dream.service';
import { switchMap } from 'rxjs/operators';
import { Cmntdd } from '../shared/cmntdd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { visibility } from '../animations/app.animation';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-dreamdetail',
  templateUrl: './dreamdetail.component.html',
  styleUrls: ['./dreamdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      visibility(),
      expand()

    ]

})
export class DreamdetailComponent implements OnInit { 
 
  dream: DreamCatcher;
  dreamIds: string[];
  prev: string;
  next: string;
  commentForm: FormGroup;
  cmntdd: Cmntdd;
  errMess: string;
  dreamcopy: DreamCatcher;
  visibility = 'shown';
  @ViewChild('cform') commentFormDirective;

  formErrors = {
    'name': '',
    'message': ''
  };

  validationMessages = {
    'name': {
      'required':      'Author name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'message': {
      'required':      'Write comment is required.',
      'minlength':     'Comment must be at least 15 characters long.',
      'maxlength':     'Comment cannot be more than 50 characters long.'
    },
  };

  constructor(
    private dreamService: DreamService, 
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') public BaseURL) { this.createForm(); }

  ngOnInit() {
    this.dreamService.getDreamIds().subscribe(dreamIds => this.dreamIds = dreamIds);
    this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dreamService.getDream(+params['id']); }))
    .subscribe(dream => { this.dream = dream; this.dreamcopy = dream; this.setPrevNext(dream.id); this.visibility = 'shown'; },
      errmess => this.errMess = <any>errmess);
  }

  setPrevNext(dreamIds: string) {
    const index = this.dreamIds.indexOf(dreamIds);
    this.prev = this.dreamIds[(this.dreamIds.length + index - 1) % this.dreamIds.length];
    this.next = this.dreamIds[(this.dreamIds.length + index + 1) % this.dreamIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.commentForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        rating: 5,
        message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(50)] ],
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); 
  }

  onValueChanged(data?: any) {
    // if(!this.commentForm) { return; }
    // const form = this.commentForm;
    // for(const field in this.formErrors) {
    //   if(this.formErrors.hasOwnProperty(field)) {
    //     this.formErrors[field] = '';
    //     const control = form.get(field);
    //     if(control && control.dirty && !control.valid) {
    //       const msg = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         if(control.errors.hasOwnProperty(key)) {
    //           this.formErrors[field] += msg[key] + '';
    //         }
    //       }
    //     } 
    //   }
    // }
  }

  onSubmit() {
    this.cmntdd = this.commentForm.value;
    //this.dreamcopy.cmntdd.push(this.comments);
    this.dreamService.putDream(this.dreamcopy)
      .subscribe(dream => {
        this.dream = dream; this.dreamcopy = dream;
      },
      errmess => {this.dream = null; this.dreamcopy = null; this.errMess = <any>errmess;});
    this.commentFormDirective.resetForm();  
    this.commentForm.reset({
      name: '',
      rating: 5,
      message: ''
    });
  }
}
