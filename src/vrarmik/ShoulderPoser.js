import * as THREE from 'three';
import {Helpers} from './Unity.js';

const rightVector = new THREE.Vector3(1, 0, 0);
const z180Quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);

const localVector = new THREE.Vector3();
const localVector2 = new THREE.Vector3();
const localVector3 = new THREE.Vector3();
const localVector4 = new THREE.Vector3();
const localQuaternion = new THREE.Quaternion();
const localQuaternion2 = new THREE.Quaternion();
const localQuaternion3 = new THREE.Quaternion();
const localEuler = new THREE.Euler();
const localEuler2 = new THREE.Euler();

class ShoulderPoser
	{
		constructor(rig, shoulder) {
			this.rig = rig;
			this.shoulder = shoulder;
			this.poseManager = rig.poseManager;
			this.vrTransforms = this.poseManager.vrTransforms;

      // this.headNeckDirectionVector = new Vector3(1.0894440904962721e-10, -0.06860782711996793, -0.0006757629250115499).normalize();
			// this.headNeckDistance = 0.06861115505261682;
			// this.neckShoulderDistance = new Vector3(3.122724301363178e-10, -0.1953215129534993, 0.02834002902116923);

			// this.maxDeltaHeadRotation = 80;

			// this.distinctShoulderRotationLimitForward = 33;

			// this.distinctShoulderRotationLimitBackward = 0;

			// this.distinctShoulderRotationLimitUpward = 33;
			// this.distinctShoulderRotationMultiplier = 30;

	  	// this.rightRotationStartHeight = 0;
			// this.rightRotationHeightFactor = 142;
			// this.rightRotationHeadRotationFactor = 0.3;
			// this.rightRotationHeadRotationOffset = -20;

			// this.startShoulderDislocationBefore = 0.005;

			// this.ignoreYPos = true;
		  // this.autoDetectHandsBehindHead = true;
			// this.clampRotationToHead = true;
		  // this.enableDistinctShoulderRotation = true;
			// this.enableShoulderDislocation = true;


			// this.handsBehindHead = false;

			// this.clampingHeadRotation = false;
			// this.shoulderDislocated = false;
			// this.shoulderRightRotation;

			// this.lastAngle = Vector3.zero;

			// this.leftShoulderAnkerStartLocalPosition = new Vector3();
			// this.rightShoulderAnkerStartLocalPosition = new Vector3();
		}

		/* Start() {
			this.leftShoulderAnkerStartLocalPosition = this.shoulder.leftShoulderAnchor.localPosition.clone();
			this.rightShoulderAnkerStartLocalPosition = this.shoulder.rightShoulderAnchor.position.clone();
		} */

		/* onCalibrate()
		{
			this.shoulder.leftArm.setArmLength((avatarTrackingReferences.leftHand.position - this.shoulder.leftShoulderAnchor.position)
				.magnitude);
			this.shoulder.rightArm.setArmLength((avatarTrackingReferences.rightHand.position - this.shoulder.rightShoulderAnchor.position)
				.magnitude);
		} */

		Update()
		{
      this.shoulder.proneFactor = this.getProneFactor();
      this.shoulder.prone = this.shoulder.proneFactor > 0;
      if (this.shoulder.prone) {
        this.shoulder.lastProneTimestamp = Date.now();
      } else {
        this.shoulder.lastStandTimestamp = Date.now();
      }

      this.updateHips();

			// this.shoulder.transform.rotation = Quaternion.identity;
			// this.positionShoulder();
			this.rotateShoulderBase();

			/* if (this.enableDistinctShoulderRotation)
			{
				this.rotateLeftShoulder(rotation);
				this.rotateRightShoulder(rotation);
			} */

			/* if (this.enableShoulderDislocation)
			{
				this.clampShoulderHandDistance();
			}
			else
			{
				this.shoulder.leftArm.transform.localPosition = Vector3.zero;
				this.shoulder.rightArm.transform.localPosition = Vector3.zero;
			} */

			this.updateNeck();

			//Debug.DrawRay(this.shoulder.transform.position, this.shoulder.transform.forward);
		}

		updateHips() {
		  const hmdRotation = localQuaternion.copy(this.vrTransforms.head.quaternion)
        .multiply(z180Quaternion);
      /* const hmdXYRotation = localQuaternion2.setFromRotationMatrix(localMatrix.lookAt(
      	new THREE.Vector3(),
      	new THREE.Vector3(0, 0, -1).applyQuaternion(hmdRotation),
      	new THREE.Vector3(0, 1, 0).applyQuaternion(hmdRotation)
      )); */
      const hmdEuler = localEuler.setFromQuaternion(hmdRotation, 'YXZ');
      hmdEuler.x = 0;
      hmdEuler.z = 0;
      const hmdXYRotation = localQuaternion2.setFromEuler(hmdEuler);
      hmdXYRotation.multiply(localQuaternion3.setFromAxisAngle(rightVector, this.shoulder.proneFactor * Math.PI/2));

			
      if (!this.rig.legsManager.leftLeg.standing && !this.rig.legsManager.rightLeg.standing) {
        const jumpFactor = 1-Math.min(this.rig.legsManager.leftLeg.standFactor, this.rig.legsManager.rightLeg.standFactor);
        hmdXYRotation.multiply(localQuaternion3.setFromAxisAngle(rightVector, jumpFactor * Math.PI/4));
      } else {
      	const standFactor = Math.min(this.rig.legsManager.leftLeg.standFactor, this.rig.legsManager.rightLeg.standFactor);
      	hmdXYRotation.multiply(localQuaternion3.setFromAxisAngle(rightVector, (1-standFactor) * Math.PI/4));
      }

      const headPosition = localVector.copy(this.vrTransforms.head.position)
        .sub(localVector2.copy(this.shoulder.eyes.position).applyQuaternion(hmdRotation));
		  const neckPosition = headPosition.sub(localVector2.copy(this.shoulder.head.position).applyQuaternion(hmdRotation));
		  const chestPosition = neckPosition.sub(localVector2.copy(this.shoulder.neck.position).applyQuaternion(hmdXYRotation));
		  const spinePosition = chestPosition.sub(localVector2.copy(this.shoulder.transform.position).applyQuaternion(hmdXYRotation));
		  const hipsPosition = spinePosition.sub(localVector2.copy(this.shoulder.spine.position).applyQuaternion(hmdXYRotation));

      this.shoulder.hips.position.copy(hipsPosition);
      this.shoulder.hips.quaternion.copy(hmdXYRotation);
      Helpers.updateMatrix(this.shoulder.hips);
      this.shoulder.hips.matrixWorld.copy(this.shoulder.hips.matrix);
      Helpers.updateMatrixWorld(this.shoulder.spine);
      Helpers.updateMatrixWorld(this.shoulder.transform);
		}

		updateNeck() {
			const hmdRotation = localQuaternion.copy(this.vrTransforms.head.quaternion)
		    .multiply(z180Quaternion);
      const hmdEuler = localEuler.setFromQuaternion(hmdRotation, 'YXZ');
      hmdEuler.x = 0;
      hmdEuler.z = 0;
      const hmdXYRotation = localQuaternion2.setFromEuler(hmdEuler);

      this.shoulder.neck.quaternion.copy(hmdXYRotation)
        .premultiply(Helpers.getWorldQuaternion(this.shoulder.neck.parent, localQuaternion3).invert());
      Helpers.updateMatrixMatrixWorld(this.shoulder.neck);

      this.shoulder.head.quaternion.copy(hmdRotation)
        .premultiply(Helpers.getWorldQuaternion(this.shoulder.head.parent, localQuaternion3).invert());
      Helpers.updateMatrixMatrixWorld(this.shoulder.head);

      Helpers.updateMatrixWorld(this.shoulder.eyes);
		}

		rotateShoulderBase()
		{
			const angleY = this.getCombinedDirectionAngleUp();

			// const targetRotation = new Vector3(0, angle, 0);

			/* if (this.autoDetectHandsBehindHead)
			{
				this.detectHandsBehindHead(targetRotation);
			} */

			/* if (this.clampRotationToHead)
			{ */
				// angleY = this.clampHeadRotationDeltaUp(angleY);
			// }

			this.shoulder.transform.quaternion.setFromEuler(localEuler.set(0, angleY, 0, 'YXZ'))
			  .premultiply(
			  	localQuaternion.copy(this.shoulder.hips.quaternion)
			      .multiply(z180Quaternion)
			  );
			/* this.shoulder.transform.quaternion.multiply(localQuaternion3.setFromAxisAngle(rightVector, this.shoulder.proneFactor * Math.PI/2));
			if (!this.rig.legsManager.leftLeg.standing && !this.rig.legsManager.rightLeg.standing) {
        const jumpFactor = 1-Math.min(this.rig.legsManager.leftLeg.standFactor, this.rig.legsManager.rightLeg.standFactor);
        this.shoulder.transform.quaternion.multiply(localQuaternion3.setFromAxisAngle(rightVector, jumpFactor * Math.PI/4));
      } else {
      	const standFactor = Math.min(this.rig.legsManager.leftLeg.standFactor, this.rig.legsManager.rightLeg.standFactor);
      	this.shoulder.transform.quaternion.multiply(localQuaternion3.setFromAxisAngle(rightVector, (1-standFactor) * Math.PI/4));
      } */
      this.shoulder.transform.quaternion
			  .premultiply(Helpers.getWorldQuaternion(this.shoulder.transform.parent, localQuaternion).invert());
			Helpers.updateMatrixMatrixWorld(this.shoulder.transform);
      Helpers.updateMatrixWorld(this.shoulder.leftShoulderAnchor);
      Helpers.updateMatrixWorld(this.shoulder.rightShoulderAnchor);
		}

		getCombinedDirectionAngleUp()
		{
			const hipsRotation = localQuaternion.copy(this.shoulder.hips.quaternion)
        .multiply(z180Quaternion);
			const hipsRotationInverse = localQuaternion2.copy(hipsRotation)
			  .invert();

			const distanceLeftHand = localVector.copy(this.vrTransforms.leftHand.position)
			  .sub(this.vrTransforms.head.position)
			  .applyQuaternion(hipsRotationInverse);
			const distanceRightHand = localVector2.copy(this.vrTransforms.rightHand.position)
			  .sub(this.vrTransforms.head.position)
			  .applyQuaternion(hipsRotationInverse);

			distanceLeftHand.y = 0;
			distanceRightHand.y = 0;

			const leftBehind = distanceLeftHand.z > 0;
			const rightBehind = distanceRightHand.z > 0;
			if (leftBehind) {
				distanceLeftHand.z *= rightBehind ? -2 : -1;
			}
			if (rightBehind) {
				distanceRightHand.z *= leftBehind ? -2 : -1;
			}

			const combinedDirection = localVector.addVectors(distanceLeftHand.normalize(), distanceRightHand.normalize());
			return Math.atan2(combinedDirection.x, combinedDirection.z);
		}

		getProneFactor() {
      return 1 - Math.min(Math.max((this.vrTransforms.head.position.y - this.rig.height*0.3)/(this.rig.height*0.3), 0), 1);
		}
	}

export default ShoulderPoser;
