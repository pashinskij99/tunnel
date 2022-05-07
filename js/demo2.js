const globalForModal = {
  cameraPositionNow: null,
  iForPositionZ: null,
  elapsedTime: null,
  scrollWhere: null,
  thisPos: null,
  arrForTexts: [],
  arrForSubTexts: [],
  arrForMesh: [],
  arrForGroup: [],
  camera: null,
  secondTunnelIsOpen: false,
  checkModal: false,
  videoIsEnd: false,
  takeCanvas: document.querySelector(".prob_canvas"),
  takeCanvasContainer: document.querySelector(".popup_container"),
  stopped: false,
  positionForTextOnTexture: null,
  leaveFromWindow: false,
  funcInit: null,
  modalWW: this.takeCanvas ? this.takeCanvas.offsetWidth : null,
  modalWH: this.takeCanvas ? this.takeCanvas.offsetHeight : null,
  takeProbCanvas: document.querySelector(".modal-canvas-block"),
  takeFakeCanvas: document.querySelector(".fake-canvas"),
  cameraDefaultPosition: new THREE.Vector3(0, 0.00541, 0.5)
}

const global = {
  cameraPositionNow: null,
  iForPositionZ: null,
  elapsedTime: null,
  scrollWhere: null,
  thisPos: null,
  arrForTexts: [],
  arrForSubTexts: [],
  arrForMesh: [],
  arrForGroup: [],
  camera: null,
  checkModal: false,
  videoIsEnd: true,
  takeCanvas: document.querySelector("#scene"),
  stopped: false,
  positionForTextOnTexture: null,
  leaveFromWindow: false,
  funcInit: null,
  hamburgerIsOpen: false,
  openSecondTunnel: false
}

const navVideo = document.querySelector('.video-nav'),
section = document.querySelector('#newSection')

section.append(navVideo)


// const videoPlayer = document.querySelector('video')
// videoPlayer.play()
// videoPlayer.pause()

const loadManager = new THREE.LoadingManager()
const loader = new THREE.TextureLoader(loadManager)

const body = document.querySelector('body')

const raycaster = new THREE.Raycaster()

var ww = window.innerWidth
var wh = window.innerHeight

var isMobile = ww < 500

const mouse = new THREE.Vector2()
let currentIntersect = null
let currentName = null
const mouse1 = new THREE.Vector2()
let currentIntersect1 = null
let currentName1 = null

const hamburger = document.querySelector(".hamburger"),
      hamburgerContainer = document.querySelector('.hamburger-container'),
      iris = document.getElementById('iris');

let delayedCall

hamburger.addEventListener("click", () => {
  if(!global.videoIsEnd) {
    global.videoIsEnd = true
    // const videoBg = document.querySelector('#video-bg')
    // // closeVideoBtn.remove()
    // setTimeout(() => {
    //   videoBg.remove()
    // }, 1500)
  }
  if (globalForModal.takeProbCanvas.className == "modal-canvas-block hide") {
    globalForModal.takeProbCanvas.classList.remove("hide")
    globalForModal.takeProbCanvas.classList.add("show")
    iris.classList.add('collapse')
    iris.classList.remove('transition')
    delayedCall = gsap.delayedCall(0.5, () => {
      iris.classList.remove('collapse')
    })
    // delayedCall.kill()
    hamburgerContainer.classList.add('hamburger-close')
    globalForModal.secondTunnelIsOpen = true
  } else if (globalForModal.takeProbCanvas.className == "modal-canvas-block show") {
    globalForModal.takeProbCanvas.classList.remove("show")
    globalForModal.takeProbCanvas.classList.add("hide")
    iris.classList.remove('collapse')
    iris.classList.add('transition')
    globalForModal.secondTunnelIsOpen = false
    hamburgerContainer.classList.remove('hamburger-close')
  }
})

const video = document.querySelector('.video')

const btnMusic = document.querySelector('.btn-music')
let music = false

btnMusic.addEventListener("click", () => {
  const imgAudio = document.querySelector(".btn-music img")
  if(!music) {
    video.muted = false
    music = true
    imgAudio.src = 'img/sound/AudioOFFIcon.png'
  } else {
    video.muted = true
    music = false
    imgAudio.src = 'img/sound/AudioONIcon.png'
  }
})

