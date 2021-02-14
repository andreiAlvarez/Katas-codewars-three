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
