export class DateTimeFormatValueConverter {
  toView(value) {
    return new Date(value).toString();
  }
}