// const closeVideoBtn = document.getElementById("closeVideoBtn")
// closeVideoBtn.addEventListener("click", () => {
//   globalForModal.takeProbCanvas.classList.add('show')
//   globalForModal.takeProbCanvas.classList.remove("hide")
//   global.videoIsEnd = true
//     const videoBg = document.querySelector('#video-bg')
//   closeVideoBtn.remove()
//   // setTimeout(() => {
//   //   videoBg.remove()
//   // }, 2500)
// })
// video.addEventListener('ended', () => {
//   // globalForModal.takeProbCanvas.classList.add('show')
//   // globalForModal.takeProbCanvas.classList.remove("hide")
//   const videoBg = document.querySelector('#video-bg')
//   closeVideoBtn.remove()
//   // setTimeout(() => {
//   //   videoBg.remove()
//   // }, 2500)
//   global.videoIsEnd = true
// })

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX / ww * 2 - 1
  mouse.y = - (event.clientY / wh) * 2 + 1
})

window.addEventListener(isMobile ? 'touch' : 'click', () => {
  if(currentIntersect) {
    if(global.videoIsEnd) {
      if(currentIntersect.object.name === 'NAMASTATE' ) {
        window.open('https://namastate.wpengine.com/', '_blank')
      } else {
        global.checkModal = true
        const element = document.createElement('div')
        element.classList.add("modal", "noselect")
        element.innerHTML = `
      <div class="modal-body"></div>
      <div class="modal_container">
        <div class="modal_close">
          <div class="modal_close_item">
              X
          </div> 
          </div>
          <h1 class="modal_title">
              ${currentName}
          </h1>
      <div>
    `
        document1.append(element)

        const modalBody = document.querySelectorAll(".modal-body").forEach(item => {
          item.addEventListener("click", () => {
            const modal = document.querySelector('.modal')

            if(modal) {
              modal.remove()
            }
            global.checkModal = false
          })
        })

        const deleteModal = document.querySelector(".modal_close")
        deleteModal.addEventListener("click", () => {
          const modal = document.querySelector('.modal')
          modal.remove()
          global.checkModal = false
        })
      }
    }
  }
})

globalForModal.takeCanvas.addEventListener('click', () => {
  if(currentIntersect1) {
    if(!globalForModal.checkModal && global.videoIsEnd) {
      if(currentIntersect1.object.name === 'NAMASTATE') {
        window.open('https://namastate.wpengine.com/', '_blank')
      } else {
        globalForModal.checkModal = true
        const element = document.createElement('div')
        element.classList.add("modal", "noselect")
        element.innerHTML = `
      <div class="modal-body"></div>
      <div class="modal_container">
          <div class="modal_close">
            <div class="modal_close_item">
                X
            </div>
            </div>
            <h1 class="modal_title">
                ${currentName1}
            </h1>
      <div>
    `
        document1.append(element)

        const modalBody = document.querySelectorAll(".modal-body").forEach(item => {
          item.addEventListener("click", () => {
            const modal = document.querySelector('.modal')

            if(modal) {
              modal.remove()
            }
            globalForModal.checkModal = false
          })
        })
        const deleteModal = document.querySelector(".modal_close")
        deleteModal.addEventListener("click", () => {
          const modal = document.querySelector('.modal')
          modal.remove()
          globalForModal.checkModal = false
        })
      }
    }
  }
})

let selectedObject = null, max = -0.15, min = 0.15
const colorF = new THREE.Color("#F3F0EF")
const colorB = new THREE.Color("#3B5971")

function ModalTunnel(texture, canvas, textTexture, textSubTexture, textureForTringle) {
  this.textTexture = textTexture
  this.textureForTringle = textureForTringle
  this.textSubTexture = textSubTexture
  this.texture = texture
  this.canvas = canvas

  this.raycaster = new THREE.Raycaster()

  this.init()
  this.createMesh()

  this.handleEvents()

  window.requestAnimationFrame(this.render.bind(this))
}

ModalTunnel.prototype.init = function() {

  this.speed = 1;
  this.prevTime = 0;
  this.modalContainer = document.querySelector(".modal-canvas-container")
  this.fakeCanvas = globalForModal.takeFakeCanvas
  this.modalWW = this.modalContainer.offsetWidth
  this.modalWH = this.modalContainer.offsetHeight
  this.mouse = {
    position: new THREE.Vector2(ww * 0.5,  wh * 0.5),
    ratio: new THREE.Vector2(0, 0),
    target: new THREE.Vector2(ww * 0.5,  wh * 0.5)
  };

  this.renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: this.canvas
  });
  this.renderer.setClearColor( "#F3F0EF" );
  this.renderer.setSize(ww ,wh)
  // this.renderer.gammaFactor = 5

  this.camera = new THREE.PerspectiveCamera(10.1, ww /wh, 0.03, 1.3)
  globalForModal.camera = this.camera
  this.camera.rotation.y = Math.PI
  this.camera.position.z = 0.5 // 0.25

  this.scene = new THREE.Scene()

  var light = new THREE.HemisphereLight( '#F3F0EF', '#F3F0EF', 1 )
  this.scene.add( light )

  this.addParticle()
};

