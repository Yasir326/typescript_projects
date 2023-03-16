import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lon: number;
  };

  color = 'blue'

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.name}</h1>
    <h3>Catchphrase: ${this.catchPhrase}</h3>`;
  }
}
