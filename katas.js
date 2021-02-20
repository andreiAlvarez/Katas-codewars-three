//Kata 1

const gearInchCalculator = (chainrings, sprockets) => chainrings.map(c =>
    sprockets.map(sprocket => Math.round(+((26 * c) / sprocket) * 10) / 10)
  );

//Kata 2

const gatesCalculator = (num1, num2) => `%${(num1 / num2) * 100}`;

//Kata 3

function topThreeWords(text) {
 const arr = []
  text = text.toLowerCase().split` `.map(v=>{
    if (v===`'`) return ''
    return v.replace(/[^'a-z]/gi,'')
  }).filter(v=>v)
  const obj = text.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  for (let i in obj){
    arr.push([i,obj[i]])
  }
  return arr.sort((a,b)=>b[1]-a[1]).slice(0,3).map(v=>v[0])
}
 //Solution 2

topThreeWords=(a,b=a.toLowerCase().split(/[ ,./]+/))=>b.filter((e,i)=>i==b.indexOf(e)).filter(a=>/[a-z]+/.test(a)).map(a=>[a,b.filter(b=>b==a).length]).sort((a,b)=>b[1]-a[1]).slice(0,3).map(a=>a[0]);

// kata 4 

function decode(str) {
  const morse = {
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
  };
  const morse2 = {};
  for (let i in morse) {
    morse2[morse[i]] = i;
  }
  return str.split` `.map(v => morse2[v] || " ").join``;
};

// kata 5

function drive(drinks, finished, drive_time) {
  let units = Math.round(drinks.reduce((a,b)=>a+(b[0]*b[1]/1000),0)*100)/100
  let time1 = finished.split`:`[0]*60*60*1000+finished.split`:`[1]*60*1000
  let time2 = drive_time.split`:`[0]*60*60*1000+drive_time.split`:`[1]*60*1000
  if (time2<time1){
    time2+=(24)*60*60*1000
  }
  time1+=(units.toString().split`.`[0]*60*60*1000+(units.toString().split`.`[1]||0)*0.6*60*1000)
  return [units,time1<time2]
};

// kata 6

function alphabetWar(fight) {
  let dict = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };

  const arr = [];
  const arr1 = fight.split("");
  for (let i = 0; i < fight.length; i++) {
    if (arr1[i - 1] !== "*" && arr1[i] !== "*" && arr1[i + 1] !== "*") {
      arr.push(arr1[i]);
    }
  }
  let sum = arr.reduce((a, b) => a + (dict[b] ? dict[b] : 0), 0);
  return sum < 0
    ? "Right side wins!"
    : sum > 0
    ? "Left side wins!"
    : "Let's fight again!";
};

// solution 2

const alphabetWar = (s,a='wpbs zdqm',o) => (o=[...s.replace(/\w?\*\w?/g,'')].reduce((w,x)=>w+(a.includes(x)?a.indexOf(x)-4:0),0),o<0?'Left side wins!':o>0?'Right side wins!':"Let's fight again!");

// kata 7 

var child = function(bird1, bird2) {
  if (bird1 === bird2) return false;
  return getDifference(bird1, bird2) < 3 ? true : false;
};
var grandchild = function(bird1, bird2) {
  if (bird1.length === 1 && bird2.length === 1 && bird2 !== bird1) return false;
  return getDifference(bird1, bird2) <= 4 ? true : false;
};

function getDifference(bird1, bird2) {
  let dif = 0;
  for (let i = 0; i < bird1.length; i++) {
    if (bird1.slice(i, i + 1) !== bird2.slice(i, i + 1)) dif++;
  }
  return dif;
};
