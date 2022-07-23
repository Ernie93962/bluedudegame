const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
/*const good = document.createElement('img')
const bad = document.createElement('img')
const coin = document.createElement('img')
const deathScreen = document.createElement('img')*/
const good = new Image
const bad = new Image
const coin = new Image
const deathScreen = new Image
coin.src = 'media/coin.png'
good.src = 'media/good.png'
bad.src = 'media/bad.png'
deathScreen.src = 'media/death screen.png'
/*document.getElementById('html').appendChild(coin)
document.getElementById('html').appendChild(bad)
document.getElementById('html').appendChild(good)
document.getElementById('html').appendChild(deathScreen)*/
let bm = document.getElementById('bm')
let dm = document.getElementById('dm')
let cm = document.getElementById('cm')
let blob = false
let glob = false
let flob = false
let klob = false
good.onload = function(){
    blob = true
}
bad.onload = function(){
    glob = true
}
coin.onload = function(){
    flob = true
}
deathScreen.onload = function(){
    klob = true
}
let flap = false
setInterval(function(){
    if(blob==true & glob==true & flob==true & klob==true){
        flap=true
    }
})

function bruh(draw ,x, y){
    if(flap == true){
        ctx.drawImage(draw, x, y)
    }
}

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function getRand(i){
    return(i[Math.floor(Math.random()*i.length)])
}

class badDude{
    constructor(){
        this.x = random(0, 490)
        this.y = random(0, 490)
        this.dir = getRand(['r', 'l', 'u', 'd'])

        while(this.x >= x & this.x <= x + 10){
            this.x = random(0, 490)
        }while(this.y >= x & this.y <= x + 10){
            this.y = random(0, 490)
        }
    }

    move = function(){
        if(this.dir == 'r'){
            this.x++
        }else if(this.dir == 'l'){
            this.x--
        }else if(this.dir == 'u'){
            this.y--
        }else if(this.dir == 'd'){
            this.y++
        }
    }

    changeDir = function(){
        let bruh = getRand(['r', 'l', 'u', 'd'])
        while(bruh == this.dir){
            bruh = getRand(['r', 'l', 'u', 'd'])
        }
        this.dir = bruh
    }
}

ctx.beginPath()
ctx.strokeRect(0, 0, 500, 500)

let x = random(0, 490)
let y = random(0, 490)

let baddies = []
for(i = 0; i<10; i++){
    baddies.push(new badDude)
}

let heheheha = false

let badChange = setInterval(function(){for(i = 0; i < baddies.length; i++){baddies[i].changeDir()}},1000)
let badMove = setInterval(function(){if(heheheha){for(i = 0; i < baddies.length; i++){baddies[i].move()}}}, 5)
let badDraw = setInterval(function(){
    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.fillRect(1, 1, 498, 498)

    bruh(good, x, y)

    for(i = 0; i< baddies.length; i++){
        bruh(bad, baddies[i].x, baddies[i].y)

        bruh(coin, gx, gy)
    }
}, 0.1)
let gx = random(0, 490)
let gy = random(0, 490)
let score = 0
let goal = setInterval(function(){
    bruh(coin, gx, gy)
}, 0.1)

let die = false
let timer = null

ctx.beginPath()
ctx.fillRect(x, y, 50, 50)

kill = function(){
    clearInterval(timer)
    clearInterval(badMove)
    clearInterval(badDraw)
    clearInterval(timer)
    clearInterval(goal)
    die = true
    bm.pause()

    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.fillRect(1, 1, 498, 498)

    bruh(deathScreen, 0, 0)
}

let bbruh = false

check = function(){
    if(x <= 0){
        x = 0
    }else if(x >= 490){
        x = 490
    }else if(y <= 0){
        y = 0
    }else if(y >= 490){
        y = 490
    }

    if(x >= gx - 9 & y >= gy - 9 & x <= gx + 10 & y <= gy + 10){
        gy = random(0, 490)
        gx = random(0, 490)
        score++
        cm.load()
        cm.play()
        for(i = 0; i<3; i++){
            baddies.push(new badDude)
        }
    }
    let scoreKeep = document.getElementById('score')
    scoreKeep.innerHTML = ['score: '+ score] 

    for(i = 0; i < baddies.length; i++){
        if(baddies[i].x <= 0){
            baddies[i].dir = 'r'
        }else if(baddies[i].x >= 490){
            baddies[i].dir = 'l'
        }else if(baddies[i].y <= 0){
            baddies[i].dir = 'd'
        }else if(baddies[i].y >= 490){
            baddies[i].dir = 'u'
        } 
        
        if(baddies[i].x >= x-9 & baddies[i].y >= y-9 & baddies[i].y <= y + 10 & baddies[i].x <= x + 10){
            kill()
            if(!bbruh){
                dm.play()
            }
            if(dm.currentTime == 3.866063){
                dm.pause()
                dm.load()
                bbruh = true
            }
        }
    }
}

let limit = setInterval(check, 0.1)

right = function(){

    bruh(good, x, y)
    x++
}

left = function(){
    bruh(good, x, y)
    x--
}

up = function(){

    bruh(good, x, y)
    y--
}

down = function(){

    bruh(good, x, y)
    y++
}
let bozo = 0
document.addEventListener('keydown', (event)=>{
    clearInterval(timer)
    bm.play()
    if(die == false){
        heheheha = true
        if(event.key == 'ArrowLeft'){
            timer = setInterval(left, 5)
        }else if(event.key == 'ArrowRight'){
            timer = setInterval(right, 5)
        }else if(event.key == 'ArrowUp'){
            timer = setInterval(up, 5)
        }else if(event.key == 'ArrowDown'){
            timer = setInterval(down, 5)
        }
    }
})

document.getElementById('stop').onclick = function(){
    kill()
}

document.getElementById('reset').onclick = function(){
    x = random(0, 490)
    y = random(0, 490)
    gx = random(0, 490)
    gy = random(0, 490)
    bbruh = false
    die = false
    baddies = []
    heheheha = false
    score = 0
    bm.load()
    bm.play()
    for(i = 0; i<20; i++){
        baddies.push(new badDude)
    }

    clearInterval(timer)
    clearInterval(badMove)
    badMove = setInterval(function(){if(heheheha){for(i = 0; i < baddies.length; i++){baddies[i].move()}}}, 5)
    badDraw = setInterval(function(){
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.fillRect(1, 1, 498, 498)
    
        bruh(good, x, y)
    
        for(i = 0; i< baddies.length; i++){
            bruh(bad, baddies[i].x, baddies[i].y)
    
            bruh(coin, gx, gy)
        }
    }, 0.1)
    goal = setInterval(function(){
        bruh(coin, gx, gy)
    }, 0.1)

    ctx.beginPath()
    ctx.fillStyle = 'white'
    ctx.fillRect(1, 1, 498, 498)

    bruh(good, x, y)
}