
export default function dateString(string: string) {
  let year = string.substring(0, 4)
  let day = string.substring(8)
  let month = string.substr(5, 2)

  switch(month) {
    case '00': 
      month = 'янв'
    break;
    case '01': 
      month = 'фев'
    break;
    case '02': 
      month = 'мар'
    break;
    case '03': 
      month = 'апр'
    break;
    case '04': 
      month = 'мая'
    break;
    case '05': 
      month = 'июня'
    break;
    case '06': 
      month = 'июля'
    break;
    case '07': 
      month = 'авг'
    break;
    case '08': 
      month = 'сент'
    break;
    case '09': 
      month = 'окт'
    break;
    case '10': 
      month = 'январь'
    break;
    case '11': 
      month = 'дек'
    break;
    default: console.log(month + ' месяц');
    break
  }

  // console.log(year);
  // console.log(day);
  // console.log(month);

  let fullDate = day + ' ' + month + ' ' + year
  return fullDate
}