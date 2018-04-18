const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}

const DateFormat = function(date){
  return [date.month, date.day].map(formatNumber).join('')
}
//计算位数并返回正确形式
var days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const getNum=function(date, len=4){
    var tmp;
    if(len==4){
      var day = date % 100;
      var month = (date-day)/100;
      
      console.log(month, day);
      if(month <= 12 && month >= 1 && day<=days[month] && day >= 1){
        tmp={
          year: 2000,
          month:month,
          day: day,
          hour: 12,
          minute: 0,
          second: 0
        }
      }else{
        tmp = {
          year: 2000,
          month: 1,
          day: 1,
          hour: 12,
          minute: 0,
          second: 0
        }
      }
    }else{
      tmp = {
        year: 2000,
        month: 1,
        day: 1,
        hour: 12,
        minute: 0,
        second: 0
      }
    }
    //console.log("tmp: -------");
    //console.log(tmp);
    return tmp;

}
//日期变换

const getDate=function(curday, num){
  //console.log(curday);
  var day = curday.day;
  var month = curday.month;
  var year = curday.year;
  day += num;
  //console.log(day);
  //console.log(days);
  if (!(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))) days[2]=28;
  if (day > days[month]) {
    day = 1;
    month += num;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  } else if (day < 0) {
    month += num;
    if (month < 0) {
      month = 12;
      year -= 1;
    }
    day = days[month];
  }
  var date = {
    year: year, 
    month: month, 
    day: day, 
    hour: curday.hour, 
    minute: curday.minute, 
    second:curday.second
  };
  //console.log("curday: ");
  //console.log(date);
  return date;
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获得随机整数
const getRandom=function(n, m){
  var random = Math.floor(Math.random() * (m - n + 1) + n);
  return random;
}
module.exports = {
  formatTime: formatTime,
  getDate: getDate,
  DateFormat: DateFormat,
  getNum: getNum,
  getRandom: getRandom
}