ModalTunnel.prototype.addParticle = function() {
  this.plane = new THREE.PlaneBufferGeometry( .783, .96 )
  this.planeText = new THREE.PlaneBufferGeometry( .25, .2 )
  this.planeSubText = new THREE.PlaneGeometry( .15, .03 )
  this.particles = []
  this.text = []
  this.firText = [this.textTexture[0], 'NAMASTATE']
  this.secText = [this.textTexture[1], 'AWARENESS']
  this.thirText = [this.textTexture[2], 'JOURNEY']
  this.fourText = [this.textTexture[3], 'SENSORIA']
  this.fiveText = [this.textTexture[4], 'ALL GOODS']
  this.sixText = [this.textTexture[5], 'COMMUNITAS']
  this.sevenText = [this.textTexture[6], 'NAMA VISION']
  this.eightText = [this.textTexture[7], 'CONNECT']
  this.textSub = []
  this.textSub1 = [this.textSubTexture[0], 'mind']
  this.textSub2 = [this.textSubTexture[1], 'mind']
  this.textSub3 = [this.textSubTexture[2], 'exp']
  this.textSub4 = [this.textSubTexture[3], 'stream']
  this.textSub5 = [this.textSubTexture[4], 'shop']
  this.textSub6 = [this.textSubTexture[5], 'stay']
  this.textSub7 = [this.textSubTexture[6], 'discover']
  this.textSub8 = [this.textSubTexture[7], 'contact']
  this.textures = []
  this.texture1 = [this.texture[1]]
  this.texture2 = [this.texture[0]]
  this.texture3 = [this.texture[6]]
  this.texture4 = [this.texture[5]]
  this.texture5 = [this.texture[4]]
  this.texture6 = [this.texture[3]]
  this.texture7 = [this.texture[2]]

  for (var i = 0; i <= 49; i++) { // 49
    globalForModal.iForPositionZ = i
    this.textures.push(this.texture1, this.texture2,this.texture3,this.texture4,this.texture5,this.texture6, this.texture7)
    this.text.push(this.fiveText,this.fourText,this.thirText,this.secText,this.firText, this.eightText,this.sevenText, this.sixText)
    this.textSub.push(this.textSub5, this.textSub4, this.textSub3, this.textSub2,this.textSub1, this.textSub8, this.textSub7, this.textSub6)
    this.particles.push(new ModalParticle(this.scene, i, this.textures, this.plane, this.text[i],  this.planeText, this.planeSubText, this.textSub[i], this.textureForTringle))
  }
};

ModalTunnel.prototype.createMesh = function() {
  var points = []
  var i = 0
  var geometry = new THREE.Geometry()

  this.scene.remove(this.tubeMesh)

  for (i = 0; i < 5; i += 1) {
    points.push(new THREE.Vector3(0, 0, 2.75 * (i / 4)))
  }
  points[4].y = -0.05

  this.curve = new THREE.CatmullRomCurve3(points)
  this.curve.type = "catmullrom"

  geometry = new THREE.Geometry()
  geometry.vertices = this.curve.getPoints(70)
  this.splineMesh = new THREE.Line(geometry, new THREE.LineBasicMaterial())

  this.tubeGeometry = new THREE.TubeGeometry(this.curve, 70, 0.02, 30, false)
  this.tubeGeometry_o = this.tubeGeometry.clone()
};

