import 'https://cdn.jsdelivr.net/npm/three@0.139.2/examples/js/loaders/EXRLoader.js';

AFRAME.registerComponent('avatar', {
  schema: {
    modelName: { type: 'string' },
    fingers: { type: 'bool', default: true },
    hair: { type: 'bool', default: true },
    decapitate: { type: 'bool', default: false },
    visemes: { type: 'bool', default: true },
    muted: { type: 'bool', default: true },
    debug: { type: 'bool', default: false },
  },

  init: function () {
    this.player = document.querySelector('#player');
    this.head = document.querySelector('#head');
    this.leftHand = document.querySelector('#leftHand');
    this.rightHand = document.querySelector('#rightHand');

    // Use Mutation Observers to catch tracked-controls-webxr being set
    this.leftHandControls;
    const leftWatcher = new MutationObserver(() => {
      this.leftHandControls = this.leftHand.components['tracked-controls-webxr'];
      leftWatcher.disconnect();
    });
    leftWatcher.observe(this.leftHand, { attributes: true });

    this.rightHandControls;
    const rightWatcher = new MutationObserver(() => {
      this.rightHandControls = this.leftHand.components['tracked-controls-webxr'];
      rightWatcher.disconnect();
    });
    rightWatcher.observe(this.rightHand, { attributes: true });

    this.loadModel();
  },

  loadModel: async function () {
    const model = await new Promise((res, rej) => {
      new THREE.GLTFLoader().load(this.data.modelName, gltf => {
        gltf.frustumCulled = false;
        const meshes = gltf.scene.children[0].children;
        meshes.forEach(o => {
          if (o.type === 'SkinnedMesh') {
            o.material.side = THREE.FrontSide;
            o.frustumCulled = false;
          }
        })
        AFRAME.scenes[0].object3D.add(gltf.scene);
        res(gltf);
      }, xhr => {}, rej);
    });

    const microphoneMediaStream = await navigator.mediaDevices.getUserMedia({audio: true});
    this.avatar = new Avatar(model, { // model is the gltf object that includes the scene, can use https://github.com/exokitxr/model-loader
      fingers: this.data.fingers, // Animate fingers
      hair: this.data.hair, // Animate hair
      decapitate: this.data.decapitate,
      visemes: this.data.visemes, // Animate visemes (blink, mouth, etc.)
      microphoneMediaStream: microphoneMediaStream,
      muted: this.data.muted, // false to passthrough microphone audio
      debug: this.data.debug, // add debug bone geometry
    });
  },

  tick: function (time, timeDelta) {
    if (!this.avatar) return;

    const playerOffset = this.player.object3D.position;
    this.avatar.inputs.hmd.position.copy(this.head.object3D.position.add(playerOffset));
    this.avatar.inputs.hmd.quaternion.copy(this.head.object3D.quaternion);
    this.avatar.inputs.leftGamepad.position.copy(this.leftHand.object3D.position.add(playerOffset));
    this.avatar.inputs.leftGamepad.quaternion.copy(this.leftHand.object3D.quaternion);
    this.avatar.inputs.rightGamepad.position.copy(this.rightHand.object3D.position.add(playerOffset));
    this.avatar.inputs.rightGamepad.quaternion.copy(this.rightHand.object3D.quaternion);

    if (this.leftHandControls.buttonStates[0]) {
      this.avatar.inputs.leftGamepad.pointer = this.leftHandControls.buttonStates[0].value;
      this.avatar.inputs.leftGamepad.grip = this.leftHandControls.buttonStates[1].value;
    }
    
    if (this.rightHandControls.buttonStates[0]) {
      this.avatar.inputs.rightGamepad.pointer = this.rightHandControls.buttonStates[0].value;
      this.avatar.inputs.rightGamepad.grip = this.rightHandControls.buttonStates[1].value;
    }

    this.avatar.setFloorHeight(0) // sets the floor height that exokit uses to determine the pose
 
    this.avatar.update();
  }
});

AFRAME.registerComponent('smooth-locomotion', {
  schema: {
    speed: { type: 'float', default: 2 },
    active: { type: 'boolean', default: false },
    fly: { type: 'boolean', default: false },
  },
  init: function () {
    // Do nothing if this controller isn't meant to smooth locomote
    if (!this.data.active) return;

    // Get scene element references
    this.player = document.querySelector('#player');
    this.head = document.querySelector('#head');
    var leftHand = document.querySelector('#leftHand');

    // Set up variables to store controller input data and three.js data
    this.moveX = 0;
    this.moveY = 0;
    this.moveVector = new THREE.Vector3();
    this.headRot = new THREE.Euler(0, 0, 0, 'YXZ'); // Y rotations will be applied first

    // Hook up event listeners for the relevant movement input events.
    // Will try to read thumbstick input before trackpad input.
    leftHand.addEventListener('axismove', event => {
      this.moveX = event.detail.axis[2] != 0 ? event.detail.axis[2] : event.detail.axis[0];
      this.moveY = event.detail.axis[3] != 0 ? event.detail.axis[3] : event.detail.axis[1];
    });
  },
  tick: function (time, timeDelta) {
    // Do nothing if this controller isn't meant to smooth locomote
    if (!this.data.active) return;

    // If there's input coming in, move the player
    if (this.moveX + this.moveY != 0)
      this.move(timeDelta / 1000);
  },
  move: function (dt) {
    // Get our initial move vector and normalize it
    this.moveVector.set(this.moveX, 0, this.moveY).normalize(); 
    // Store our head rotation into our Euler variable
    this.headRot.setFromQuaternion(head.object3D.quaternion);
    // If we don't want to fly, this zeroes out any movement that isn't side-to-side
    if (!this.data.fly) this.headRot.set(0, this.headRot.y, 0);
    // Scale our movement vector based on speed
    const scaledMovement = this.moveVector.multiplyScalar(this.data.speed * dt);
    // Adjust our vector based on where we're looking and then move the player
    player.object3D.position.add(scaledMovement.applyEuler(this.headRot));
  },
});

AFRAME.registerComponent('exr-background', {
  schema: {
    url: { type: 'string' }
  },

  init: function () {
    const exr = new THREE.EXRLoader().load(
      this.data, 
      tex => { 
        tex.mapping = THREE.EquirectangularReflectionMapping;
        this.el.sceneEl.object3D.background = tex;
      }, 
      null, null);
  }
});
