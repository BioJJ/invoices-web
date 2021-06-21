import { Establishment } from './Establishment';

export class Note {
  _id?: string;
  total: number | null;
  issue_date: Date;
  establishment: Establishment;

  get formattedDate() {
    return this.issue_date.toLocaleDateString();
  }
}