ModalTunnel.prototype.handleEvents = function() {
  window.addEventListener('resize', this.onResize.bind(this), false)
  this.canvas.addEventListener('mousewheel', this.onMouseDown.bind(this), false);
  this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this), false);
  this.canvas.addEventListener('touchstart', this.onTouchStart.bind(this), false);
  this.canvas.addEventListener('touchmove', this.onTouchMove.bind(this), false);
  this.canvas.addEventListener('mouseleave', (event) => {
    globalForModal.leaveFromWindow = true
  }, false);
  this.canvas.addEventListener('mouseover', () => {
    globalForModal.leaveFromWindow = false
  })
  this.canvas.addEventListener("mousemove", (event) => {
    mouse1.x = ( (event.layerX - this.canvas.offsetLeft) / this.canvas.clientWidth ) * 2 - 1;
    mouse1.y = ( (event.layerY - this.canvas.offsetTop) / this.canvas.clientHeight ) * -2 + 1;
  })
};
let num2 = 100
let timerModalTunnel
ModalTunnel.prototype.onMouseDown = function() {
  if(event.deltaY > 0) {
    num2 += event.deltaY * 4.5;
    // scrollDown
    globalForModal.scrollWhere = 'down'
    gsap.to(this, 0, {
      speed: 550 + num2,
      ease: Power2.easeInOut
    })
    clearTimeout(timerModalTunnel)
    timerModalTunnel = setTimeout(() => {
      gsap.to(this, 0, {
        speed: 0,
        ease: Power2.easeInOut
      })
      globalForModal.scrollWhere = null
      num2 = 100
    }, 200)
  } else if (event.deltaY < 0) {
    //scrollTop
    num2 += event.deltaY * 4.5
    globalForModal.scrollWhere = 'top'
    gsap.to(this, 0, {
      speed: 550 + -(num2),
      ease: Power2.easeInOut
    })
    clearTimeout(timerModalTunnel)
    timerModalTunnel = setTimeout(() => {
      gsap.to(this, 0, {
        speed: 0,
        ease: Power2.easeInOut
      })
      num2 = 100
      globalForModal.scrollWhere = null
    }, 200)
  }
}

let x3 = null
let y3 = null

ModalTunnel.prototype.onTouchStart = function() {
  const firstTouch = event.touches[0]
  x3 = firstTouch.clientX
  y3 = firstTouch.clientY
}

ModalTunnel.prototype.onTouchMove = function() {
  if(!x3 || !y3) {
    return false
  }
  let y4 = event.touches[0].clientY

  let yDiff = y4 - y3

  if(yDiff > 0) {
    globalForModal.scrollWhere = 'down'

    gsap.to(this, 0, {
      speed: 500 + Math.random() * (3000 - 2700) + 2700,
      ease: Power2.easeInOut,
    })
    clearTimeout(timerModalTunnel)
    timerModalTunnel = setTimeout(() => {
      gsap.to(this, 0, {
        speed: 0,
        ease: Power2.easeInOut // Power1.easeInOut
      })
      globalForModal.scrollWhere = null
    }, 300)
  }
  else {
    globalForModal.scrollWhere = 'top'

    gsap.to(this, 0, {
      speed: 500 + Math.random() * (3000 - 2700) + 2700,
      ease: Power2.easeInOut,
    })
    clearTimeout(timerModalTunnel)
    timerModalTunnel = setTimeout(() => {
      gsap.to(this, 0, {
        speed: 0,
        ease: Power2.easeInOut, // Power1.easeInOut
      })
      globalForModal.scrollWhere = null
    }, 300)
  }
  x3 = null
  y3 = null
}

const popupContent = document.querySelector(".popup_content")

ModalTunnel.prototype.onResize = function() {
  ww = window.innerWidth;
  wh = window.innerHeight;

  isMobile = ww < 500;

  this.camera.aspect = ww / wh;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(ww, wh);
}

ModalTunnel.prototype.onMouseMove = function(e) {
  if (e.type === "mousemove"){
    this.mouse.target.x = e.clientX;
    this.mouse.target.y = e.clientY;
  } else {
    this.mouse.target.x = e.touches[0].clientX;
    this.mouse.target.y = e.touches[0].clientY;
  }
}
ModalTunnel.prototype.updateTunnelElementsByDistance = function(){

  // const startSize = 1;
  // const endSize = 0.3;

  const particlesMeasurement = [];

  let minD = Infinity;
  let maxD = -Infinity;

  for( const np of this.particles ){
    const nm = { d: np.mesh.position.distanceTo( this.camera.position ), p: np.mesh };
    if( nm.d > maxD ){ maxD = nm.d;}
    if( nm.d < minD ){ minD = nm.d;}
    particlesMeasurement.push( nm );
  }

  const MATH_PI_1_2 = Math.PI / 2;
  const RADIAN_RANGE = 0.02;
  const RADIAN_START = MATH_PI_1_2 + ( MATH_PI_1_2 - RADIAN_RANGE );

  for( const pm of particlesMeasurement ){
    const alphaLinier = pm.d / ( maxD - minD );
    const sinAlpha = Math.sin( RADIAN_START + RADIAN_RANGE * alphaLinier );

    const scaleAlpha = sinAlpha * 1.9; // 1.4

    pm.p.scale.set( scaleAlpha, scaleAlpha, scaleAlpha );
  }
};

