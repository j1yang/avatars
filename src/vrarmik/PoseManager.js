import VRTrackingReferences from './VRTrackingReferences.js';

class PoseManager
	{
		constructor(rig) {
			this.vrTransforms = new VRTrackingReferences();
		  // this.OnCalibrateListener = null;

      // Oculus uses a different reference position -> 0 is the reference head position if the user is standing in the middle of the room. 
      // In OpenVR, the 0 position is the ground position and the user is then at (0, playerHeightHmd, 0) if he is in the middle of the room, so I need to correct this for shoulder calculation 
      // this.vrSystemOffsetHeight = 0.0;

			this.referencePlayerHeightHmd = 1.7;
			this.referencePlayerWidthWrist = 1.39;
			this.playerHeightHmd = 1.70;
			this.playerWidthWrist = 1.39;
			// this.playerWidthShoulders = 0.31;
      // this.loadPlayerSizeOnAwake = false;

      // PoseManager.Instance = this;
    }
	}

export default PoseManager;
