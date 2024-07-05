import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-list-cards',
    standalone: true,
    templateUrl: './list-cards.component.html',
    styleUrl: './list-cards.component.css',
    imports: [CommonModule, CardComponent]
})
export class ListCardsComponent {
  @Input() cards: { imageUrl: string, title: string, description: string, buttonLabel: string, buttonLink: string, titleAlt: string }[] = [];
}