ModalTunnel.prototype.updateCameraPosition = function() {
  this.mouse.position.x += (this.mouse.target.x - this.mouse.position.x) / 10
  this.mouse.position.y += (this.mouse.target.y - this.mouse.position.y) / 10

  this.mouse.ratio.x = (this.mouse.position.x / ww)
  this.mouse.ratio.y = (this.mouse.position.y / wh)

  const test1 = 0.000008;
  const test2 = test1 / 2;
  this.camera.rotation.y = Math.PI - (this.mouse.ratio.x * 0.1 - 0.05)
  this.camera.position.x = (this.mouse.ratio.x * test1 - test2);
  this.camera.position.y = -(this.mouse.ratio.y * test1 - test2) - -0.00541;
  globalForModal.cameraPositionNow = this.camera.position
  // if(globalForModal.secondTunnelIsOpen === false) {
  //   globalForModal.cameraPositionNow = globalForModal.cameraDefaultPosition
  //   this.camera.position.set(
  //     globalForModal.cameraDefaultPosition.x,
  //     globalForModal.cameraDefaultPosition.y,
  //     globalForModal.cameraDefaultPosition.z,
  //   )
  // }
}

ModalTunnel.prototype.updateCurve = function() {
  let i = 0;
  let index = 0;
  let vertice_o = null;
  let vertice = null;
  for (i = 0; i < this.tubeGeometry.vertices.length; i += 1) {
    vertice_o = this.tubeGeometry_o.vertices[i];
    vertice = this.tubeGeometry.vertices[i];
    index = Math.floor(i / 30);
    vertice.x += ((vertice_o.x + this.splineMesh.geometry.vertices[index].x) - vertice.x) / 1;
    vertice.y += ((vertice_o.y + this.splineMesh.geometry.vertices[index].y) - vertice.y) / 1;
  }
  this.tubeGeometry.verticesNeedUpdate = true;

  this.curve.points[1].x = -(0.6 * (1 - this.mouse.ratio.x) - 0.3) / 180;
  this.curve.points[2].x = (0.6 * (1 - this.mouse.ratio.x) - 0.3) / 35;
  this.curve.points[3].x = 0;
  this.curve.points[4].x = (0.6 * (1 - this.mouse.ratio.x) - 0.3) / 35;
  this.curve.points[1].y = -(0.6 * (1 - this.mouse.ratio.y) - 0.3) / 180;
  this.curve.points[2].y = (0.6 * (1 - this.mouse.ratio.y) - 0.3) / 35;
  this.curve.points[3].y = 0;
  this.curve.points[4].y = (0.6 * (1 - this.mouse.ratio.y) - 0.3) / 35;

  // console.log(this.curve.points[0].x, this.curve.points[1].x, this.curve.points[2].x, this.curve.points[3].x);

}

let selectedObject1 = null, scaleSelectedObject1

const changeSubTitles = (title, position = {x: null, y: null}, scale = {x: null, y: null}, z) => {
  gsap.to(title.scale, {x: scale.x, y: scale.y})
  gsap.to(title.rotation, {z})
  gsap.to(title.position, {x: position.x, y: position.y})
}

const changeTitles = (
  title, 
  position = null || {x: null, y: null}, 
  scale = null || {x: null, y: null},
  z = null
) => {
  gsap.to(title.scale, scale)
  position && gsap.to(title.position, position)
  z && gsap.to(title.rotation, {z})
}

