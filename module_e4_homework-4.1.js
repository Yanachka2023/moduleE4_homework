const userIvanov = function(a) {
    a = {Имя: 'Максим',
    Фамилия: 'Иванов',
    Возраст: '32'}
  for (let key in a) {
    console.log(key+ ': ' + a[key]);
  }
    
   }
  userIvanov();