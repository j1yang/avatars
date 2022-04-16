export default class Controls {
  constructor(renderer) {
    // Controller input will run through here
    this.input = {
      active: false,
      left: {
        targetRay: null,
        grip: null,
        buttons: [],
        axes: [],
      },
      right: {
        targetRay: null,
        grip: null,
        buttons: [],
        axes: [],
      },
    };

    this.renderer = renderer;

    // Connect up controllers and visualize with cubes

    this.controller1 = renderer.xr.getController(0);
    this.controller1.addEventListener('connected', e => {
      this.controller1.gamepad = e.data.gamepad;
      this.input[e.data.handedness].targetRay = this.controller1;
    });
    this.controller1Grip = renderer.xr.getControllerGrip(0);
    this.controller1Grip.addEventListener('connected', e => {
      this.input[e.data.handedness].grip = this.controller1Grip;
    });

    this.controller2 = renderer.xr.getController(1);
    this.controller2.addEventListener('connected', e => {
      this.controller2.gamepad = e.data.gamepad;
      this.input[e.data.handedness].targetRay = this.controller2;
    });
    this.controller2Grip = renderer.xr.getControllerGrip(1);
    this.controller2Grip.addEventListener('connected', e => {
      this.input[e.data.handedness].grip = this.controller2Grip;
      this.input.active = true;
    });
  }

  getInput() {
    const session = this.renderer.xr.getSession();

    if (session) {
      session.inputSources.forEach(source => {
        if (source.handedness === 'left') {
          this.input.left.buttons = source.gamepad.buttons.slice();
          this.input.left.axes = source.gamepad.axes.slice();
        } else if (source.handedness === 'right') {
          this.input.right.buttons = source.gamepad.buttons.slice();
          this.input.right.axes = source.gamepad.axes.slice();
        }
      });
    }
  }
}