ModalTunnel.prototype.render = function(time) {
  if(global.videoIsEnd && !globalForModal.leaveFromWindow) {
    this.updateCameraPosition();
  }

  this.updateTunnelElementsByDistance();

  this.updateCurve();

  for(var i = 0; i < this.particles.length; i++){
    this.particles[i].update(this);
    if(
        this.particles[i].burst
        &&
        this.particles[i].percent > 1
    ){
      this.particles.splice(i, 1)
      i--
    }
  }

  this.renderer.render(this.scene, this.camera);

  this.raycaster.setFromCamera(mouse1, this.camera)
  this.intersectsGroup = this.raycaster.intersectObjects(globalForModal.arrForGroup, true)
  this.intersectsText = this.raycaster.intersectObjects(globalForModal.arrForTexts)
  
  for (const object of globalForModal.arrForGroup) {
    if(!globalForModal.secondTunnelIsOpen) {
      gsap.to(object.children[0].rotation, { z: 0, duration: 2})
      gsap.to(this.mouse.ratio, { x: 0.5, y: 0.5, duration: 0})
      this.camera.rotation.y = Math.PI - (this.mouse.ratio.x * 0.1 - 0.05)
    }
    
    const titleName = object.children[0].children[0].material.alphaMap.name
    const subTitleName = object.children[0].children[1].material.alphaMap.name
    const titleObject = object.children[0].children[0]
    const subTitleObject = object.children[0].children[1]  
    
    switch (titleName) {
      case 'CONNECT' :
        changeTitles(titleObject, null, {x: 0.7, y: 0.25})
        break
      case 'AWARENESS' :
        changeTitles(titleObject, null, {x: 1.1, y: 0.25})
        break
      case 'JOURNEY' :
        changeTitles(titleObject, null, {x: 0.6, y: 0.25}, 0.03)
        break
      case 'COMMUNITAS' :
        changeTitles(titleObject, null, {x: 1.4, y: 0.3}, 0.03)
        break
      case 'SENSORIA' :
        changeTitles(titleObject, null, {x: 0.7, y: 0.25}, 0.02)
        break
      case 'ALL GOODS' :
        changeTitles(titleObject, null, {x: 0.85, y: 0.25}, 0.04)
        break
      case 'NAMA VISION' :
        changeTitles(titleObject, null, {x: 1.3, y: 0.3}, 0.02)
        break
      case 'NAMASTATE' :
        changeTitles(titleObject, {x: -0.13, y: -0.287}, {x: 1.4, y: 0.3}, -0.82)
        break
    }

    switch (subTitleName) {
      case 'mind' :
        changeSubTitles(subTitleObject, {x: 0.363, y: 0.19}, {x: 1.4, y: 1.5}, -1.58)
        break
      case 'exp' :
        changeSubTitles(subTitleObject, {x: 0.362, y: 0.19}, {x: 2.4, y: 1.5}, -1.59)
        break
      case 'stream' :
        changeSubTitles(subTitleObject, {x: 0.363, y: 0.19}, {x: 2.15, y: 1.5}, -1.58)
        break
      case 'shop' :
        changeSubTitles(subTitleObject, {x: 0.362, y: 0.192 }, {x: 2.6, y: 1.5}, -1.59)
        break
      case 'stay' :
        changeSubTitles(subTitleObject, {x: 0.362, y: 0.192}, {x: 2.5, y: 1.5}, -1.59)
        break
      case 'discover' :
        changeSubTitles(subTitleObject, {x: 0.362, y: 0.192}, {x: 2.1, y: 1.5}, -1.59)
        break
      case 'contact' :
        changeSubTitles(subTitleObject, {x: 0.362, y: 0.192}, {x: 2., y: 1.5}, -1.59)
        break
    }

    gsap.to(titleObject.material.color, {r: 1, g: 1, b: 1})
    gsap.to(subTitleObject.material, {opacity: 0, duration: 1})

    if(globalForModal.scrollWhere === 'down' || globalForModal.scrollWhere === 'top') {
      gsap.to(object.children[0].rotation, { z: Math.random() * (max - min) + min, duration: 2})
    }

    // console.log(this.curve.points[0].x,this.curve.points[1].x,this.curve.points[2].x,this.curve.points[3].x,this.curve.points[4].x,);

    gsap.to(object.scale, {x: 1, y: 1, duration: 3, })
    gsap.to(titleObject.scale, {x: .8, y: .3, duration: 1 })
  }

  if ( this.intersectsText.length > 0 ) {
      const res = this.intersectsText.filter(function (res) {
        return res.object;
      })[0];
      if (res && res.object) {
        selectedObject1 = res.object;
        scaleSelectedObject1 = selectedObject1.scale.x < 1 ? 0.15 : 0.05
        gsap.to(selectedObject1.scale, {
          x: selectedObject1.scale.x + scaleSelectedObject1, 
          y: selectedObject1.scale.y + 0.05, 
          duration: 1})
        currentName1 = selectedObject1.name
        if(selectedObject1.name === 'NAMASTATE') {
          gsap.to(selectedObject1.parent.children[1].material, {opacity: 0, duration: 1})
        } else {
          gsap.to(selectedObject1.parent.children[1].material, {opacity: 2.8, duration: 1})
          gsap.to(selectedObject1.parent.children[1].material.color , {r: 2, g: 2, b: 2, duration: 1})
        }

      }
  }

  if(this.intersectsText.length) {
    if(currentIntersect1 === null) {
    }
    currentIntersect1 = this.intersectsText[0]
  } else {
    if(currentIntersect1) {
    }
    currentIntersect1 = null
  }

  window.requestAnimationFrame(this.render.bind(this));

}

