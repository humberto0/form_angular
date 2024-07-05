import { Component } from '@angular/core';
import { ListCardsComponent } from '../../shared/components/list-cards/list-cards.component';
import { CardService } from '../../service/card.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListCardsComponent,CommonModule,RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [];
  register = "/register"

  constructor(private cardService: CardService) {}
  ngOnInit() {
    this.loadCards();
  }
  async loadCards() {
    try {
      const data = await this.cardService.getCards();
      this.cards = data.cards;
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  }
}
