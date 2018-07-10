import * as moment from 'moment';

export class RadioCommentForm {
  value: boolean;
  comment?: string;
  date?: Date;

  constructor(value: boolean, complement: any) {
    this.value = value;
    if (moment.isDate(complement)) {
      this.date = complement;
    } else {
      this.comment = complement;
    }
  }
}
