import {AtomPersonConstruct} from './atom-person-construct';

export class AtomAuthor implements AtomPersonConstruct {

  name: string[];
  uri: string[];
  email: string[];

  constructor(type: AtomPersonConstruct) {
    this.name = type.name;
    this.uri = type.uri;
    this.email = type.email;
  }
}