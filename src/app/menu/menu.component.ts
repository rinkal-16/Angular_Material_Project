import { Component, OnInit, Inject } from '@angular/core';
import { DreamCatcher } from '../shared/dream';
import { DREAMS } from '../shared/dreams';
import { DreamService } from '../services/dream.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})

export class MenuComponent implements OnInit {

  dreams: DreamCatcher[];  
  selectedDream: DreamCatcher;
  errMess: string;

  
  
  constructor(private dreamService: DreamService,
    @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.dreamService.getDreams()
      .subscribe(dreams => this.dreams = dreams,
        errmess => this.errMess = <any>errmess);
  }

  onSelect(dream: DreamCatcher) {
    this.selectedDream = dream;
  }

}
