import { Component, OnInit, Inject } from '@angular/core';
import { DreamCatcher } from '../shared/dream';
import { DreamService } from '../services/dream.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dream: DreamCatcher;
  promotion: Promotion;
  leader: Leader;
  dreamErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(private dreamService: DreamService, 
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL) { }
    
  ngOnInit(): void {
    this.dreamService.getFeaturedDream()
      .subscribe(dream => this.dream = dream,
        errmess => this.dreamErrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion,
        errmess => this.promoErrMess = <any>errmess );
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess);

  }

}
