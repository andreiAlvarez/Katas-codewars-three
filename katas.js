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