function ModalParticle(scene, i, texture, plane, text, textGeometry, textSubGeometry, textForSubTitle, textureForParticle ) {
  const radius = .022
  this.material = texture[i][0]
  text[0].name = text[1]
  textForSubTitle[0].name = textForSubTitle[1]
  if(i === 49) {
    this.material = this.material.clone()
    this.material.uniforms.uFirstColor.value = new THREE.Color("#bc6ef9") //bc6ef9
    this.material.uniforms.uSecondColor.value = new THREE.Color("#ffc919") //ffc919
    this.material.uniforms.uTexture.value = textureForParticle
  }
  this.material.transparent = true
  this.mesh = new THREE.Mesh(plane, this.material);

  this.mesh.scale.set(radius, radius, radius);
  this.mesh.position.set(0, 0, -2);
  this.percent = i * 0.02;
  this.burst =  false;
  this.offset = new THREE.Vector3(0, 0, 0);
  this.speed = 1;
  this.mesh.rotation.y = Math.PI
  this.mesh.name = i
  this.group = new THREE.Group()
  scene.add(this.group)

  if (!this.burst){
    this.speed *= 0.000001;
  }

  this.i = i

  this.textMaterial = new THREE.MeshBasicMaterial({
    alphaMap: text[0], // text[0]
    depthTest: false,
    side: THREE.FrontSide,
    transparent: true,
    opacity: 2
  })

  this.subTextMaterial = new THREE.MeshBasicMaterial({
    alphaMap: textForSubTitle[0],
    side: THREE.FrontSide,
    transparent: true,
    opacity: text[0].name === 'NAMASTATE' ? 0 : 2
  })

  this.textMesh = new THREE.Mesh(textGeometry, this.textMaterial)

  this.subTextMesh = new THREE.Mesh(textSubGeometry, this.subTextMaterial)
  this.mesh.add(this.textMesh, this.subTextMesh)

  this.textMesh.name = text[1]
  this.subTextMesh.name = textForSubTitle[1]
  if(text[0].name === 'NAMASTATE'){
    this.textMesh.position.set(-0.156, -0.26, 0.05)
    this.textMesh.rotation.set(0, 0, -0.8)
    this.subTextMesh.position.set(0.256, -0.13, 0.05)
    this.subTextMesh.rotation.set(0, 0, 0.9)
  }
  else {
    this.textMesh.position.set(0, 0.44, 0.05)
    this.subTextMesh.position.set(0.24, -0.15, 0.05)
    this.subTextMesh.rotation.set(0, 0, 0.95)
  }
  if (textForSubTitle[0].name === 'shop') {
    this.subTextMesh.position.set(0.24, -0.13, 0.05)
  } else if (textForSubTitle[0].name === 'stay') {
    this.subTextMesh.position.set(0.24, -0.13, 0.05)
  }
  globalForModal.arrForTexts.push(this.textMesh)
  globalForModal.arrForSubTexts.push(this.subTextMesh)
  globalForModal.arrForGroup.push(this.group)
  this.group.add(this.mesh)
  scene.add(this.group)
  gsap.to(this.group.position, {z: 10, duration: 0})
  
}

let scaleTimer

ModalParticle.prototype.update = function (tunnel) {
  if(globalForModal.scrollWhere === "down") {
    this.percent -= (this.speed  ) * (tunnel.speed)
  } else if(globalForModal.scrollWhere === "top") {
    this.percent += this.speed * (tunnel.speed)
  }
  this.pos = tunnel.curve.getPoint(1 - ((this.percent + 999999)%1)).add(this.offset)

  if(globalForModal.secondTunnelIsOpen) {
    scaleTimer = gsap.delayedCall(0.1, () => {
      gsap.to(this.group.position, {z: 0, duration: 1})
    })
  } else {
    if(scaleTimer) scaleTimer.kill()
    gsap.to(this.group.position, {z: 30, duration: 1})
  } 
  

  globalForModal.thisPos = this.pos
  this.mesh.position.x = this.pos.x - 0.000;
  this.mesh.position.y = this.pos.y - 0.0013;
  this.mesh.position.z =  0.000001 + this.pos.z
}

