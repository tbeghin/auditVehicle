export class StatusIcon {
  class: string;
  icon: string;

  constructor(statusNumber) {
    switch (statusNumber) {
      case 0:
        this.class = 'blue-icon';
        this.icon = 'info';
        break;
      case 1:
        this.class = 'green-icon';
        this.icon = 'check_circle';
        break;
      case 2:
        this.class = 'orange-icon';
        this.icon = 'report_problem';
        break;
      case 3:
      default:
        this.class = 'red-icon';
        this.icon = 'cancel';
        break;
    }
  }
}
