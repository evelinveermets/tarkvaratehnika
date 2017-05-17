
// must end in ValueConverter to be recognised by aurelia as one
export class DateTimeFormatValueConverter {
  toView(value) {
    let date = new Date(value);
    return date.toLocaleTimeString("et-EE") + "  " + date.toLocaleDateString("et-EE");
  }
}