window.onload = function() {
  const textTexture = [
    loader.load("/img/texture/clearTexture/namastate.png"),
    loader.load("/img/texture/clearTexture/awarenes.png"),
    loader.load("/img/texture/clearTexture/journey.png"),
    loader.load("/img/texture/clearTexture/sensoria.png"),
    loader.load("/img/texture/clearTexture/all_goods.png"),
    loader.load("/img/texture/clearTexture/communitas.png"),
    loader.load("/img/texture/clearTexture/nama.png"),
    loader.load("/img/texture/clearTexture/connect.png"),
  ]

  const textSubTexture = [
    loader.load("/img/texture/clearTexture/mind.png"),
    loader.load("/img/texture/clearTexture/mind.png"),
    loader.load("/img/texture/clearTexture/exp.png"),
    loader.load("/img/texture/clearTexture/stream.png"),
    loader.load("/img/texture/clearTexture/shop.png"),
    loader.load("/img/texture/clearTexture/stay.png"),
    loader.load("/img/texture/clearTexture/discover.png"),
    loader.load("/img/texture/clearTexture/contact.png"),
  ]

  const textureForTringle = loader.load("/img/texture/clearTexture/Chunnel_1.png")

  const vertexShader = `
    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;
    
    attribute vec3 position;
    attribute vec2 uv;
    
    varying vec2 vUv;
    varying float vElevation;
    
    void main()
    {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      
      vUv = uv;
    }
  `
  const fragmentShader = `
    precision mediump float;
        
    uniform sampler2D uTexture;
    uniform vec3 uFirstColor;
    uniform vec3 uSecondColor;
    
    varying vec2 vUv;
    varying float vElevation;
    
    void main ()
    {
      vec4 textureColor = texture2D(uTexture, vUv);
      if(  textureColor.a < 0.5 ){ discard; }
      gl_FragColor = vec4(mix(uFirstColor, uSecondColor, vUv.x), textureColor.a );          
    }
  `

  const materials = [
    new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTexture: {value: textureForTringle},
        uFirstColor: {value: new THREE.Color('#30ff46')},
        uSecondColor: {value: new THREE.Color('#7a38f9')}
      }
    }),
    new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTexture: {value: textureForTringle},
        uFirstColor: {value: new THREE.Color('#0041ff')},
        uSecondColor: {value: new THREE.Color('#ff2aa3')}
      }
    }),
    new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTexture: {value: textureForTringle},
        uFirstColor: {value: new THREE.Color('#8ce5e5')},
        uSecondColor: {value: new THREE.Color('#00a500')}
      }
    }),
    new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTexture: {value: textureForTringle},
        uFirstColor: {value: new THREE.Color('#bc6ef9')},
        uSecondColor: {value: new THREE.Color('#207ff4')}
      }
    }),
    new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      
      uniforms: {
        uTexture: {value: textureForTringle},
        uFirstColor: {value: new THREE.Color('#ffc700')},
        uSecondColor: {value: new THREE.Color('#9d07bb')}
      }
    }),
    new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTexture: {value: textureForTringle},
        uFirstColor: {value: new THREE.Color('#ff644f')},
        uSecondColor: {value: new THREE.Color('#8e72ff')}
      }
      
    }),
    new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTexture: {value: textureForTringle},
        uFirstColor: {value: new THREE.Color('#e238f4')},
        uSecondColor: {value: new THREE.Color('#f66101')}
      }
    })
  ]

  loadManager.onLoad = () => {
    // window.tunnel = new Tunnel(materials,document.querySelector("#scene"), textTexture, textSubTexture)
    window.tunnelModal = new ModalTunnel(materials, document.querySelector(".prob_canvas"), textTexture, textSubTexture, textureForTringle)
  }
}

// 
// hamburger.addEventListener("click", () => {
//   if(!global.videoIsEnd) {
//     global.videoIsEnd = true
//     html.classList.add('hidden-on')
//     html.classList.remove('hidden-off')
//   }
//   if (global.takeContainerCanvas.className == "modal-canvas-block hide-tunnel" || global.takeContainerCanvas.className == "modal-canvas-block hide-tunnel animate-canvas-out") {
//     global.takeContainerCanvas.classList.remove("hide-tunnel")
//     global.takeContainerCanvas.classList.add("show")
//     iris.classList.add('collapse')
//     iris.classList.remove('transition')
//     delayedCall = gsap.delayedCall(0.1, () => {
//       iris.classList.remove('collapse')
//     })
//     global.takeContainerCanvas.classList.remove('animate-canvas-out')
//     global.takeContainerCanvas.classList.add('animate-canvas')
//     hamburgerContainer.classList.add('hamburger-close')
//     global.contentWrapper.append(hamburger)
//     global.html.classList.add('hidden-on')
//     global.html.classList.remove('hidden-off')
//     global.tunnelIsOpen = true
//   } else if (global.takeContainerCanvas.className == "modal-canvas-block show animate-canvas" || global.takeContainerCanvas.className == "modal-canvas-block show") {
//       global.takeContainerCanvas.classList.remove('animate-canvas')
//     global.takeContainerCanvas.classList.remove("show")
//     global.takeContainerCanvas.classList.add("hide-tunnel")
//     iris.classList.remove('collapse')
//     iris.classList.add('transition')
//     global.takeContainerCanvas.classList.add('animate-canvas-out')
//     global.html.classList.add('hidden-off')
//     global.headerNav.append(hamburger)
//     hamburgerContainer.classList.remove('hamburger-close')
//     global.tunnelIsOpen = false
//   }
// })
// 




