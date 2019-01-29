var otdate = new Date();
var a = ["январь", "февраль", "март", "Апрель", "Май", "Июнь", "Июль", "Август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
console.log(a);

myStorage = localStorage;

function draw_calendar(date) {
  schetchikdnya = date;
  console.log(date.getMonth());
  document.getElementById("month").innerHTML = a[date.getMonth()];
  document.getElementById("year").innerHTML = date.getFullYear();
  console.log(a[date.getMonth()]);
  var ndate = new Date; //дата
  let mainBlock = document.querySelector(".main-block");
  let block;
  let schet = 1;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      block = document.createElement("div");
      block.className = "dateblock";
      block.id = schet;
      mainBlock.appendChild(block);
      menu = document.createElement("div");
      menu.className = "menu-item";
      span = document.createElement("span");
      span.className = "title";
      menuli = document.createElement("ul");
      menuli.className = "sub-menu";
      if (schet % 7 == 1) {
        block.innerHTML = "Пн";
      }
      if (schet % 7 == 2) {
        block.innerHTML = "Вт";
      }
      if (schet % 7 == 3) {
        block.innerHTML = "Ср";
      }
      if (schet % 7 == 4) {
        block.innerHTML = "Чт";
      }
      if (schet % 7 == 5) {
        block.innerHTML = "Пт";
      }
      if (schet % 7 == 6) {
        block.innerHTML = "Сб";
      }
      if (schet % 7 == 0) {
        block.innerHTML = "Вс";
      }
      document.getElementById(schet).appendChild(menu);
      document.getElementById(schet).getElementsByClassName("menu-item")[0].appendChild(span);
      document.getElementById(schet).getElementsByClassName("menu-item")[0].getElementsByClassName("title")[0].appendChild(menuli);
      schet++;
      block.setAttribute("onmouseover", "sobitie(id)");
      block.setAttribute("onmouseout", "sobitie(id)");
    }
  }
  ndate.setFullYear(date.getFullYear(), date.getMonth(), 1);
  i = ndate.getDay();
  if (i == 0) {
    i = 7;
  }
  console.log(i)

  do {
    if (document.getElementById(i).firstChild != null) {
      var txt = ndate.getDate();
      document.getElementById(i).firstChild.nodeValue += " ";
      document.getElementById(i).firstChild.nodeValue += ndate.getDate();
      document.getElementById(i).style.background = "#e06c75";
      if (schetchikdnya.getDate() == ndate.getDate()) {
        document.getElementById(i).style.background = "#284060";
      }
      ndate.setDate(ndate.getDate() + 1);
      i++;
      console.log(schetchikdnya.getDate(), ndate.getDate(), document.getElementById(i))
    }
  } while (ndate.getDate() > 1);
  intab();
}
draw_calendar(otdate);

proverka = new Date();

function next() {
  document.querySelector('.main-block').innerHTML = '';
  otdate.setDate(1);
  otdate.setMonth(otdate.getMonth() + 1);
  console.log(otdate);
  if (proverka.getMonth() == otdate.getMonth()) {
    otdate = new Date();
  }
  draw_calendar(otdate);
}

function previus() {
  document.querySelector('.main-block').innerHTML = '';
  otdate.setDate(1);
  otdate.setMonth(otdate.getMonth() - 1);

  if (proverka.getMonth() == otdate.getMonth()) {
    otdate = new Date();
  }
  draw_calendar(otdate);
}

function intab() {
  for (let i = 1; i < 42; i++) {
    ulli = document.createElement("li");
    document.getElementById(i).getElementsByClassName("menu-item")[0].getElementsByTagName("ul")[0].appendChild(ulli);
    for (let j = 1; j < 15; j++) {
      let p = document.createElement("p");
      p.id = i + "_" + j;
      p.className = "addnew";
      p.innerHTML = "add new person" + j;
      p.setAttribute("onclick", "addnew(id)");
      document.getElementById(i).getElementsByClassName("menu-item")[0].getElementsByTagName("li")[0].appendChild(p);
    }
  }
}

function sobitie(id) {
  console.log(document.getElementById(id))
  document.getElementById(id).classList.toggle('open');
  if (document.getElementById(id).classList == "dateblock open") {
    document.getElementById(id).getElementsByTagName("li")[0].style.display = "block";
  } else {
    document.getElementById(id).getElementsByTagName("li")[0].style.display = "none"
  }
  console.log(document.getElementById(id).classList)
}
