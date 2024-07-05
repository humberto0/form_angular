import { Injectable } from '@angular/core';
import axiosInstance from '../config/axios.config';
import { Card } from './types/card.type';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = '/cards';

  async getCards() {
    try {
      const response = await axiosInstance.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  }

  async createCard(card: Card) {
    try {
      await axiosInstance.post(this.apiUrl, card);
    } catch (error) {
      console.error('Error creating card:', error);
      throw error;
    }
  }
}
