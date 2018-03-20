import {Injectable} from '@angular/core';
import destinations from './data-destinations';

@Injectable()
export class DestinationService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];

  findAll() {
    return Promise.resolve(destinations);
  }

  findById(id) {
    return Promise.resolve(destinations[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(destinations.filter((destination: any) =>
        (destination.title +  ' ' + destination.country +  ' ' + destination.city + ' ' + destination.price).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(destination) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, destination: destination});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

}
