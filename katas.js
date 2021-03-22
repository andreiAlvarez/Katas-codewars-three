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

// kata 8 
const capitalizeFirstLetter = word =>
  `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`

function titleCase(title, minorWords = '') {
  const minorWordsArray = minorWords.toLowerCase().split(' ')
  const result = title
    .split(' ')
    .map((word, i) => {
      if (i === 0) return capitalizeFirstLetter(word)

      return minorWordsArray.includes(word.toLowerCase())
        ? word.toLowerCase()
        : capitalizeFirstLetter(word)
    })
    .join(' ')

  return result;

    // kata 9 
    
    const toBits = (set) => {
    let bitmap = new Array(5000).fill(0);
    set.split("\n").map(e => bitmap[e] = 1)
    return bitmap
};
    
    // solution 2
    
    const toBits = (set) => set.split`\n`.reduce((a,b)=>(a[b]=1,a),Array(5000).fill(0));
// kata 10
    
    const findOutChristmasWeekday = date =>
  (new Date(date + '')).toLocaleDateString('en-US', {weekday: 'long'}); 

  // kata 11
    
  const tetrahedron = size => (size * (size + 1) * (size + 2)) / 6; 
    
    
    // kata 12 
    
    function arraysSimilar(arr1, arr2) {
    arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  return arr1.length > arr2.length
    ? arr1.every((v, i) => v === arr2[i])
    : arr2.every((v, i) => v === arr1[i]);
}; 
    
    // kata 13
    
    function calculate1RM(w, r) {
  let a = w * (1 + r / 30);
  let b = (100 * w) / (101.3 - 2.67123 * r);
  let c = w * r ** 0.1;
  if (r === 0 || w === 0) return 0;
  if (r === 1) return w;
  return Math.round(Math.max(a, b, c));
};

    //solution 2
    
const calculate1RM = (w, r) => r == 1 ? w : r == 0 ? 0 : Math.round(Math.max(...["w*(1+r/30)", "(100*w)/(101.3-2.67123*r)", "w*(r**0.10)"].map(a => eval(a))));

    
    // kata 14 
    
    function thirt(n) {
    const dict = [1, 10, 9, 12, 3, 4];
  let sum = n;
  while (1) {
    let temp = sum;
    sum = sum.toString().split``.reverse().join``.split``
      .map((v, i) => {
        v = v * dict[i % 6];
        return v;
      })
      .reduce((a, b) => a + b, 0);
    if (sum === temp) {
      break;
    }
  }
  return sum;
}; 
    
    // solution 2 
    
    const thirt = n =>
  n < 100 ? n : thirt([...`${n}`].reverse().reduce((pre, val, idx) => pre + 10 ** idx % 13 * val, 0));

    // kata 15
    
    const a = n => {
 if (n%2!==0) n--
  if (n<=2) return ''
  let str = ''
  for (let i=0;i<n;i++){
   if (i===0){
     str+=' '.repeat(n-i-1)+'A'+' '.repeat(n-i-1)+'\n'
   }else if (i===1){
     str+=' '.repeat(n-i-1)+'A'+' '+'A'+' '.repeat(n-i-1)+'\n'
   }else if (i===(n/2)){
     str+=' '.repeat(n-i-1)+'A'+' A'.repeat(n/2)+' '.repeat(n-i-1)+'\n'
   }else {
     str+=' '.repeat(n-i-1)+'A'+' '.repeat(i*2-1)+'A'+' '.repeat(n-i-1)+'\n'
   }
 }
  return str.slice(0,-1);
};

    // kata 16 
    
    function alphabetized(s) {
  var ans = "";
  for (var i = 97; i < 123; ++i)
    for (var j = 0; j < s.length; j++)
      if (s[j].toLowerCase().charCodeAt() == i) ans += s[j];
  return ans;
}; 

    // kata 17 
    const trotter = n =>{
  let check = n;
  let arr = n.toString().split``;
  for (let i = 1; i < 1000; i++) {
    n = check * i;
    arr = arr.concat(n.toString().split``);
    arr = [...new Set(arr)];
    if (arr.length === 10) return n;
  }
  return "INSOMNIA";
};
    
    // solution 2
    
    trotter=(a,b=1,c=new Set(''+a))=>a?c.size==10?a*b:trotter(a,++b,new Set([...c,...''+a*b])):'INSOMNIA'; 

    // kata 18 
    
    function mixwords(str){
  if (typeof str === "string") {
    return str.replace(/[a-z]+/gi, v => {
      if (v.length > 2)
        return (
          v.slice(0, 1) +
          v.slice(1, -1).split``.sort((a, b) => Math.random() - 0.5).join`` +
          v.slice(-1)
        );
      return v;
    });
  };

        // kata 19 
        
        function amidakuji(arr){
let res = Array.from({ length: arr[0].length + 1 },(_, index) => index);
  arr.map((level)=>{
    let n = -1;
    while((n = level.indexOf('1', n + 1)) !== -1)
      [res[n+1], res[n]] = [res[n], res[n+1]];
  });
  return res;
};

        // kata 20 
        
        const GrεεκL33t = str => {
  let dict = {
    a: "α",
    b: "β",
    d: "δ",
    e: "ε",
    i: "ι",
    k: "κ",
    n: "η",
    o: "θ",
    p: "ρ",
    r: "π",
    t: "τ",
    u: "μ",
    v: "υ",
    w: "ω",
    x: "χ",
    y: "γ"
  };
  return str.replace(/./g, v => {
    if (dict[v.toLowerCase()]) {
      return v === v.toUpperCase() ? dict[v.toLowerCase()] : dict[v];
    }
    return v.toLowerCase();
  });
}; 

         // solution 2
        
        let map = {a:'α',b:'β',d:'δ',e:'ε',i:'ι',k:'κ',n:'η',o:'θ',p:'ρ',r:'π',t:'τ',u:'μ',v:'υ',w:'ω',x:'χ',y:'γ'};

const GrεεκL33t = str => str.toLowerCase().replace(/./g, function(v){ return map[v] || v });

        // kata 21
        
        function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function() {
      return i;
    });
  }

  return callbacks;
};

        // kata 22
        
        const grabscrab = (anagram, dictionary) => {
    anagram = anagram
    .split("")
    .sort()
    .join();
  let arr = dictionary.slice().map(
    v =>
      v
        .split("")
        .sort()
        .join() === anagram
  );
  return dictionary.filter((v, i) => arr[i] === true);
};
        
        // kata 23
        
        function isAlt(word) {
  return word.split("").every((v, i) => {
    if (/[aeiou]/.test(word[0])) {
      if (i % 2 === 0 && /[aeiou]/.test(v)) {
        return true;
      } else if (i % 2 !== 0 && !/[aeiou]/.test(v)) {
        return true;
      } else {
        return false;
      }
    }
    if (!/[aeiou]/.test(word[0])) {
      if (i % 2 == 0 && !/[aeiou]/.test(v)) {
        return true;
      } else if (i % 2 !== 0 && /[aeiou]/.test(v)) {
        return true;
      } else {
        return false;
      }
    }
  });
};
        
        // solution 2 
        
        const isAlt = word => !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}
