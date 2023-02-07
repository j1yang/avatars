import * as THREE from "three";
/*! (c) 2019-2021 pixiv Inc. - https://github.com/pixiv/three-vrm/blob/release/LICENSE */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function n(e, t, n2, i) {
  return new (n2 || (n2 = Promise))(function(r, o2) {
    function s(e2) {
      try {
        l(i.next(e2));
      } catch (e3) {
        o2(e3);
      }
    }
    function a(e2) {
      try {
        l(i.throw(e2));
      } catch (e3) {
        o2(e3);
      }
    }
    function l(e2) {
      var t2;
      e2.done ? r(e2.value) : (t2 = e2.value, t2 instanceof n2 ? t2 : new n2(function(e3) {
        e3(t2);
      })).then(s, a);
    }
    l((i = i.apply(e, t || [])).next());
  });
}
var o;
!function(e) {
  e[e.NUMBER = 0] = "NUMBER", e[e.VECTOR2 = 1] = "VECTOR2", e[e.VECTOR3 = 2] = "VECTOR3", e[e.VECTOR4 = 3] = "VECTOR4", e[e.COLOR = 4] = "COLOR";
}(o || (o = {}));
new THREE.Vector2();
new THREE.Vector3();
new THREE.Vector4();
new THREE.Color();
var u;
!function(e) {
  var t, n2, i, r, o2, s;
  (t = e.BlendShapePresetName || (e.BlendShapePresetName = {})).A = "a", t.Angry = "angry", t.Blink = "blink", t.BlinkL = "blink_l", t.BlinkR = "blink_r", t.E = "e", t.Fun = "fun", t.I = "i", t.Joy = "joy", t.Lookdown = "lookdown", t.Lookleft = "lookleft", t.Lookright = "lookright", t.Lookup = "lookup", t.Neutral = "neutral", t.O = "o", t.Sorrow = "sorrow", t.U = "u", t.Unknown = "unknown", (n2 = e.FirstPersonLookAtTypeName || (e.FirstPersonLookAtTypeName = {})).BlendShape = "BlendShape", n2.Bone = "Bone", (i = e.HumanoidBoneName || (e.HumanoidBoneName = {})).Chest = "chest", i.Head = "head", i.Hips = "hips", i.Jaw = "jaw", i.LeftEye = "leftEye", i.LeftFoot = "leftFoot", i.LeftHand = "leftHand", i.LeftIndexDistal = "leftIndexDistal", i.LeftIndexIntermediate = "leftIndexIntermediate", i.LeftIndexProximal = "leftIndexProximal", i.LeftLittleDistal = "leftLittleDistal", i.LeftLittleIntermediate = "leftLittleIntermediate", i.LeftLittleProximal = "leftLittleProximal", i.LeftLowerArm = "leftLowerArm", i.LeftLowerLeg = "leftLowerLeg", i.LeftMiddleDistal = "leftMiddleDistal", i.LeftMiddleIntermediate = "leftMiddleIntermediate", i.LeftMiddleProximal = "leftMiddleProximal", i.LeftRingDistal = "leftRingDistal", i.LeftRingIntermediate = "leftRingIntermediate", i.LeftRingProximal = "leftRingProximal", i.LeftShoulder = "leftShoulder", i.LeftThumbDistal = "leftThumbDistal", i.LeftThumbIntermediate = "leftThumbIntermediate", i.LeftThumbProximal = "leftThumbProximal", i.LeftToes = "leftToes", i.LeftUpperArm = "leftUpperArm", i.LeftUpperLeg = "leftUpperLeg", i.Neck = "neck", i.RightEye = "rightEye", i.RightFoot = "rightFoot", i.RightHand = "rightHand", i.RightIndexDistal = "rightIndexDistal", i.RightIndexIntermediate = "rightIndexIntermediate", i.RightIndexProximal = "rightIndexProximal", i.RightLittleDistal = "rightLittleDistal", i.RightLittleIntermediate = "rightLittleIntermediate", i.RightLittleProximal = "rightLittleProximal", i.RightLowerArm = "rightLowerArm", i.RightLowerLeg = "rightLowerLeg", i.RightMiddleDistal = "rightMiddleDistal", i.RightMiddleIntermediate = "rightMiddleIntermediate", i.RightMiddleProximal = "rightMiddleProximal", i.RightRingDistal = "rightRingDistal", i.RightRingIntermediate = "rightRingIntermediate", i.RightRingProximal = "rightRingProximal", i.RightShoulder = "rightShoulder", i.RightThumbDistal = "rightThumbDistal", i.RightThumbIntermediate = "rightThumbIntermediate", i.RightThumbProximal = "rightThumbProximal", i.RightToes = "rightToes", i.RightUpperArm = "rightUpperArm", i.RightUpperLeg = "rightUpperLeg", i.Spine = "spine", i.UpperChest = "upperChest", (r = e.MetaAllowedUserName || (e.MetaAllowedUserName = {})).Everyone = "Everyone", r.ExplicitlyLicensedPerson = "ExplicitlyLicensedPerson", r.OnlyAuthor = "OnlyAuthor", (o2 = e.MetaUssageName || (e.MetaUssageName = {})).Allow = "Allow", o2.Disallow = "Disallow", (s = e.MetaLicenseName || (e.MetaLicenseName = {})).Cc0 = "CC0", s.CcBy = "CC_BY", s.CcByNc = "CC_BY_NC", s.CcByNcNd = "CC_BY_NC_ND", s.CcByNcSa = "CC_BY_NC_SA", s.CcByNd = "CC_BY_ND", s.CcBySa = "CC_BY_SA", s.Other = "Other", s.RedistributionProhibited = "Redistribution_Prohibited";
}(u || (u = {}));
const f = new THREE.Vector3(), g = new THREE.Vector3();
function _(e, t) {
  return e.matrixWorld.decompose(f, t, g), t;
}
new THREE.Quaternion();
Object.freeze(new THREE.Vector3(0, 0, -1));
new THREE.Quaternion();
var S;
!function(e) {
  e[e.Auto = 0] = "Auto", e[e.Both = 1] = "Both", e[e.ThirdPersonOnly = 2] = "ThirdPersonOnly", e[e.FirstPersonOnly = 3] = "FirstPersonOnly";
}(S || (S = {}));
function w(e) {
  return e.invert ? e.invert() : e.inverse(), e;
}
new THREE.Vector3();
new THREE.Quaternion();
const D = Object.freeze(new THREE.Vector3(0, 0, -1)), U = new THREE.Vector3(), V = new THREE.Vector3(), B = new THREE.Vector3(), G = new THREE.Quaternion();
class H {
  constructor(t, n2) {
    this.autoUpdate = true, this._euler = new THREE.Euler(0, 0, 0, H.EULER_ORDER), this.firstPerson = t, this.applyer = n2;
  }
  getLookAtWorldDirection(e) {
    const t = _(this.firstPerson.firstPersonBone, G);
    return e.copy(D).applyEuler(this._euler).applyQuaternion(t);
  }
  lookAt(e) {
    this._calcEuler(this._euler, e), this.applyer && this.applyer.lookAt(this._euler);
  }
  update(e) {
    this.target && this.autoUpdate && (this.lookAt(this.target.getWorldPosition(U)), this.applyer && this.applyer.lookAt(this._euler));
  }
  _calcEuler(e, t) {
    const n2 = this.firstPerson.getFirstPersonWorldPosition(V), i = B.copy(t).sub(n2).normalize();
    return i.applyQuaternion(w(_(this.firstPerson.firstPersonBone, G))), e.x = Math.atan2(i.y, Math.sqrt(i.x * i.x + i.z * i.z)), e.y = Math.atan2(-i.x, -i.z), e;
  }
}
H.EULER_ORDER = "YXZ";
new THREE.Euler(0, 0, 0, H.EULER_ORDER);
var q, Q, Z, $, J;
!function(e) {
  e[e.Off = 0] = "Off", e[e.Front = 1] = "Front", e[e.Back = 2] = "Back";
}(q || (q = {})), function(e) {
  e[e.None = 0] = "None", e[e.Normal = 1] = "Normal", e[e.LitShadeRate = 2] = "LitShadeRate", e[e.UV = 3] = "UV";
}(Q || (Q = {})), function(e) {
  e[e.FixedColor = 0] = "FixedColor", e[e.MixedLighting = 1] = "MixedLighting";
}(Z || (Z = {})), function(e) {
  e[e.None = 0] = "None", e[e.WorldCoordinates = 1] = "WorldCoordinates", e[e.ScreenCoordinates = 2] = "ScreenCoordinates";
}($ || ($ = {})), function(e) {
  e[e.Opaque = 0] = "Opaque", e[e.Cutout = 1] = "Cutout", e[e.Transparent = 2] = "Transparent", e[e.TransparentWithZWrite = 3] = "TransparentWithZWrite";
}(J || (J = {}));
var ee;
!function(e) {
  e[e.Opaque = 0] = "Opaque", e[e.Cutout = 1] = "Cutout", e[e.Transparent = 2] = "Transparent", e[e.TransparentWithZWrite = 3] = "TransparentWithZWrite";
}(ee || (ee = {}));
const re = new THREE.Matrix4();
function oe(e) {
  return e.invert ? e.invert() : e.getInverse(re.copy(e)), e;
}
class se {
  constructor(t) {
    this._inverseCache = new THREE.Matrix4(), this._shouldUpdateInverse = true, this.matrix = t;
    const n2 = { set: (e, t2, n3) => (this._shouldUpdateInverse = true, e[t2] = n3, true) };
    this._originalElements = t.elements, t.elements = new Proxy(t.elements, n2);
  }
  get inverse() {
    return this._shouldUpdateInverse && (oe(this._inverseCache.copy(this.matrix)), this._shouldUpdateInverse = false), this._inverseCache;
  }
  revert() {
    this.matrix.elements = this._originalElements;
  }
}
const ae = Object.freeze(new THREE.Matrix4()), le = Object.freeze(new THREE.Quaternion()), de = new THREE.Vector3(), he = new THREE.Vector3(), ue = new THREE.Vector3(), ce = new THREE.Quaternion(), pe = new THREE.Matrix4(), me = new THREE.Matrix4();
class fe {
  constructor(t, n2 = {}) {
    var i, r, o2, s, a, l;
    if (this._currentTail = new THREE.Vector3(), this._prevTail = new THREE.Vector3(), this._nextTail = new THREE.Vector3(), this._boneAxis = new THREE.Vector3(), this._centerSpacePosition = new THREE.Vector3(), this._center = null, this._parentWorldRotation = new THREE.Quaternion(), this._initialLocalMatrix = new THREE.Matrix4(), this._initialLocalRotation = new THREE.Quaternion(), this._initialLocalChildPosition = new THREE.Vector3(), this.bone = t, this.bone.matrixAutoUpdate = false, this.radius = null !== (i = n2.radius) && void 0 !== i ? i : 0.02, this.stiffnessForce = null !== (r = n2.stiffnessForce) && void 0 !== r ? r : 1, this.gravityDir = n2.gravityDir ? new THREE.Vector3().copy(n2.gravityDir) : new THREE.Vector3().set(0, -1, 0), this.gravityPower = null !== (o2 = n2.gravityPower) && void 0 !== o2 ? o2 : 0, this.dragForce = null !== (s = n2.dragForce) && void 0 !== s ? s : 0.4, this.colliders = null !== (a = n2.colliders) && void 0 !== a ? a : [], this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld), this._initialLocalMatrix.copy(this.bone.matrix), this._initialLocalRotation.copy(this.bone.quaternion), 0 === this.bone.children.length)
      this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(0.07);
    else {
      const e = this.bone.children[0];
      this._initialLocalChildPosition.copy(e.position);
    }
    this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)), this._prevTail.copy(this._currentTail), this._nextTail.copy(this._currentTail), this._boneAxis.copy(this._initialLocalChildPosition).normalize(), this._centerSpaceBoneLength = de.copy(this._initialLocalChildPosition).applyMatrix4(this.bone.matrixWorld).sub(this._centerSpacePosition).length(), this.center = null !== (l = n2.center) && void 0 !== l ? l : null;
  }
  get center() {
    return this._center;
  }
  set center(e) {
    var t;
    this._getMatrixCenterToWorld(pe), this._currentTail.applyMatrix4(pe), this._prevTail.applyMatrix4(pe), this._nextTail.applyMatrix4(pe), (null === (t = this._center) || void 0 === t ? void 0 : t.userData.inverseCacheProxy) && (this._center.userData.inverseCacheProxy.revert(), delete this._center.userData.inverseCacheProxy), this._center = e, this._center && (this._center.userData.inverseCacheProxy || (this._center.userData.inverseCacheProxy = new se(this._center.matrixWorld))), this._getMatrixWorldToCenter(pe), this._currentTail.applyMatrix4(pe), this._prevTail.applyMatrix4(pe), this._nextTail.applyMatrix4(pe), pe.multiply(this.bone.matrixWorld), this._centerSpacePosition.setFromMatrixPosition(pe), this._centerSpaceBoneLength = de.copy(this._initialLocalChildPosition).applyMatrix4(pe).sub(this._centerSpacePosition).length();
  }
  reset() {
    this.bone.quaternion.copy(this._initialLocalRotation), this.bone.updateMatrix(), this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(), this.bone.matrix), this._centerSpacePosition.setFromMatrixPosition(this.bone.matrixWorld), this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)), this._prevTail.copy(this._currentTail), this._nextTail.copy(this._currentTail);
  }
  update(e) {
    if (e <= 0)
      return;
    this.bone.parent ? _(this.bone.parent, this._parentWorldRotation) : this._parentWorldRotation.copy(le), this._getMatrixWorldToCenter(pe), pe.multiply(this.bone.matrixWorld), this._centerSpacePosition.setFromMatrixPosition(pe), this._getMatrixWorldToCenter(me), me.multiply(this._getParentMatrixWorld());
    const t = this.stiffnessForce * e, n2 = he.copy(this.gravityDir).multiplyScalar(this.gravityPower * e);
    this._nextTail.copy(this._currentTail).add(de.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1 - this.dragForce)).add(de.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(me).sub(this._centerSpacePosition).normalize().multiplyScalar(t)).add(n2), this._nextTail.sub(this._centerSpacePosition).normalize().multiplyScalar(this._centerSpaceBoneLength).add(this._centerSpacePosition), this._collision(this._nextTail), this._prevTail.copy(this._currentTail), this._currentTail.copy(this._nextTail);
    const i = oe(pe.copy(me.multiply(this._initialLocalMatrix))), r = ce.setFromUnitVectors(this._boneAxis, de.copy(this._nextTail).applyMatrix4(i).normalize());
    this.bone.quaternion.copy(this._initialLocalRotation).multiply(r), this.bone.updateMatrix(), this.bone.matrixWorld.multiplyMatrices(this._getParentMatrixWorld(), this.bone.matrix);
  }
  _collision(e) {
    this.colliders.forEach((t) => {
      this._getMatrixWorldToCenter(pe), pe.multiply(t.matrixWorld);
      const n2 = de.setFromMatrixPosition(pe), i = t.geometry.boundingSphere.radius, r = this.radius + i;
      if (e.distanceToSquared(n2) <= r * r) {
        const t2 = he.subVectors(e, n2).normalize(), i2 = ue.addVectors(n2, t2.multiplyScalar(r));
        e.copy(i2.sub(this._centerSpacePosition).normalize().multiplyScalar(this._centerSpaceBoneLength).add(this._centerSpacePosition));
      }
    });
  }
  _getMatrixCenterToWorld(e) {
    return this._center ? e.copy(this._center.matrixWorld) : e.identity(), e;
  }
  _getMatrixWorldToCenter(e) {
    return this._center ? e.copy(this._center.userData.inverseCacheProxy.inverse) : e.identity(), e;
  }
  _getParentMatrixWorld() {
    return this.bone.parent ? this.bone.parent.matrixWorld : ae;
  }
}
class ge {
  constructor(e, t) {
    this.colliderGroups = [], this.springBoneGroupList = [], this.colliderGroups = e, this.springBoneGroupList = t;
  }
  setCenter(e) {
    this.springBoneGroupList.forEach((t) => {
      t.forEach((t2) => {
        t2.center = e;
      });
    });
  }
  lateUpdate(e) {
    const t = /* @__PURE__ */ new Set();
    this.springBoneGroupList.forEach((n2) => {
      n2.forEach((n3) => {
        this._updateWorldMatrix(t, n3.bone), n3.update(e);
      });
    });
  }
  reset() {
    const e = /* @__PURE__ */ new Set();
    this.springBoneGroupList.forEach((t) => {
      t.forEach((t2) => {
        this._updateWorldMatrix(e, t2.bone), t2.reset();
      });
    });
  }
  _updateWorldMatrix(e, t) {
    e.has(t) || (t.parent && this._updateWorldMatrix(e, t.parent), t.updateWorldMatrix(false, false), e.add(t));
  }
}
const _e = new THREE.Vector3(), ve = new THREE.MeshBasicMaterial({ visible: false });
class Te {
  import(e) {
    var t;
    return n(this, void 0, void 0, function* () {
      const n2 = null === (t = e.parser.json.extensions) || void 0 === t ? void 0 : t.VRM;
      if (!n2)
        return null;
      const i = n2.secondaryAnimation;
      if (!i)
        return null;
      const r = yield this._importColliderMeshGroups(e, i), o2 = yield this._importSpringBoneGroupList(e, i, r);
      return new ge(r, o2);
    });
  }
  _createSpringBone(e, t = {}) {
    return new fe(e, t);
  }
  _importSpringBoneGroupList(t, i, r) {
    return n(this, void 0, void 0, function* () {
      const o2 = i.boneGroups || [], s = [];
      return yield Promise.all(o2.map((i2) => n(this, void 0, void 0, function* () {
        if (void 0 === i2.stiffiness || void 0 === i2.gravityDir || void 0 === i2.gravityDir.x || void 0 === i2.gravityDir.y || void 0 === i2.gravityDir.z || void 0 === i2.gravityPower || void 0 === i2.dragForce || void 0 === i2.hitRadius || void 0 === i2.colliderGroups || void 0 === i2.bones || void 0 === i2.center)
          return;
        const o3 = i2.stiffiness, a = new THREE.Vector3(i2.gravityDir.x, i2.gravityDir.y, -i2.gravityDir.z), l = i2.gravityPower, d = i2.dragForce, h = i2.hitRadius, u2 = [];
        i2.colliderGroups.forEach((e) => {
          u2.push(...r[e].colliders);
        });
        const c = [];
        yield Promise.all(i2.bones.map((e) => n(this, void 0, void 0, function* () {
          const n2 = yield t.parser.getDependency("node", e), r2 = -1 !== i2.center ? yield t.parser.getDependency("node", i2.center) : null;
          n2 && n2.traverse((e2) => {
            const t2 = this._createSpringBone(e2, { radius: h, stiffnessForce: o3, gravityDir: a, gravityPower: l, dragForce: d, colliders: u2, center: r2 });
            c.push(t2);
          });
        }))), s.push(c);
      }))), s;
    });
  }
  _importColliderMeshGroups(e, t) {
    return n(this, void 0, void 0, function* () {
      const i = t.colliderGroups;
      if (void 0 === i)
        return [];
      const r = [];
      return i.forEach((t2) => n(this, void 0, void 0, function* () {
        if (void 0 === t2.node || void 0 === t2.colliders)
          return;
        const n2 = yield e.parser.getDependency("node", t2.node), i2 = [];
        t2.colliders.forEach((e2) => {
          if (void 0 === e2.offset || void 0 === e2.offset.x || void 0 === e2.offset.y || void 0 === e2.offset.z || void 0 === e2.radius)
            return;
          const t3 = _e.set(e2.offset.x, e2.offset.y, -e2.offset.z), r2 = this._createColliderMesh(e2.radius, t3);
          n2.add(r2), i2.push(r2);
        });
        const o2 = { node: t2.node, colliders: i2 };
        r.push(o2);
      })), r;
    });
  }
  _createColliderMesh(t, n2) {
    const i = new THREE.Mesh(new THREE.SphereBufferGeometry(t, 8, 4), ve);
    return i.position.copy(n2), i.name = "vrmColliderSphere", i.geometry.computeBoundingSphere(), i;
  }
}
new THREE.Vector2();
new THREE.OrthographicCamera(-1, 1, -1, 1, -1, 1);
const Ee = new THREE.MeshBasicMaterial({ color: 16777215, side: THREE.DoubleSide }), Le = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), Ee), Re = new THREE.Scene();
Re.add(Le);
new THREE.Vector3();
new THREE.MeshBasicMaterial({ color: 16711935, wireframe: true, transparent: true, depthTest: false });
new THREE.Vector3();
function fixSkeletonZForward(rootBone, context) {
  context = context || {};
  precalculateZForwards(rootBone, context);
  if (context.exclude) {
    var bones = [rootBone];
    rootBone.traverse((b) => bones.push(b));
    bones.forEach((b) => {
      if (~context.exclude.indexOf(b.id) || ~context.exclude.indexOf(b.name)) {
        delete context.averagedDirs[b.id];
      }
    });
  }
  return setZForward(rootBone, context);
}
const RESETQUAT = new THREE.Quaternion();
new THREE.Vector3(0, 1, 0);
function precalculateZForwards(rootBone, context) {
  context = context || rootBone;
  context.worldPos = context.worldPos || {};
  context.averagedDirs = context.averagedDirs || {};
  context.preRotations = context.preRotations || {};
  getOriginalWorldPositions(rootBone, context.worldPos);
  calculateAverages(rootBone, context.worldPos, context.averagedDirs);
  return context;
}
function setZForward(rootBone, context) {
  if (!context || !context.worldPos) {
    context = context || {};
    precalculateZForwards(rootBone, context);
  }
  updateTransformations(rootBone, context.worldPos, context.averagedDirs, context.preRotations);
  return context;
}
function calculateAverages(parentBone, worldPos, averagedDirs) {
  var averagedDir = new THREE.Vector3();
  parentBone.children.forEach((childBone) => {
    var childBonePosWorld = worldPos[childBone.id][0];
    averagedDir.add(childBonePosWorld);
  });
  averagedDir.multiplyScalar(1 / parentBone.children.length);
  averagedDirs[parentBone.id] = averagedDir;
  parentBone.children.forEach((childBone) => {
    calculateAverages(childBone, worldPos, averagedDirs);
  });
}
function updateTransformations(parentBone, worldPos, averagedDirs, preRotations) {
  var averagedDir = averagedDirs[parentBone.id];
  if (averagedDir) {
    parentBone.quaternion.copy(RESETQUAT);
    parentBone.updateMatrixWorld();
  }
  var preRot = preRotations[parentBone.id] || preRotations[parentBone.name];
  if (preRot)
    parentBone.quaternion.multiply(preRot);
  parentBone.updateMatrixWorld();
  parentBone.children.forEach((childBone) => {
    var childBonePosWorld = worldPos[childBone.id][0].clone();
    parentBone.worldToLocal(childBonePosWorld);
    childBone.position.copy(childBonePosWorld);
  });
  parentBone.children.forEach((childBone) => {
    updateTransformations(childBone, worldPos, averagedDirs, preRotations);
  });
}
new THREE.Vector3();
new THREE.Vector3();
new THREE.Vector3();
new THREE.Matrix4();
function getOriginalWorldPositions(rootBone, worldPos) {
  var rootBoneWorldPos = rootBone.getWorldPosition(new THREE.Vector3());
  worldPos[rootBone.id] = [rootBoneWorldPos];
  rootBone.children.forEach((child) => {
    getOriginalWorldPositions(child, worldPos);
  });
}
class VRTrackingReferences {
  constructor() {
    this.head = new THREE.Object3D();
    this.leftHand = new THREE.Object3D();
    this.leftHand.pointer = 0;
    this.leftHand.grip = 0;
    this.rightHand = new THREE.Object3D();
    this.rightHand.pointer = 0;
    this.rightHand.grip = 0;
    this.floorHeight = 0;
  }
}
class PoseManager {
  constructor(rig) {
    this.vrTransforms = new VRTrackingReferences();
    this.referencePlayerHeightHmd = 1.7;
    this.referencePlayerWidthWrist = 1.39;
    this.playerHeightHmd = 1.7;
    this.playerWidthWrist = 1.39;
  }
}
class ArmTransforms {
  constructor() {
    this.transform = new THREE.Object3D();
    this.upperArm = new THREE.Object3D();
    this.lowerArm = new THREE.Object3D();
    this.hand = new THREE.Object3D();
    this.transform.add(this.upperArm);
    this.upperArm.add(this.lowerArm);
    this.lowerArm.add(this.hand);
  }
}
const localVector$4 = new THREE.Vector3();
const localVector2$3 = new THREE.Vector3();
const Helpers = {
  getWorldPosition(o2, v) {
    return v.setFromMatrixPosition(o2.matrixWorld);
  },
  getWorldQuaternion(o2, q2) {
    o2.matrixWorld.decompose(localVector$4, q2, localVector2$3);
    return q2;
  },
  getWorldScale(o2, v) {
    return v.setFromMatrixScale(o2.matrixWorld);
  },
  updateMatrix(o2) {
    o2.matrix.compose(o2.position, o2.quaternion, o2.scale);
  },
  updateMatrixWorld(o2) {
    o2.matrixWorld.multiplyMatrices(o2.parent.matrixWorld, o2.matrix);
  },
  updateMatrixMatrixWorld(o2) {
    o2.matrix.compose(o2.position, o2.quaternion, o2.scale);
    o2.matrixWorld.multiplyMatrices(o2.parent.matrixWorld, o2.matrix);
  }
};
const rightVector = new THREE.Vector3(1, 0, 0);
const z180Quaternion$1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
const localVector$3 = new THREE.Vector3();
const localVector2$2 = new THREE.Vector3();
new THREE.Vector3();
new THREE.Vector3();
const localQuaternion$2 = new THREE.Quaternion();
const localQuaternion2$2 = new THREE.Quaternion();
const localQuaternion3$2 = new THREE.Quaternion();
const localEuler$2 = new THREE.Euler();
new THREE.Euler();
const frontQuaternion = new THREE.Quaternion(0, 1, 0, 0);
class ShoulderPoser {
  constructor(rig, shoulder) {
    this.rig = rig;
    this.shoulder = shoulder;
    this.poseManager = rig.poseManager;
    this.vrTransforms = this.poseManager.vrTransforms;
  }
  Update() {
    this.shoulder.proneFactor = this.getProneFactor();
    this.shoulder.prone = this.shoulder.proneFactor > 0;
    if (this.shoulder.prone) {
      this.shoulder.lastProneTimestamp = Date.now();
    } else {
      this.shoulder.lastStandTimestamp = Date.now();
    }
    this.updateHips();
    this.rotateShoulderBase();
    this.updateNeck();
  }
  updateHips() {
    const hmdRotation = localQuaternion$2.copy(this.vrTransforms.head.quaternion).multiply(z180Quaternion$1);
    const hmdQuaternion = frontQuaternion;
    const hmdEuler = localEuler$2.setFromQuaternion(hmdQuaternion, "YXZ");
    hmdEuler.x = 0;
    hmdEuler.z = 0;
    const hmdXYRotation = localQuaternion2$2.setFromEuler(hmdEuler);
    hmdXYRotation.multiply(localQuaternion3$2.setFromAxisAngle(rightVector, this.shoulder.proneFactor * Math.PI / 2));
    if (!this.rig.legsManager.leftLeg.standing && !this.rig.legsManager.rightLeg.standing) {
      const jumpFactor = 1 - Math.min(this.rig.legsManager.leftLeg.standFactor, this.rig.legsManager.rightLeg.standFactor);
      hmdXYRotation.multiply(localQuaternion3$2.setFromAxisAngle(rightVector, jumpFactor * Math.PI / 4));
    } else {
      const standFactor = Math.min(this.rig.legsManager.leftLeg.standFactor, this.rig.legsManager.rightLeg.standFactor);
      hmdXYRotation.multiply(localQuaternion3$2.setFromAxisAngle(rightVector, (1 - standFactor) * Math.PI / 4));
    }
    const headPosition = localVector$3.copy(this.vrTransforms.head.position).sub(localVector2$2.copy(this.shoulder.eyes.position).applyQuaternion(hmdRotation));
    const neckPosition = headPosition.sub(localVector2$2.copy(this.shoulder.head.position).applyQuaternion(hmdRotation));
    const chestPosition = neckPosition.sub(localVector2$2.copy(this.shoulder.neck.position).applyQuaternion(hmdXYRotation));
    const spinePosition = chestPosition.sub(localVector2$2.copy(this.shoulder.transform.position).applyQuaternion(hmdXYRotation));
    const hipsPosition = spinePosition.sub(localVector2$2.copy(this.shoulder.spine.position).applyQuaternion(hmdXYRotation));
    this.shoulder.hips.position.copy(hipsPosition);
    this.shoulder.hips.quaternion.copy(hmdXYRotation);
    Helpers.updateMatrix(this.shoulder.hips);
    this.shoulder.hips.matrixWorld.copy(this.shoulder.hips.matrix);
    Helpers.updateMatrixWorld(this.shoulder.spine);
    Helpers.updateMatrixWorld(this.shoulder.transform);
  }
  updateNeck() {
    const hmdRotation = localQuaternion$2.copy(this.vrTransforms.head.quaternion).multiply(z180Quaternion$1);
    const hmdEuler = localEuler$2.setFromQuaternion(hmdRotation, "YXZ");
    hmdEuler.x = 0;
    hmdEuler.z = 0;
    const hmdXYRotation = localQuaternion2$2.setFromEuler(hmdEuler);
    this.shoulder.neck.quaternion.copy(hmdXYRotation).premultiply(Helpers.getWorldQuaternion(this.shoulder.neck.parent, localQuaternion3$2).invert());
    Helpers.updateMatrixMatrixWorld(this.shoulder.neck);
    this.shoulder.head.quaternion.copy(hmdRotation).premultiply(Helpers.getWorldQuaternion(this.shoulder.head.parent, localQuaternion3$2).invert());
    Helpers.updateMatrixMatrixWorld(this.shoulder.head);
    Helpers.updateMatrixWorld(this.shoulder.eyes);
  }
  rotateShoulderBase() {
    const angleY = this.getCombinedDirectionAngleUp();
    this.shoulder.transform.quaternion.setFromEuler(localEuler$2.set(0, angleY, 0, "YXZ")).premultiply(
      localQuaternion$2.copy(this.shoulder.hips.quaternion).multiply(z180Quaternion$1)
    );
    this.shoulder.transform.quaternion.premultiply(Helpers.getWorldQuaternion(this.shoulder.transform.parent, localQuaternion$2).invert());
    Helpers.updateMatrixMatrixWorld(this.shoulder.transform);
    Helpers.updateMatrixWorld(this.shoulder.leftShoulderAnchor);
    Helpers.updateMatrixWorld(this.shoulder.rightShoulderAnchor);
  }
  getCombinedDirectionAngleUp() {
    const hipsRotation = localQuaternion$2.copy(this.shoulder.hips.quaternion).multiply(z180Quaternion$1);
    const hipsRotationInverse = localQuaternion2$2.copy(hipsRotation).invert();
    const distanceLeftHand = localVector$3.copy(this.vrTransforms.leftHand.position).sub(this.vrTransforms.head.position).applyQuaternion(hipsRotationInverse);
    const distanceRightHand = localVector2$2.copy(this.vrTransforms.rightHand.position).sub(this.vrTransforms.head.position).applyQuaternion(hipsRotationInverse);
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
    const combinedDirection = localVector$3.addVectors(distanceLeftHand.normalize(), distanceRightHand.normalize());
    return Math.atan2(combinedDirection.x, combinedDirection.z);
  }
  getProneFactor() {
    return 1 - Math.min(Math.max((this.vrTransforms.head.position.y - this.rig.height * 0.3) / (this.rig.height * 0.3), 0), 1);
  }
}
const zeroVector$1 = new THREE.Vector3();
const forwardVector = new THREE.Vector3(0, 0, 1);
const leftRotation$1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
const rightRotation$1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2);
const bankLeftRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
const bankRightRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -Math.PI / 2);
const z180Quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
const localVector$2 = new THREE.Vector3();
const localVector2$1 = new THREE.Vector3();
const localVector3$1 = new THREE.Vector3();
const localVector4$1 = new THREE.Vector3();
const localVector5$1 = new THREE.Vector3();
const localVector6$1 = new THREE.Vector3();
const localQuaternion$1 = new THREE.Quaternion();
const localQuaternion2$1 = new THREE.Quaternion();
const localQuaternion3$1 = new THREE.Quaternion();
const localEuler$1 = new THREE.Euler();
const localMatrix$1 = new THREE.Matrix4();
class VRArmIK {
  constructor(arm, shoulder, shoulderPoser, target, left) {
    this.arm = arm;
    this.shoulder = shoulder;
    this.shoulderPoser = shoulderPoser;
    this.target = target;
    this.left = left;
    this.upperArmLength = 0;
    this.lowerArmLength = 0;
    this.armLength = 0;
  }
  Start() {
    this.upperArmLength = Helpers.getWorldPosition(this.arm.lowerArm, localVector$2).distanceTo(Helpers.getWorldPosition(this.arm.upperArm, localVector2$1));
    this.lowerArmLength = Helpers.getWorldPosition(this.arm.hand, localVector$2).distanceTo(Helpers.getWorldPosition(this.arm.lowerArm, localVector2$1));
    this.armLength = this.upperArmLength + this.lowerArmLength;
  }
  Update() {
    Helpers.updateMatrixWorld(this.arm.transform);
    Helpers.updateMatrixWorld(this.arm.upperArm);
    const upperArmPosition = Helpers.getWorldPosition(this.arm.upperArm, localVector$2);
    const handRotation = this.target.quaternion;
    const handPosition = localVector2$1.copy(this.target.position);
    const shoulderRotation = Helpers.getWorldQuaternion(this.shoulder.transform, localQuaternion$1);
    console.log(shoulderRotation);
    const shoulderRotationInverse = localQuaternion2$1.copy(shoulderRotation).invert();
    console.log(shoulderRotationInverse);
    console.log(" ");
    const hypotenuseDistance = this.upperArmLength;
    const directDistance = upperArmPosition.distanceTo(handPosition) / 2;
    const offsetDistance = hypotenuseDistance > directDistance ? Math.sqrt(hypotenuseDistance * hypotenuseDistance - directDistance * directDistance) : 0;
    const offsetDirection = localVector3$1.copy(handPosition).sub(upperArmPosition).normalize().cross(localVector4$1.set(-1, 0, 0).applyQuaternion(shoulderRotation));
    const targetEuler = localEuler$1.setFromQuaternion(
      localQuaternion3$1.multiplyQuaternions(handRotation, shoulderRotationInverse).premultiply(z180Quaternion),
      "XYZ"
    );
    if (this.left) {
      const yFactor = Math.min(Math.max((targetEuler.y + Math.PI * 0.1) / (Math.PI / 2), 0), 1);
      targetEuler.z = Math.min(Math.max(targetEuler.z, -Math.PI / 2), 0);
      targetEuler.z = targetEuler.z * (1 - yFactor) + -Math.PI / 2 * yFactor;
    } else {
      const yFactor = Math.min(Math.max((-targetEuler.y - Math.PI * 0.1) / (Math.PI / 2), 0), 1);
      targetEuler.z = Math.min(Math.max(targetEuler.z, 0), Math.PI / 2);
      targetEuler.z = targetEuler.z * (1 - yFactor) + Math.PI / 2 * yFactor;
    }
    offsetDirection.applyQuaternion(shoulderRotationInverse).applyAxisAngle(forwardVector, targetEuler.z).applyQuaternion(shoulderRotation);
    const elbowPosition = localVector4$1.copy(upperArmPosition).add(handPosition).divideScalar(2).add(localVector5$1.copy(offsetDirection).multiplyScalar(offsetDistance));
    const upVector = localVector5$1.set(this.left ? -1 : 1, 0, 0).applyQuaternion(shoulderRotation);
    this.arm.upperArm.quaternion.setFromRotationMatrix(
      localMatrix$1.lookAt(
        zeroVector$1,
        localVector6$1.copy(elbowPosition).sub(upperArmPosition),
        upVector
      )
    ).multiply(this.left ? rightRotation$1 : leftRotation$1).premultiply(Helpers.getWorldQuaternion(this.arm.upperArm.parent, localQuaternion3$1).invert());
    Helpers.updateMatrixMatrixWorld(this.arm.upperArm);
    this.arm.lowerArm.quaternion.setFromRotationMatrix(
      localMatrix$1.lookAt(
        zeroVector$1,
        localVector6$1.copy(handPosition).sub(elbowPosition),
        upVector
      )
    ).multiply(this.left ? rightRotation$1 : leftRotation$1).premultiply(Helpers.getWorldQuaternion(this.arm.lowerArm.parent, localQuaternion3$1).invert());
    Helpers.updateMatrixMatrixWorld(this.arm.lowerArm);
    this.arm.hand.quaternion.copy(this.target.quaternion).multiply(this.left ? bankRightRotation : bankLeftRotation).premultiply(Helpers.getWorldQuaternion(this.arm.hand.parent, localQuaternion3$1).invert());
    Helpers.updateMatrixMatrixWorld(this.arm.hand);
  }
}
class ShoulderTransforms {
  constructor(rig) {
    this.transform = new THREE.Object3D();
    this.hips = new THREE.Object3D();
    this.spine = new THREE.Object3D();
    this.neck = new THREE.Object3D();
    this.head = new THREE.Object3D();
    this.eyes = new THREE.Object3D();
    this.hips.add(this.spine);
    this.spine.add(this.transform);
    this.transform.add(this.neck);
    this.neck.add(this.head);
    this.head.add(this.eyes);
    this.leftShoulderAnchor = new THREE.Object3D();
    this.transform.add(this.leftShoulderAnchor);
    this.rightShoulderAnchor = new THREE.Object3D();
    this.transform.add(this.rightShoulderAnchor);
    this.leftArm = new ArmTransforms();
    this.rightArm = new ArmTransforms();
    this.leftShoulderAnchor.add(this.leftArm.transform);
    this.rightShoulderAnchor.add(this.rightArm.transform);
    this.prone = false;
    this.proneFactor = 0;
    const now = Date.now();
    this.lastStandTimestamp = now;
    this.lastProneTimestamp = now;
    this.shoulderPoser = new ShoulderPoser(rig, this);
    this.leftArmIk = new VRArmIK(this.leftArm, this, this.shoulderPoser, this.shoulderPoser.vrTransforms.leftHand, true);
    this.rightArmIk = new VRArmIK(this.rightArm, this, this.shoulderPoser, this.shoulderPoser.vrTransforms.rightHand, false);
  }
  Start() {
    this.leftArmIk.Start();
    this.rightArmIk.Start();
  }
  Update() {
    this.shoulderPoser.Update();
    this.leftArmIk.Update();
    this.rightArmIk.Update();
  }
}
const stepRate = 0.2;
const stepHeight = 0.2;
const stepMinDistance = 0;
const stepMaxDistance = 0.25;
const stepRestitutionDistance = 0.8;
const minHmdVelocityTimeFactor = 0.015;
const maxVelocity = 0.015;
const velocityRestitutionFactor = 25;
const crossStepFactor = 0.9;
const zeroVector = new THREE.Vector3();
const oneVector = new THREE.Vector3(1, 1, 1);
new THREE.Quaternion();
const downHalfRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
const upHalfRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
const downJumpRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 4);
const localVector$1 = new THREE.Vector3();
const localVector2 = new THREE.Vector3();
const localVector3 = new THREE.Vector3();
const localVector4 = new THREE.Vector3();
const localVector5 = new THREE.Vector3();
const localVector6 = new THREE.Vector3();
const localVector7 = new THREE.Vector3();
const localQuaternion = new THREE.Quaternion();
const localQuaternion2 = new THREE.Quaternion();
const localQuaternion3 = new THREE.Quaternion();
const localEuler = new THREE.Euler();
const localMatrix = new THREE.Matrix4();
const localMatrix2 = new THREE.Matrix4();
const localMatrix3 = new THREE.Matrix4();
class Leg {
  constructor(legsManager, left) {
    this.transform = new THREE.Object3D();
    this.upperLeg = new THREE.Object3D();
    this.lowerLeg = new THREE.Object3D();
    this.foot = new THREE.Object3D();
    this.foot.stickTransform = new THREE.Object3D();
    this.foot.startTransform = new THREE.Object3D();
    this.foot.endTransform = new THREE.Object3D();
    this.foot.startHmdFloorTransform = new THREE.Object3D();
    this.transform.add(this.upperLeg);
    this.upperLeg.add(this.lowerLeg);
    this.lowerLeg.add(this.foot);
    this.upperLegLength = 0;
    this.lowerLegLength = 0;
    this.legLength = 0;
    this.eyesToUpperLegOffset = new THREE.Vector3();
    this.legsManager = legsManager;
    this.left = left;
    this.standing = true;
    this.standFactor = 1;
    const now = Date.now();
    this.lastStandTimestamp = now;
    this.lastJumpTimestamp = now;
    this.stepping = false;
    this.lastStepTimestamp = now;
    this.balance = 1;
  }
  Start() {
    this.upperLegLength = this.lowerLeg.position.length();
    this.lowerLegLength = this.foot.position.length();
    this.legLength = this.upperLegLength + this.lowerLegLength;
    Helpers.getWorldPosition(this.upperLeg, this.eyesToUpperLegOffset).sub(Helpers.getWorldPosition(this.legsManager.rig.shoulderTransforms.eyes, localVector$1));
  }
  Update() {
    const footPosition = localVector$1.copy(this.foot.stickTransform.position);
    const upperLegPosition = Helpers.getWorldPosition(this.upperLeg, localVector2);
    const footRotation = this.foot.stickTransform.quaternion;
    const hypotenuseDistance = this.upperLegLength;
    const verticalDistance = (this.legsManager.rig.shoulderTransforms.prone || !this.standing ? upperLegPosition.distanceTo(this.foot.stickTransform.position) : Math.abs(upperLegPosition.y - this.foot.stickTransform.position.y)) * this.upperLegLength / this.legLength;
    const offsetDistance = hypotenuseDistance > verticalDistance ? Math.sqrt(hypotenuseDistance * hypotenuseDistance - verticalDistance * verticalDistance) : 0;
    const lowerLegPosition = localVector4.copy(upperLegPosition).add(footPosition).divideScalar(2).add(
      localVector5.copy(footPosition).sub(upperLegPosition).cross(localVector6.set(1, 0, 0).applyQuaternion(footRotation)).normalize().multiplyScalar(offsetDistance)
    );
    this.upperLeg.quaternion.setFromRotationMatrix(
      localMatrix.lookAt(
        zeroVector,
        localVector5.copy(upperLegPosition).sub(lowerLegPosition),
        localVector6.set(0, 1, 0).applyQuaternion(footRotation)
      )
    ).multiply(downHalfRotation).premultiply(Helpers.getWorldQuaternion(this.transform, localQuaternion2).invert());
    Helpers.updateMatrixMatrixWorld(this.upperLeg);
    this.lowerLeg.quaternion.setFromRotationMatrix(
      localMatrix.lookAt(
        zeroVector,
        localVector5.copy(lowerLegPosition).sub(footPosition),
        localVector6.set(0, 0, 1).applyQuaternion(footRotation)
      )
    ).multiply(downHalfRotation).premultiply(Helpers.getWorldQuaternion(this.upperLeg, localQuaternion2).invert());
    Helpers.updateMatrixMatrixWorld(this.lowerLeg);
    this.foot.quaternion.copy(footRotation).multiply(downHalfRotation).premultiply(Helpers.getWorldQuaternion(this.lowerLeg, localQuaternion2).invert());
    Helpers.updateMatrixMatrixWorld(this.foot);
  }
  getStandFactor() {
    return 1 - Math.pow(Math.min(Math.max(
      (Helpers.getWorldPosition(this.legsManager.rig.shoulderTransforms.eyes, localVector$1).add(this.eyesToUpperLegOffset).y - this.legsManager.poseManager.vrTransforms.floorHeight - this.legLength) / (this.legsManager.rig.height * 0.2),
      0
    ), 1), 0.7);
  }
}
class LegsManager {
  constructor(rig) {
    this.hips = rig.shoulderTransforms.hips;
    this.leftLeg = new Leg(this, true);
    this.hips.add(this.leftLeg.transform);
    this.rightLeg = new Leg(this, false);
    this.hips.add(this.rightLeg.transform);
    this.rig = rig;
    this.poseManager = rig.poseManager;
    this.legSeparation = 0;
    this.lastHmdPosition = new THREE.Vector3();
    this.hmdVelocity = new THREE.Vector3();
  }
  Start() {
    this.legSeparation = Helpers.getWorldPosition(this.leftLeg.upperLeg, localVector$1).distanceTo(Helpers.getWorldPosition(this.rightLeg.upperLeg, localVector2));
    this.lastHmdPosition.copy(this.poseManager.vrTransforms.head.position);
    this.leftLeg.Start();
    this.rightLeg.Start();
  }
  Update() {
    Helpers.updateMatrixWorld(this.leftLeg.transform);
    Helpers.updateMatrixWorld(this.leftLeg.upperLeg);
    Helpers.updateMatrixWorld(this.leftLeg.lowerLeg);
    Helpers.updateMatrixWorld(this.leftLeg.foot);
    Helpers.updateMatrixWorld(this.rightLeg.transform);
    Helpers.updateMatrixWorld(this.rightLeg.upperLeg);
    Helpers.updateMatrixWorld(this.rightLeg.lowerLeg);
    Helpers.updateMatrixWorld(this.rightLeg.foot);
    const now = Date.now();
    this.hmdVelocity.copy(this.poseManager.vrTransforms.head.position).sub(this.lastHmdPosition);
    this.lastHmdPosition.copy(this.poseManager.vrTransforms.head.position);
    this.leftLeg.standFactor = this.leftLeg.getStandFactor();
    this.leftLeg.standing = this.leftLeg.standFactor >= 1;
    if (this.leftLeg.standing) {
      this.leftLeg.lastStandTimestamp = now;
    } else {
      this.leftLeg.lastJumpTimestamp = now;
    }
    if (this.leftLeg.stepping && !this.leftLeg.standing) {
      this.leftLeg.stepping = false;
    }
    this.rightLeg.standFactor = this.rightLeg.getStandFactor();
    this.rightLeg.standing = this.rightLeg.standFactor >= 1;
    if (this.rightLeg.standing) {
      this.rightLeg.lastStandTimestamp = now;
    } else {
      this.rightLeg.lastJumpTimestamp = now;
    }
    if (this.rightLeg.stepping && !this.rightLeg.standing) {
      this.rightLeg.stepping = false;
    }
    const hipsFloorPosition = localVector$1.copy(this.hips.position);
    hipsFloorPosition.y = this.poseManager.vrTransforms.floorHeight;
    const hipsFloorEuler = localEuler.setFromQuaternion(this.hips.quaternion, "YXZ");
    hipsFloorEuler.x = 0;
    hipsFloorEuler.z = 0;
    const planeMatrix = localMatrix.compose(hipsFloorPosition, localQuaternion.setFromEuler(hipsFloorEuler), oneVector);
    const planeMatrixInverse = localMatrix2.copy(planeMatrix).invert();
    const fakePosition = localVector2;
    const fakeScale = localVector3;
    const leftFootPosition = localVector4;
    const leftFootRotation = localQuaternion;
    localMatrix3.compose(this.leftLeg.foot.stickTransform.position, this.leftLeg.foot.stickTransform.quaternion, oneVector).premultiply(planeMatrixInverse).decompose(leftFootPosition, leftFootRotation, fakeScale);
    const rightFootPosition = localVector5;
    const rightFootRotation = localQuaternion2;
    localMatrix3.compose(this.rightLeg.foot.stickTransform.position, this.rightLeg.foot.stickTransform.quaternion, oneVector).premultiply(planeMatrixInverse).decompose(rightFootPosition, rightFootRotation, fakeScale);
    const maxTiltAngleFactor = 0.1;
    if (this.leftLeg.standing && !this.rig.shoulderTransforms.prone) {
      const leftFootEuler = localEuler.setFromQuaternion(leftFootRotation, "YXZ");
      leftFootEuler.x = 0;
      leftFootEuler.z = 0;
      if (leftFootEuler.y < -Math.PI * maxTiltAngleFactor) {
        leftFootEuler.y = -Math.PI * maxTiltAngleFactor;
      }
      if (leftFootEuler.y > Math.PI * maxTiltAngleFactor) {
        leftFootEuler.y = Math.PI * maxTiltAngleFactor;
      }
      localMatrix3.compose(zeroVector, localQuaternion3.setFromEuler(leftFootEuler), oneVector).premultiply(planeMatrix).decompose(fakePosition, this.leftLeg.foot.stickTransform.quaternion, fakeScale);
    } else if (!this.leftLeg.standing) {
      this.leftLeg.foot.stickTransform.quaternion.copy(this.hips.quaternion).multiply(downJumpRotation);
    } else {
      Helpers.getWorldQuaternion(this.leftLeg.foot, this.leftLeg.foot.stickTransform.quaternion).multiply(upHalfRotation);
    }
    if (this.rightLeg.standing && !this.rig.shoulderTransforms.prone) {
      const rightFootEuler = localEuler.setFromQuaternion(rightFootRotation, "YXZ");
      rightFootEuler.x = 0;
      rightFootEuler.z = 0;
      if (rightFootEuler.y < -Math.PI * maxTiltAngleFactor) {
        rightFootEuler.y = -Math.PI * maxTiltAngleFactor;
      }
      if (rightFootEuler.y > Math.PI * maxTiltAngleFactor) {
        rightFootEuler.y = Math.PI * maxTiltAngleFactor;
      }
      localMatrix3.compose(zeroVector, localQuaternion3.setFromEuler(rightFootEuler), oneVector).premultiply(planeMatrix).decompose(fakePosition, this.rightLeg.foot.stickTransform.quaternion, fakeScale);
    } else if (!this.rightLeg.standing) {
      this.rightLeg.foot.stickTransform.quaternion.copy(this.hips.quaternion).multiply(downJumpRotation);
    } else {
      Helpers.getWorldQuaternion(this.rightLeg.foot, this.rightLeg.foot.stickTransform.quaternion).multiply(upHalfRotation);
    }
    const _getLegStepFactor = (leg) => {
      if (leg.stepping) {
        const timeDiff = now - leg.lastStepTimestamp;
        leg.lastStepTimestamp = now;
        const scaledStepRate = stepRate * Math.max(localVector2.set(this.hmdVelocity.x, 0, this.hmdVelocity.z).length() / this.rig.height, minHmdVelocityTimeFactor);
        return Math.min(Math.max(leg.stepFactor + scaledStepRate * timeDiff, 0), 1);
      } else {
        return 0;
      }
    };
    this.leftLeg.stepFactor = _getLegStepFactor(this.leftLeg);
    this.rightLeg.stepFactor = _getLegStepFactor(this.rightLeg);
    const leftCanStep = this.leftLeg.standing && !this.leftLeg.stepping && (!this.rightLeg.stepping || this.rightLeg.stepFactor >= crossStepFactor);
    const rightCanStep = this.rightLeg.standing && !this.rightLeg.stepping && (!this.leftLeg.stepping || this.leftLeg.stepFactor >= crossStepFactor);
    const maxStepAngleFactor = 0;
    if (leftCanStep || rightCanStep) {
      let leftStepDistance = 0;
      let leftStepAngleDiff = 0;
      if (leftCanStep) {
        const leftDistance = Math.sqrt(leftFootPosition.x * leftFootPosition.x + leftFootPosition.z * leftFootPosition.z);
        const leftAngleDiff = Math.atan2(leftFootPosition.x, leftFootPosition.z);
        if (leftDistance < this.rig.height * stepMinDistance) {
          leftStepDistance = leftDistance;
        } else if (leftDistance > this.rig.height * stepMaxDistance) {
          leftStepDistance = leftDistance;
        }
        if (leftAngleDiff > -Math.PI * maxStepAngleFactor) {
          leftStepAngleDiff = leftAngleDiff;
        } else if (leftAngleDiff < -Math.PI + Math.PI * maxStepAngleFactor) {
          leftStepAngleDiff = leftAngleDiff;
        }
      }
      let rightStepDistance = 0;
      let rightStepAngleDiff = 0;
      if (rightCanStep) {
        const rightDistance = Math.sqrt(rightFootPosition.x * rightFootPosition.x + rightFootPosition.z * rightFootPosition.z);
        const rightAngleDiff = Math.atan2(rightFootPosition.x, rightFootPosition.z);
        if (rightDistance < this.rig.height * stepMinDistance) {
          rightStepDistance = rightDistance;
        } else if (rightDistance > this.rig.height * stepMaxDistance) {
          rightStepDistance = rightDistance;
        }
        if (rightAngleDiff < Math.PI * maxStepAngleFactor) {
          rightStepAngleDiff = rightAngleDiff;
        } else if (rightAngleDiff > Math.PI - Math.PI * maxStepAngleFactor) {
          rightStepAngleDiff = rightAngleDiff;
        }
      }
      const _stepLeg = (leg) => {
        const footDistance = this.legSeparation * stepRestitutionDistance;
        leg.foot.startTransform.position.copy(leg.foot.stickTransform.position);
        leg.foot.endTransform.position.copy(hipsFloorPosition).add(localVector6.set((leg.left ? -1 : 1) * footDistance, 0, 0).applyQuaternion(leg.foot.stickTransform.quaternion));
        const velocityVector = localVector6.set(this.hmdVelocity.x, 0, this.hmdVelocity.z);
        const velocityVectorLength = velocityVector.length();
        if (velocityVectorLength > maxVelocity * this.rig.height) {
          velocityVector.multiplyScalar(maxVelocity * this.rig.height / velocityVectorLength);
        }
        velocityVector.multiplyScalar(velocityRestitutionFactor);
        leg.foot.endTransform.position.add(velocityVector);
        leg.foot.startHmdFloorTransform.position.set(this.poseManager.vrTransforms.head.position.x, 0, this.poseManager.vrTransforms.head.position.z);
        leg.lastStepTimestamp = now;
        leg.stepping = true;
      };
      if ((leftStepDistance !== 0 || leftStepAngleDiff !== 0) && (rightStepDistance === 0 || Math.abs(leftStepDistance * this.leftLeg.balance) >= Math.abs(rightStepDistance * this.rightLeg.balance)) && (rightStepAngleDiff === 0 || Math.abs(leftStepAngleDiff * this.leftLeg.balance) >= Math.abs(rightStepAngleDiff * this.rightLeg.balance))) {
        _stepLeg(this.leftLeg);
        this.leftLeg.balance = 0;
        this.rightLeg.balance = 1;
      } else if (rightStepDistance !== 0 || rightStepAngleDiff !== 0) {
        _stepLeg(this.rightLeg);
        this.rightLeg.balance = 0;
        this.leftLeg.balance = 1;
      }
    }
    if (this.rig.shoulderTransforms.prone) {
      const targetPosition = Helpers.getWorldPosition(this.leftLeg.upperLeg, localVector6).add(
        localVector7.set(0, -this.leftLeg.legLength * 0.95 + this.poseManager.vrTransforms.floorHeight, 0).applyQuaternion(this.hips.quaternion)
      );
      targetPosition.y = 0;
      this.leftLeg.foot.stickTransform.position.lerp(targetPosition, 0.1);
      this.leftLeg.stepping = false;
    } else if (this.leftLeg.stepping) {
      this.leftLeg.foot.stickTransform.position.copy(this.leftLeg.foot.startTransform.position).lerp(this.leftLeg.foot.endTransform.position, this.leftLeg.stepFactor).add(localVector6.set(0, Math.sin(this.leftLeg.stepFactor * Math.PI) * stepHeight * this.rig.height, 0));
      if (this.leftLeg.stepFactor >= 1) {
        this.leftLeg.stepping = false;
      }
    } else if (!this.leftLeg.standing) {
      const targetPosition = Helpers.getWorldPosition(this.leftLeg.upperLeg, localVector6).add(
        localVector7.set(0, 0, 1).normalize().applyQuaternion(this.hips.quaternion).multiplyScalar(this.leftLeg.legLength * 0.5)
      );
      this.leftLeg.foot.stickTransform.position.lerp(targetPosition, 0.1);
    } else {
      const targetPosition = localVector6.copy(this.leftLeg.foot.stickTransform.position);
      targetPosition.y = this.poseManager.vrTransforms.floorHeight;
      this.leftLeg.foot.stickTransform.position.lerp(targetPosition, 0.2);
    }
    if (this.rig.shoulderTransforms.prone) {
      const targetPosition = Helpers.getWorldPosition(this.rightLeg.upperLeg, localVector6).add(
        localVector7.set(0, -this.rightLeg.legLength * 0.95 + this.poseManager.vrTransforms.floorHeight, 0).applyQuaternion(this.hips.quaternion)
      );
      targetPosition.y = 0;
      this.rightLeg.foot.stickTransform.position.lerp(targetPosition, 0.1);
      this.rightLeg.stepping = false;
    } else if (this.rightLeg.stepping) {
      this.rightLeg.foot.stickTransform.position.copy(this.rightLeg.foot.startTransform.position).lerp(this.rightLeg.foot.endTransform.position, this.rightLeg.stepFactor).add(localVector6.set(0, Math.sin(this.rightLeg.stepFactor * Math.PI) * stepHeight * this.rig.height, 0));
      if (this.rightLeg.stepFactor >= 1) {
        this.rightLeg.stepping = false;
      }
    } else if (!this.rightLeg.standing) {
      const targetPosition = Helpers.getWorldPosition(this.rightLeg.upperLeg, localVector6).add(
        localVector7.set(0, 0, 1).normalize().applyQuaternion(this.hips.quaternion).multiplyScalar(this.rightLeg.legLength * 0.6)
      );
      this.rightLeg.foot.stickTransform.position.lerp(targetPosition, 0.1);
    } else {
      const targetPosition = localVector6.copy(this.rightLeg.foot.stickTransform.position);
      targetPosition.y = this.poseManager.vrTransforms.floorHeight;
      this.rightLeg.foot.stickTransform.position.lerp(targetPosition, 0.2);
    }
    this.leftLeg.Update();
    this.rightLeg.Update();
  }
}
var microphoneWorklet = "const numTicks = 1;\r\n\r\nlet tick = 0;\r\nlet sampleSum = 0;\r\nlet numSamples = 0;\r\nlet muted = true;\r\n\r\nclass VolumeProcessor extends AudioWorkletProcessor {\r\n  constructor() {\r\n    super();\r\n\r\n    this.port.addEventListener('message', e => {\r\n      const data = JSON.parse(e.data);\r\n      const {method} = data;\r\n      if (method === 'muted') {\r\n        muted = data.muted;\r\n      }\r\n    });\r\n    this.port.start();\r\n  }\r\n  process(inputs, outputs) {\r\n    const channels = inputs[0];\r\n    // const output = outputs[0];\r\n\r\n    // for (let i = 0; i < channels.length; i++) {\r\n      const i = 0;\r\n      const samples = channels[i];\r\n      for (let j = 0; j < samples.length; j++) {\r\n        sampleSum += Math.abs(samples[j]);\r\n      }\r\n      numSamples += samples.length;\r\n    // }\r\n\r\n    if (++tick >= numTicks) {\r\n      this.port.postMessage(sampleSum / numSamples);\r\n\r\n      tick = 0;\r\n      sampleSum = 0;\r\n      numSamples = 0;\r\n    }\r\n\r\n    if (!muted) {\r\n      for (let i = 0; i < outputs.length; i++) {\r\n        const input = inputs[i];\r\n        const output = outputs[i];\r\n\r\n        for (let channel = 0; channel < output.length; channel++) {\r\n          output[channel].set(input[channel]);\r\n        }\r\n      }\r\n    }\r\n\r\n    return true;\r\n  }\r\n}\r\nregisterProcessor('volume-processor', VolumeProcessor);";
class MicrophoneWorker extends EventTarget {
  constructor(mediaStream, options = {}) {
    super();
    const audio = document.createElement("audio");
    audio.srcObject = mediaStream;
    audio.muted = true;
    this.audioContext = new AudioContext();
    const mediaStreamSource = this.audioContext.createMediaStreamSource(mediaStream);
    this.audioContext.audioWorklet.addModule(options.microphoneWorkletUrl || `data:application/javascript;charset=utf8,${encodeURIComponent(microphoneWorklet)}`).then(() => {
      const audioWorkletNode = new AudioWorkletNode(this.audioContext, "volume-processor");
      if (options.muted === false) {
        audioWorkletNode.port.postMessage(JSON.stringify({
          method: "muted",
          muted: false
        }));
      }
      audioWorkletNode.port.onmessage = (e) => {
        this.dispatchEvent(new MessageEvent("volume", {
          data: e.data
        }));
      };
      mediaStreamSource.connect(audioWorkletNode).connect(this.audioContext.destination);
    });
  }
  close() {
    this.audioContext.close();
  }
}
var skeletonString = `["Armature",[0,0,0,0,0,0,1,1,1,1],[["Hips",[-4.764560328305439e-22,0.9901136159896851,0.040974393486976624,1,-1.9958527221869936e-15,1.1920922560193503e-7,-9.735359896012596e-8,1,0.9999999403953552,0.9999999403953552],[["Spine",[8.881776256067372e-16,-1.2409380190092634e-7,-7.450584149637507e-9,0.9997583031654358,-3.4153149197635457e-9,1.1921520126634277e-7,0.021985134109854698,1,1.0000001192092896,1.0000735521316528],[["Chest",[-2.8913337305627534e-16,0.08727944642305374,-1.5612890535976476e-8,-0.05003303661942482,1.1906852392939982e-7,-5.966564575743405e-9,0.9987475872039795,1,0.9999998807907104,0.9999999403953552],[["Neck",[-7.525669201854067e-15,0.1973666548728943,1.130800697524137e-8,0.07688746601343155,-1.1883879835750122e-7,9.171047921086029e-9,0.9970398545265198,1,0.9999996423721313,0.9999999403953552],[["Head",[-1.268057280792193e-19,0.06861116737127304,2.575603064158827e-10,-0.004925626330077648,-2.6168825786876404e-11,-3.042392997688187e-13,0.9999879002571106,1,1.0000001192092896,1.000000238418579],[["Eye_R",[-0.02648639865219593,0.05120223015546799,0.019837098196148872,-0.160249263048172,0.6969521045684814,0.6969586610794067,0.05316544696688652,1,1.0000001192092896,0.9999999403953552],[]],["Eye_L",[0.02648639865219593,0.05120223015546799,0.019837098196148872,-0.160249263048172,-0.6969521045684814,-0.6969586610794067,0.05316544696688652,1,1.0000001192092896,0.9999999403953552],[]],["StandingEars1_R",[-0.04328959435224533,0.13830988109111786,-0.017249949276447296,0.1357475221157074,0.04495804384350777,0.044957272708415985,0.9887012839317322,1.0000001192092896,0.9999998807907104,0.9999999403953552],[["StandingEars2_R",[3.2651956693996453e-9,0.029600219801068306,-1.0180473708487625e-7,-0.0003664675750769675,-0.01292889378964901,-0.009843501262366772,0.9998679161071777,0.9999998211860657,1,0.9999998211860657],[["StandingEars3_R",[3.868987352717568e-9,0.046097323298454285,-3.8355018716629274e-8,0.09286198019981384,-0.05294885113835335,-0.03466515615582466,0.9936656355857849,0.9999998807907104,0.9999998807907104,0.9999998211860657],[]]]]]],["StandingEars1_L",[0.04328959435224533,0.13830988109111786,-0.017249949276447296,0.1357475221157074,-0.04495804384350777,-0.044957272708415985,0.9887012839317322,1.0000001192092896,0.9999998807907104,0.9999999403953552],[["StandingEars2_L",[-3.2651956693996453e-9,0.029600219801068306,-1.0180473708487625e-7,-0.0003664675750769675,0.01292889378964901,0.009843501262366772,0.9998679161071777,0.9999998211860657,1,0.9999998211860657],[["StandingEars3_L",[-3.868987352717568e-9,0.046097323298454285,-3.8355018716629274e-8,0.09286198019981384,0.05294885113835335,0.03466515615582466,0.9936656355857849,0.9999998807907104,0.9999998807907104,0.9999998211860657],[]]]]]],["Hair1_R",[-0.05674159526824951,0.14185218513011932,0.004379991441965103,-0.9789010286331177,0.14186254143714905,0.14183951914310455,0.038852352648973465,1.0000029802322388,1.0000003576278687,1],[["Hair2_R",[-3.67872416973114e-8,0.07205186039209366,-3.725290298461914e-9,0.06192794442176819,0.027937548235058784,-0.04899432510137558,0.9964858293533325,0.9999998807907104,0.9999998807907104,0.9999999403953552],[["Hair3_R",[-3.529947889546747e-8,0.10827109217643738,6.058744617121192e-9,0.10654902458190918,-0.10275916755199432,0.10163572430610657,0.9837469458580017,0.9999998211860657,0.9999998211860657,0.9999999403953552],[["Hair5_R",[-4.922059559930858e-8,0.2657814919948578,-1.1666276833466327e-7,0.0902017205953598,0.09775179624557495,-0.20269449055194855,0.9701666831970215,1.0000001192092896,1.0000001192092896,1],[["Hair6_R",[-1.862645149230957e-9,0.09898854792118073,-4.6566128730773926e-8,-0.23959340155124664,0.12270104140043259,-0.20550969243049622,0.9409065842628479,1.0000003576278687,1.0000001192092896,1.000000238418579],[["Hair7_R",[3.166496753692627e-8,0.09518476575613022,1.1175870895385742e-8,-0.10351262986660004,-0.14494562149047852,0.13637173175811768,0.9745146036148071,0.9999998807907104,0.9999997615814209,0.9999997615814209],[["Hair8_R",[3.725290298461914e-9,0.09951279312372208,1.7695128917694092e-8,0.13740508258342743,-0.01385509967803955,0.008886626921594143,0.9903782606124878,0.9999999403953552,0.9999998807907104,1],[]]]]]]]]]]]]]],["Hair1_L",[0.06208624690771103,0.14414384961128235,-0.01495930552482605,-0.978900671005249,-0.14185091853141785,-0.14185169339179993,0.03885859623551369,0.9999966025352478,0.9999997019767761,0.9999999403953552],[["Hair2_L",[-1.6298145055770874e-9,0.07205165177583694,2.7939677238464355e-9,0.06192799285054207,-0.0279371440410614,0.04899446293711662,0.9964858293533325,1,0.9999998807907104,0.9999999403953552],[["Hair3_L",[-1.257285475730896e-8,0.10827106237411499,-1.862645149230957e-8,0.10654883086681366,0.10275834798812866,-0.10163601487874985,0.9837470054626465,1,1.0000001192092896,1],[["Hair5_L",[-1.1175870895385742e-8,0.26578161120414734,1.4901161193847656e-8,0.09020152688026428,-0.0977509468793869,0.20269547402858734,0.9701665043830872,0.9999998807907104,0.9999997615814209,0.9999999403953552],[["Hair6_L",[1.862645149230957e-9,0.09898875653743744,-5.587935447692871e-9,-0.2395932972431183,-0.12270071357488632,0.20550943911075592,0.940906822681427,0.9999998807907104,0.9999996423721313,0.9999997615814209],[["Hair7_L",[3.725290298461914e-9,0.0951850414276123,7.450580596923828e-9,-0.10351207852363586,0.14494460821151733,-0.1363714635372162,0.9745148420333862,1.0000001192092896,0.9999998211860657,0.9999998807907104],[["Hair8_L",[-2.7939677238464355e-9,0.09951331466436386,-1.3504177331924438e-8,0.13740453124046326,0.013855460099875927,-0.008887086994946003,0.9903782606124878,0.9999998807907104,1.0000001192092896,0.9999997615814209],[]]]]]]]]]]]]]],["Hair21_R",[-0.024621548131108284,0.14939874410629272,-0.0411190427839756,-0.971066415309906,0.11676698923110962,0.11678998917341232,0.1724979430437088,0.9999992251396179,0.9999998807907104,0.9999991655349731],[["Hair22_R",[-1.7080894920695755e-8,0.07549650222063065,-2.1185213583407858e-8,0.042726077139377594,-0.02246226742863655,0.01964012160897255,0.9986411929130554,0.9999997615814209,0.9999998211860657,0.9999998807907104],[["Hair23_R",[1.30385160446167e-8,0.11306732892990112,1.862645149230957e-9,-0.006093519274145365,0.037633929401636124,-0.05706079304218292,0.9976426362991333,0.9999999403953552,0.9999998807907104,0.9999998211860657],[["Hair24_R",[7.450580596923828e-9,0.21121430397033691,1.1175870895385742e-8,0.04010539874434471,-0.0758029893040657,0.10839971154928207,0.9904014468193054,1.0000001192092896,0.9999998211860657,1],[["Hair25_R",[7.450580596923828e-9,0.1725718230009079,3.725290298461914e-8,-0.17603935301303864,0.029646748676896095,0.04157049581408501,0.9830580353736877,1,1.0000001192092896,1.0000001192092896],[["Hair26_R",[2.9802322387695312e-8,0.1238829717040062,-2.2351741790771484e-8,0.03691902384161949,0.28326982259750366,-0.3386003077030182,0.8965182900428772,0.9999998807907104,1,0.9999998211860657],[["Hair27_R",[0,0.11360013484954834,3.725290298461914e-9,0.18678219616413116,0.03417342156171799,0.01253802701830864,0.9817267656326294,1.0000001192092896,1,1],[["Hair28_R",[4.470348358154297e-8,0.12201113998889923,-2.0489096641540527e-8,-0.110519178211689,-0.1095462366938591,0.16148608922958374,0.9745293259620667,1,1.000000238418579,1],[]]]]]]]]]]]]]]]],["Hair21_L",[0.024621548131108284,0.14939874410629272,-0.0411190427839756,-0.971066415309906,-0.11676698923110962,-0.11678998917341232,0.1724979430437088,0.9999992251396179,0.9999998807907104,0.9999991655349731],[["Hair22_L",[1.7080894920695755e-8,0.07549650222063065,-2.1185213583407858e-8,0.042726077139377594,0.02246226742863655,-0.01964012160897255,0.9986411929130554,0.9999997615814209,0.9999998211860657,0.9999998807907104],[["Hair23_L",[-1.30385160446167e-8,0.11306732892990112,1.862645149230957e-9,-0.006093519274145365,-0.037633929401636124,0.05706079304218292,0.9976426362991333,0.9999999403953552,0.9999998807907104,0.9999998211860657],[["Hair24_L",[-7.450580596923828e-9,0.21121430397033691,1.1175870895385742e-8,0.04010539874434471,0.0758029893040657,-0.10839971154928207,0.9904014468193054,1.0000001192092896,0.9999998211860657,1],[["Hair25_L",[-7.450580596923828e-9,0.1725718230009079,3.725290298461914e-8,-0.17603935301303864,-0.029646748676896095,-0.04157049581408501,0.9830580353736877,1,1.0000001192092896,1.0000001192092896],[["Hair26_L",[-2.9802322387695312e-8,0.1238829717040062,-2.2351741790771484e-8,0.03691902384161949,-0.28326982259750366,0.3386003077030182,0.8965182900428772,0.9999998807907104,1,0.9999998211860657],[["Hair27_L",[0,0.11360013484954834,3.725290298461914e-9,0.18678219616413116,-0.03417342156171799,-0.01253802701830864,0.9817267656326294,1.0000001192092896,1,1],[["Hair28_L",[-4.470348358154297e-8,0.12201113998889923,-2.0489096641540527e-8,-0.110519178211689,0.1095462366938591,-0.16148608922958374,0.9745293259620667,1,1.000000238418579,1],[]]]]]]]]]]]]]]]],["Hair31_R",[-0.0006344257271848619,0.14939913153648376,-0.07985317707061768,-0.9843132495880127,0.06418239325284958,0.06423899531364441,0.15126599371433258,1.000000238418579,1.0000001192092896,1.0000004768371582],[["Hair32_R",[-1.210719347000122e-8,0.0727984756231308,-1.979060471057892e-8,0.056747280061244965,0.01272169966250658,-0.02604222483932972,0.9979678988456726,1,0.9999999403953552,0.9999998211860657],[["Hair33_R",[1.3969838619232178e-8,0.10768461972475052,-1.2898817658424377e-7,0.026520270854234695,0.010424706153571606,-0.019086375832557678,0.9994117617607117,1,1,1],[["Hair34_R",[-3.725290298461914e-9,0.21081344783306122,1.3154931366443634e-8,0.06844703108072281,-0.052156127989292145,0.07988469302654266,0.9930827021598816,0.9999999403953552,1.000000238418579,1.0000001192092896],[["Hair35_R",[0,0.1719989776611328,4.0978193283081055e-8,-0.1205706000328064,-0.04455515742301941,0.12126009166240692,0.984263002872467,1,0.9999998807907104,0.9999999403953552],[["Hair36_R",[-4.470348358154297e-8,0.12351469695568085,-3.725290298461914e-9,-0.037015192210674286,0.20051102340221405,-0.27156707644462585,0.9405725002288818,1,0.9999999403953552,0.9999999403953552],[["Hair37_R",[1.4901161193847656e-8,0.11350540816783905,1.210719347000122e-8,0.17390818893909454,0.06217547133564949,-0.05911845713853836,0.981017529964447,0.9999998807907104,1,1.0000001192092896],[["Hair38_R",[1.4901161193847656e-8,0.12201984971761703,-7.450580596923828e-9,-0.11115529388189316,-0.12800024449825287,0.21284005045890808,0.9622679352760315,1,0.9999998211860657,0.9999997019767761],[]]]]]]]]]]]]]]]],["Hair31_L",[0.0006344257271848619,0.14939913153648376,-0.07985317707061768,-0.9843132495880127,-0.06418239325284958,-0.06423899531364441,0.15126599371433258,1.000000238418579,1.0000001192092896,1.0000004768371582],[["Hair32_L",[1.210719347000122e-8,0.0727984756231308,-1.979060471057892e-8,0.056747280061244965,-0.01272169966250658,0.02604222483932972,0.9979678988456726,1,0.9999999403953552,0.9999998211860657],[["Hair33_L",[-1.3969838619232178e-8,0.10768461972475052,-1.2898817658424377e-7,0.026520270854234695,-0.010424706153571606,0.019086375832557678,0.9994117617607117,1,1,1],[["Hair34_L",[3.725290298461914e-9,0.21081344783306122,1.3154931366443634e-8,0.06844703108072281,0.052156127989292145,-0.07988469302654266,0.9930827021598816,0.9999999403953552,1.000000238418579,1.0000001192092896],[["Hair35_L",[0,0.1719989776611328,4.0978193283081055e-8,-0.1205706000328064,0.04455515742301941,-0.12126009166240692,0.984263002872467,1,0.9999998807907104,0.9999999403953552],[["Hair36_L",[4.470348358154297e-8,0.12351469695568085,-3.725290298461914e-9,-0.037015192210674286,-0.20051102340221405,0.27156707644462585,0.9405725002288818,1,0.9999999403953552,0.9999999403953552],[["Hair37_L",[-1.4901161193847656e-8,0.11350540816783905,1.210719347000122e-8,0.17390818893909454,-0.06217547133564949,0.05911845713853836,0.981017529964447,0.9999998807907104,1,1.0000001192092896],[["Hair38_L",[-1.4901161193847656e-8,0.12201984971761703,-7.450580596923828e-9,-0.11115529388189316,0.12800024449825287,-0.21284005045890808,0.9622679352760315,1,0.9999998211860657,0.9999997019767761],[]]]]]]]]]]]]]]]],["Sideburn1_R",[-0.08463571220636368,0.059588078409433365,0.027148611843585968,0.9995024800300598,0.019347738474607468,0.017921678721904755,0.017299650236964226,1.0000600814819336,1.0000001192092896,1.000059962272644],[["Sideburn2_R",[-3.14321368932724e-9,0.05695805698633194,1.1641532182693481e-9,0.0010487505933269858,0.07849115133285522,-0.0757785215973854,0.9940301179885864,0.9999999403953552,1,0.9999998211860657],[]]]],["Sideburn1_L",[0.08316104114055634,0.05958808586001396,0.02714860998094082,0.999524712562561,-0.018206028267741203,-0.017917050048708916,0.017257805913686752,1.0000168085098267,1,1.0000168085098267],[["Sideburn2_L",[3.958120942115784e-9,0.056958332657814026,-9.313225746154785e-10,0.001054661814123392,-0.07849068194627762,0.07578069716691971,0.9940298795700073,0.9999999403953552,0.9999999403953552,0.9999997019767761],[]]]],["FrontHair1",[-0.0801674947142601,0.12183096259832382,0.06070006638765335,0.9904160499572754,-0.09750665724277496,-0.09754859656095505,0.007277561351656914,1.0000026226043701,1.0000001192092896,1],[["FrontHair1_2",[-1.4901161193847656e-8,0.06380410492420197,-1.5832483768463135e-8,0.07633671164512634,0.10690629482269287,-0.12024792283773422,0.9840143322944641,1.0000001192092896,1,0.9999999403953552],[]]]],["FrontHair2",[-0.003160707652568817,0.1368127316236496,0.09830453991889954,0.9842233657836914,0.07744413614273071,0.07740821689367294,0.13897834718227386,1,1,1.0000004768371582],[["FrontHair2_2",[7.08916516600766e-8,0.05305123329162598,-3.7533936847466975e-8,0.19803227484226227,-0.012096422724425793,0.03645673021674156,0.9794427156448364,1,0.9999999403953552,1.0000001192092896],[]]]],["FrontHair3",[0.07869279384613037,0.12183097004890442,0.060700077563524246,0.9904158711433411,0.09750817716121674,0.09754922240972519,0.007277223747223616,1.000002384185791,1,1],[["FrontHair3_2",[2.421438694000244e-8,0.06380397081375122,-1.862645149230957e-9,0.0763363465666771,-0.10690655559301376,0.12024860084056854,0.9840142726898193,0.9999998807907104,1,0.9999998211860657],[]]]],["LeftEye",[0.028106696903705597,0.04913211241364479,0.02728760987520218,-3.7235006744573695e-11,-4.789836638484455e-15,-8.845238583866293e-21,1,1,1,1.0000001192092896],[]],["RightEye",[-0.028988290578126907,0.04911495000123978,0.02688763290643692,-3.7235006744573695e-11,-4.789836638484455e-15,-8.845238583866293e-21,1,1,1,1.0000001192092896],[]]]]]],["Right_shoulder",[-0.01879039779305458,0.1747818887233734,-0.000242409689235501,-0.5975834727287292,0.4451692998409271,0.5144044160842896,0.4243896007537842,0.9999998211860657,0.9999998211860657,0.9999996423721313],[["Right_arm",[5.98272009710854e-8,0.06950049847364426,-1.0726226662427507e-7,-0.17996826767921448,0.1933135837316513,-0.08750152587890625,0.9605127573013306,1.0000001192092896,1,1],[["Right_elbow",[8.39414795450466e-8,0.21507789194583893,-4.481635684783214e-8,-0.007842862978577614,-0.001910681719891727,0.013383752666413784,0.9998778700828552,0.9999998807907104,1,0.9999998807907104],[["Right_wrist",[-4.8142922537408595e-8,0.1890689581632614,-1.6776754208081002e-8,0.0038253096863627434,0.0192723385989666,-0.03635840117931366,0.9991456866264343,0.9999529123306274,0.9999997615814209,0.9999743700027466],[["Thumb0_R",[-0.0015274710021913052,0.013934989459812641,-0.01448698528110981,-0.3260788023471832,0.172303706407547,0.11251583695411682,0.9226723313331604,1.0000003576278687,1.0000004768371582,1.0000001192092896],[["Thumb1_R",[-4.6566128730773926e-8,0.04147572070360184,1.862645149230957e-9,0.13270437717437744,-0.0907953605055809,-0.03271203488111496,0.9864460825920105,1.0000001192092896,0.9999995827674866,0.9999997615814209],[["Thumb2_R",[-5.9600079538313366e-8,0.018970059230923653,2.214782846010621e-8,0.027074433863162994,-0.02721540257334709,0.001372111844830215,0.9992619156837463,1.0000001192092896,1.0000001192092896,1.0000003576278687],[]]]]]],["LittleFinger1_R",[0.019163303077220917,0.064740851521492,0.011390747502446175,-0.030019935220479965,0.001478685182519257,0.03402372822165489,0.9989690184593201,1.0000001192092896,1,1.0000001192092896],[["LittleFinger2_R",[1.4120120184202278e-8,0.027081796899437904,1.6113239098558552e-7,0.034664399921894073,-0.04437341168522835,0.024598155170679092,0.9981104731559753,0.9999998807907104,0.9999995827674866,0.9999997615814209],[["LittleFinger3_R",[3.079840027453429e-8,0.01231003925204277,4.4105231467028716e-8,-0.07590803503990173,0.07809292525053024,-0.021812133491039276,0.9938127994537354,0.9999999403953552,0.9999998807907104,0.9999999403953552],[]]]]]],["RingFinger1_R",[0.0054548936896026134,0.06837297230958939,0.006870504934340715,-0.0357401967048645,0.014316110871732235,0.01984764076769352,0.9990614652633667,1.0000001192092896,1.0000003576278687,1.000000238418579],[["RingFinger2_R",[6.366883553710068e-8,0.033084455877542496,-4.110254536726643e-8,0.00818269606679678,-0.007274249568581581,0.0013416421134024858,0.9999392628669739,0.9999997615814209,0.9999998807907104,0.9999998211860657],[["RingFinger3_R",[3.671115322845253e-8,0.017962312325835228,1.2718248854071135e-7,-0.01127212680876255,-0.01896950602531433,0.04194747284054756,0.99887615442276,1,0.9999998807907104,0.9999999403953552],[]]]]]],["MiddleFinger1_R",[-0.007915524765849113,0.07169001549482346,-0.0021115546114742756,-0.02076011896133423,0.01734338141977787,-0.0033277312759310007,0.9996285438537598,1.000000238418579,1.0000001192092896,1.000000238418579],[["MiddleFinger2_R",[5.722484708314823e-9,0.035151466727256775,7.455829376112888e-8,-0.006091028917580843,-0.005398651584982872,0.015210472047328949,0.9998512268066406,1,0.9999999403953552,0.9999998807907104],[["MiddleFinger3_R",[6.05359673500061e-8,0.019062386825680733,-5.960464477539063e-8,0.005041174590587616,-0.038143955171108246,0.051979146897792816,0.9979067444801331,1,1,0.9999998807907104],[]]]]]],["IndexFinger1_R",[-0.017795158550143242,0.07101564109325409,-0.014736505225300789,-0.01829482987523079,0.006327447015792131,0.011805253103375435,0.9997429251670837,1.0000001192092896,1.000000238418579,1.000000238418579],[["IndexFinger2_R",[8.187744526821916e-8,0.031378790736198425,1.3781348684460681e-7,-0.005569496192038059,-0.005402309820055962,0.014982388354837894,0.9998576641082764,0.9999997615814209,0.9999998807907104,0.9999998211860657],[["IndexFinger3_R",[-3.167941997617163e-8,0.015219328925013542,1.4340538712076523e-7,0.02257685363292694,-0.0029471623711287975,-0.02278923988342285,0.9994810223579407,1,0.9999995827674866,0.9999998807907104],[]]]]]]]]]]]]]],["Left_shoulder",[0.018790405243635178,0.1747818887233734,-0.0002424004633212462,-0.5975832939147949,-0.4451693594455719,-0.5144046545028687,0.42438948154449463,0.9999998807907104,0.9999998807907104,0.9999995827674866],[["Left_arm",[1.3969838619232178e-9,0.06950058043003082,-1.0337680578231812e-7,-0.17996826767921448,-0.19331371784210205,0.08750160038471222,0.9605127573013306,1.0000003576278687,0.9999999403953552,1.0000001192092896],[["Left_elbow",[-2.5659550928480712e-8,0.21507783234119415,1.0907623959610646e-7,-0.007842880673706532,0.0019107592524960637,-0.013383783400058746,0.9998778700828552,0.9999998807907104,0.9999999403953552,1.0000001192092896],[["Left_wrist",[-1.5220155802353474e-8,0.1890687644481659,-4.7414722814664856e-8,0.003825301770120859,-0.019272271543741226,0.03635850548744202,0.9991456866264343,0.9999527931213379,0.9999997019767761,0.9999744296073914],[["Thumb0_L",[0.0015275380574166775,0.013934840448200703,-0.014487024396657944,-0.3351394832134247,-0.17010395228862762,-0.12714055180549622,0.9179223775863647,0.9999998807907104,0.9999998807907104,0.9999998211860657],[["Thumb1_L",[-1.6947907965914055e-8,0.04145832359790802,5.602798580639501e-8,0.16773849725723267,0.07295140624046326,0.07105859369039536,0.9805572628974915,1.0000003576278687,1.0000001192092896,1.0000004768371582],[["Thumb2_L",[-6.332993507385254e-8,0.019382163882255554,2.60770320892334e-8,0.006650859955698252,0.037380147725343704,-0.031075097620487213,0.9987958073616028,0.9999998807907104,0.9999998211860657,0.9999997615814209],[]]]]]],["LittleFinger1_L",[-0.01916319690644741,0.06474068760871887,0.011390762403607368,-0.030019866302609444,-0.0014784729573875666,-0.03402400389313698,0.9989689588546753,0.9999997615814209,1,0.9999995231628418],[["LittleFinger2_L",[2.514570951461792e-8,0.027081817388534546,2.8870999813079834e-8,0.03466673940420151,0.04437600448727608,-0.024599377065896988,0.9981101751327515,0.9999999403953552,1,1.0000001192092896],[["LittleFinger3_L",[8.014277597112596e-8,0.012310044839978218,3.073186150004403e-8,-0.07591863721609116,-0.0781082957983017,0.021822672337293625,0.9938104748725891,1,1.0000003576278687,1.000000238418579],[]]]]]],["RingFinger1_L",[-0.005454880651086569,0.06837291270494461,0.0068704127334058285,-0.0357399582862854,-0.014315797947347164,-0.019847838208079338,0.9990614652633667,0.9999997019767761,1,0.9999999403953552],[["RingFinger2_L",[2.394732412369649e-8,0.03308451548218727,-2.8065223034445808e-8,0.008181936107575893,0.0072730788961052895,-0.001341068185865879,0.9999392628669739,0.9999997615814209,0.9999998807907104,0.9999998211860657],[["RingFinger3_L",[-1.004644190061299e-8,0.01796233281493187,-3.7867677882275075e-9,-0.011276206001639366,0.01896512135863304,-0.04194345325231552,0.9988764524459839,1.0000001192092896,1,1.000000238418579],[]]]]]],["MiddleFinger1_L",[0.007915681228041649,0.07168976217508316,-0.002111495938152075,-0.02076040767133236,-0.017343644052743912,0.003328082850202918,0.999628484249115,0.9999997019767761,0.9999998807907104,0.9999998807907104],[["MiddleFinger2_L",[7.450580596923828e-9,0.03515138849616051,-1.30385160446167e-7,-0.006087168585509062,0.00540324067696929,-0.015214309096336365,0.9998511672019958,1.0000001192092896,1.000000238418579,1.0000001192092896],[["MiddleFinger3_L",[-6.839679400627574e-8,0.019062433391809464,-5.216803344865184e-8,0.0050251055508852005,0.03812279924750328,-0.05196557566523552,0.997908353805542,0.9999999403953552,0.9999999403953552,1.000000238418579],[]]]]]],["IndexFinger1_L",[0.01779543049633503,0.07101528346538544,-0.014736324548721313,-0.01829489879310131,-0.0063277240842580795,-0.011805121786892414,0.9997429847717285,0.9999997615814209,0.9999998807907104,0.9999998807907104],[["IndexFinger2_L",[-5.397573588084015e-8,0.031378962099552155,-1.8634620957413972e-8,-0.0055688172578811646,0.0054030949249863625,-0.014982689172029495,0.9998576641082764,0.9999999403953552,1.0000001192092896,0.9999999403953552],[["IndexFinger3_L",[5.59308048764251e-8,0.015219523571431637,-1.0254986904101315e-7,0.022577444091439247,0.0029488063883036375,0.022788310423493385,0.9994810223579407,1.0000001192092896,1.0000001192092896,1],[]]]]]]]]]]]]]]]]]],["Right_leg",[-0.07171519845724106,0.11545264720916748,0.013953566551208496,1,-3.3001185012921383e-15,7.549787994776125e-8,4.371138473402425e-8,1,1,1],[["Right_knee",[-0.005757778882980347,-0.38112956285476685,-0.02434052713215351,-0.9978883862495422,0.00334024615585804,0.0032219490967690945,0.06478682905435562,1,1,1.000006079673767],[["Right_ankle",[-1.04482751339674e-8,0.41037216782569885,-5.238689482212067e-10,-0.5227291584014893,0.003925474360585213,-0.001032647560350597,0.8524892330169678,1,1.0000063180923462,1.0000017881393433],[["Right_toe",[1.4420045157947925e-9,0.13481487333774567,2.1529187321789323e-9,-0.014249805361032486,-0.9540945291519165,0.295349657535553,0.04763595014810562,1.000000238418579,0.9999997615814209,1.000000238418579],[]]]]]],["Right_leg_2",[-1.2538918348070638e-8,1.2243042135651194e-7,4.406330855744045e-9,-0.9994344711303711,0.007606137543916702,0.007319035939872265,0.031929031014442444,1.000003695487976,0.9999999403953552,1.0000666379928589],[]]]],["Left_leg",[0.07171519845724106,0.11545264720916748,0.013953600078821182,1,-3.3001185012921383e-15,7.549787994776125e-8,4.371138473402425e-8,1,1,1],[["Left_knee",[0.005757778882980347,-0.38112956285476685,-0.02434053272008896,-0.997888445854187,-0.0033341345842927694,-0.003221433609724045,0.0647864118218422,1.0000001192092896,1,0.9999916553497314],[["Left_ankle",[4.71482053399086e-9,0.41037219762802124,-8.498318493366241e-9,-0.5227322578430176,-0.003925326745957136,0.0010325344046577811,0.8524872660636902,1,1.000006914138794,1.0000017881393433],[["Left_toe",[5.078697018490175e-9,0.13481630384922028,3.6854230778260444e-9,-0.00705345906317234,0.9549729228019714,-0.2956053912639618,0.024385549128055573,1.0000001192092896,0.9999997615814209,1],[]]]]]],["Left_leg_2",[1.7263394269662058e-8,1.2243042135651194e-7,3.0436120290744384e-9,-0.9994344711303711,-0.0076051512733101845,-0.007318862713873386,0.031929049640893936,1.000003695487976,0.9999998211860657,1.0000663995742798],[]]]],["ButtTail1",[-1.1981897252155704e-8,-0.02092289924621582,0.050255756825208664,0.5375427007675171,-1.0052156085293973e-7,6.408001951285769e-8,0.8432365655899048,1,1.000000238418579,1.0000001192092896],[["ButtTail2",[1.0191943551065174e-21,0.0586438924074173,-7.127986201282965e-9,-0.12333579361438751,6.8843801339713625e-15,9.183842075222767e-15,0.9923650026321411,1,0.9999998807907104,1],[["ButtTail3",[4.235164736271502e-22,0.10357242822647095,-2.2351741790771484e-8,-0.03757038712501526,1.1912510444744839e-7,-4.478739157320888e-9,0.9992939829826355,0.9999998807907104,0.9999999403953552,1],[["ButtTail4",[-5.4619776109214764e-15,0.11008850485086441,7.876878527213194e-8,-0.1003396213054657,-1.186076019621396e-7,-1.1961430068652135e-8,0.9949532747268677,1.000000238418579,0.9999998211860657,1],[["ButtTail5",[2.010920699710984e-21,0.09006699919700623,-1.0566629526920224e-7,0.105939120054245,-7.351681011191508e-15,1.4716131891095822e-14,0.9943727254867554,0.9999998807907104,1.0000001192092896,1.0000001192092896],[["ButtTail6",[-1.6940658945086007e-21,0.07949180901050568,-1.4901161193847656e-8,0.14714114367961884,-5.748782119828835e-15,-1.0824529435703059e-15,0.9891155958175659,1.0000001192092896,1,0.9999998807907104],[["ButtTail7",[1.6940658945086007e-21,0.08018326759338379,4.470348358154297e-8,0.06513970345258713,-2.4075060758713736e-15,-1.014999792453065e-15,0.9978761672973633,0.9999998807907104,0.9999999403953552,0.9999998211860657],[]]]]]]]]]]]]]]]],["Body",[0,0,0,0,0,0,1,1,1,1],[["Ia body.007_0",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_1",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_2",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_3",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_4",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_5",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_6",[0,0,0,0,0,0,1,1,1,1],[]],["Ia body.007_7",[0,0,0,0,0,0,1,1,1,1],[]]]]]]`;
new THREE.Vector3();
const upRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
const leftRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI * 0.8);
const rightRotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI * 0.8);
new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
const localVector = new THREE.Vector3();
new THREE.Vector3();
new THREE.Vector3();
new THREE.Vector3();
new THREE.Vector3();
new THREE.Vector3();
new THREE.Quaternion();
new THREE.Quaternion();
new THREE.Matrix4();
const _localizeMatrixWorld = (bone) => {
  bone.matrix.copy(bone.matrixWorld);
  if (bone.parent) {
    bone.matrix.premultiply(new THREE.Matrix4().copy(bone.parent.matrixWorld).invert());
  }
  bone.matrix.decompose(bone.position, bone.quaternion, bone.scale);
  for (let i = 0; i < bone.children.length; i++) {
    _localizeMatrixWorld(bone.children[i]);
  }
};
const _findBoneDeep = (bones, boneName) => {
  for (let i = 0; i < bones.length; i++) {
    const bone = bones[i];
    if (bone.name === boneName) {
      return bone;
    } else {
      const deepBone = _findBoneDeep(bone.children, boneName);
      if (deepBone) {
        return deepBone;
      }
    }
  }
  return null;
};
const _copySkeleton = (src, dst) => {
  for (let i = 0; i < src.bones.length; i++) {
    const srcBone = src.bones[i];
    const dstBone = _findBoneDeep(dst.bones, srcBone.name);
    dstBone.matrixWorld.copy(srcBone.matrixWorld);
  }
  const armature = dst.bones[0].parent;
  _localizeMatrixWorld(armature);
  dst.calculateInverses();
};
const cubeGeometry = new THREE.ConeBufferGeometry(0.05, 0.2, 3).applyMatrix4(
  new THREE.Matrix4().makeRotationFromQuaternion(
    new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1))
  )
);
const cubeMaterials = {};
const _getCubeMaterial = (color) => {
  let material = cubeMaterials[color];
  if (!material) {
    material = new THREE.MeshPhongMaterial({
      color,
      flatShading: true
    });
    cubeMaterials[color] = material;
  }
  return material;
};
const _makeCubeMesh = (color = 255) => {
  const mesh = new THREE.Mesh(cubeGeometry, _getCubeMaterial(color));
  mesh.frustumCulled = false;
  mesh.updateMatrixWorld = () => {
  };
  return mesh;
};
const _makeDebugMeshes = () => ({
  eyes: _makeCubeMesh(16711680),
  head: _makeCubeMesh(16744576),
  chest: _makeCubeMesh(16776960),
  leftShoulder: _makeCubeMesh(65280),
  rightShoulder: _makeCubeMesh(32768),
  leftUpperArm: _makeCubeMesh(65535),
  rightUpperArm: _makeCubeMesh(32896),
  leftLowerArm: _makeCubeMesh(255),
  rightLowerArm: _makeCubeMesh(128),
  leftHand: _makeCubeMesh(16777215),
  rightHand: _makeCubeMesh(8421504),
  hips: _makeCubeMesh(16711680),
  leftUpperLeg: _makeCubeMesh(16776960),
  rightUpperLeg: _makeCubeMesh(8421376),
  leftLowerLeg: _makeCubeMesh(65280),
  rightLowerLeg: _makeCubeMesh(32768),
  leftFoot: _makeCubeMesh(16777215),
  rightFoot: _makeCubeMesh(8421504)
});
const _getTailBones = (skeleton) => {
  const result = [];
  const _recurse = (bones) => {
    for (let i = 0; i < bones.length; i++) {
      const bone = bones[i];
      if (bone.children.length === 0) {
        if (!result.includes(bone)) {
          result.push(bone);
        }
      } else {
        _recurse(bone.children);
      }
    }
  };
  _recurse(skeleton.bones);
  return result;
};
const _findClosestParentBone = (bone, pred) => {
  for (; bone; bone = bone.parent) {
    if (pred(bone)) {
      return bone;
    }
  }
  return null;
};
const _findFurthestParentBone = (bone, pred) => {
  let result = null;
  for (; bone; bone = bone.parent) {
    if (pred(bone)) {
      result = bone;
    }
  }
  return result;
};
const _distanceToParentBone = (bone, parentBone) => {
  for (let i = 0; bone; bone = bone.parent, i++) {
    if (bone === parentBone) {
      return i;
    }
  }
  return Infinity;
};
const _findClosestChildBone = (bone, pred) => {
  const _recurse = (bone2) => {
    if (pred(bone2)) {
      return bone2;
    } else {
      for (let i = 0; i < bone2.children.length; i++) {
        const result = _recurse(bone2.children[i]);
        if (result) {
          return result;
        }
      }
      return null;
    }
  };
  return _recurse(bone);
};
const _countCharacters = (name, regex) => {
  let result = 0;
  for (let i = 0; i < name.length; i++) {
    if (regex.test(name[i])) {
      result++;
    }
  }
  return result;
};
const _findHips = (skeleton) => skeleton.bones.find((bone) => /hip/i.test(bone.name));
const _findHead = (tailBones) => {
  const headBones = tailBones.map((tailBone) => {
    const headBone2 = _findFurthestParentBone(tailBone, (bone) => /head/i.test(bone.name));
    if (headBone2) {
      return headBone2;
    } else {
      return null;
    }
  }).filter((bone) => bone);
  const headBone = headBones.length > 0 ? headBones[0] : null;
  if (headBone) {
    return headBone;
  } else {
    return null;
  }
};
const _findEye = (tailBones, left) => {
  const regexp = left ? /l/i : /r/i;
  const eyeBones = tailBones.map((tailBone) => {
    const eyeBone2 = _findFurthestParentBone(tailBone, (bone) => /eye/i.test(bone.name) && regexp.test(bone.name.replace(/eye/gi, "")));
    if (eyeBone2) {
      return eyeBone2;
    } else {
      return null;
    }
  }).filter((spec) => spec).sort((a, b) => {
    const aName = a.name.replace(/shoulder/gi, "");
    const aLeftBalance = _countCharacters(aName, /l/i) - _countCharacters(aName, /r/i);
    const bName = b.name.replace(/shoulder/gi, "");
    const bLeftBalance = _countCharacters(bName, /l/i) - _countCharacters(bName, /r/i);
    if (!left) {
      return aLeftBalance - bLeftBalance;
    } else {
      return bLeftBalance - aLeftBalance;
    }
  });
  const eyeBone = eyeBones.length > 0 ? eyeBones[0] : null;
  if (eyeBone) {
    return eyeBone;
  } else {
    return null;
  }
};
const _findSpine = (chest, hips) => {
  for (let bone = chest; bone; bone = bone.parent) {
    if (bone.parent === hips) {
      return bone;
    }
  }
  return null;
};
const _findShoulder = (tailBones, left) => {
  const regexp = left ? /l/i : /r/i;
  const shoulderBones = tailBones.map((tailBone) => {
    const shoulderBone2 = _findClosestParentBone(tailBone, (bone) => /shoulder/i.test(bone.name) && regexp.test(bone.name.replace(/shoulder/gi, "")));
    if (shoulderBone2) {
      const distance = _distanceToParentBone(tailBone, shoulderBone2);
      if (distance >= 3) {
        return {
          bone: shoulderBone2,
          distance
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  }).filter((spec) => spec).sort((a, b) => {
    const diff = b.distance - a.distance;
    if (diff !== 0) {
      return diff;
    } else {
      const aName = a.bone.name.replace(/shoulder/gi, "");
      const aLeftBalance = _countCharacters(aName, /l/i) - _countCharacters(aName, /r/i);
      const bName = b.bone.name.replace(/shoulder/gi, "");
      const bLeftBalance = _countCharacters(bName, /l/i) - _countCharacters(bName, /r/i);
      if (!left) {
        return aLeftBalance - bLeftBalance;
      } else {
        return bLeftBalance - aLeftBalance;
      }
    }
  });
  const shoulderBone = shoulderBones.length > 0 ? shoulderBones[0].bone : null;
  if (shoulderBone) {
    return shoulderBone;
  } else {
    return null;
  }
};
const _findHand = (shoulderBone) => _findClosestChildBone(shoulderBone, (bone) => /hand|wrist/i.test(bone.name));
const _findFoot = (tailBones, left) => {
  const regexp = left ? /l/i : /r/i;
  const legBones = tailBones.map((tailBone) => {
    const footBone2 = _findFurthestParentBone(tailBone, (bone) => /foot|ankle/i.test(bone.name) && regexp.test(bone.name.replace(/foot|ankle/gi, "")));
    if (footBone2) {
      const legBone = _findFurthestParentBone(footBone2, (bone) => /leg|thigh/i.test(bone.name) && regexp.test(bone.name.replace(/leg|thigh/gi, "")));
      if (legBone) {
        const distance = _distanceToParentBone(footBone2, legBone);
        if (distance >= 2) {
          return {
            footBone: footBone2,
            distance
          };
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }).filter((spec) => spec).sort((a, b) => {
    const diff = b.distance - a.distance;
    if (diff !== 0) {
      return diff;
    } else {
      const aName = a.footBone.name.replace(/foot|ankle/gi, "");
      const aLeftBalance = _countCharacters(aName, /l/i) - _countCharacters(aName, /r/i);
      const bName = b.footBone.name.replace(/foot|ankle/gi, "");
      const bLeftBalance = _countCharacters(bName, /l/i) - _countCharacters(bName, /r/i);
      if (!left) {
        return aLeftBalance - bLeftBalance;
      } else {
        return bLeftBalance - aLeftBalance;
      }
    }
  });
  const footBone = legBones.length > 0 ? legBones[0].footBone : null;
  if (footBone) {
    return footBone;
  } else {
    return null;
  }
};
const _findArmature = (bone) => {
  for (; ; bone = bone.parent) {
    if (!bone.isBone) {
      return bone;
    }
  }
  return null;
};
const _importObject = (b, Cons, ChildCons) => {
  const [name, array, children] = b;
  const bone = new Cons();
  bone.name = name;
  bone.position.fromArray(array, 0);
  bone.quaternion.fromArray(array, 3);
  bone.scale.fromArray(array, 3 + 4);
  for (let i = 0; i < children.length; i++) {
    bone.add(_importObject(children[i], ChildCons, ChildCons));
  }
  return bone;
};
const _importArmature = (b) => _importObject(b, THREE.Object3D, THREE.Bone);
const _importSkeleton = (s) => {
  const armature = _importArmature(JSON.parse(s));
  return new THREE.Skeleton(armature.children);
};
class Avatar {
  constructor(object, options = {}) {
    const model = (() => {
      let o2 = object;
      if (o2 && !o2.isMesh) {
        o2 = o2.scene;
      }
      if (!o2) {
        const scene = new THREE.Scene();
        const skinnedMesh = new THREE.Object3D();
        skinnedMesh.isSkinnedMesh = true;
        skinnedMesh.skeleton = null;
        skinnedMesh.bind = function(skeleton2) {
          this.skeleton = skeleton2;
        };
        skinnedMesh.bind(_importSkeleton(skeletonString));
        scene.add(skinnedMesh);
        const hips = _findHips(skinnedMesh.skeleton);
        const armature2 = _findArmature(hips);
        scene.add(armature2);
        o2 = scene;
      }
      return o2;
    })();
    this.model = model;
    this.options = options;
    model.updateMatrixWorld(true);
    const skinnedMeshes = [];
    model.traverse((o2) => {
      if (o2.isSkinnedMesh) {
        skinnedMeshes.push(o2);
      }
    });
    skinnedMeshes.sort((a, b) => b.skeleton.bones.length - a.skeleton.bones.length);
    this.skinnedMeshes = skinnedMeshes;
    const skeletonSkinnedMesh = skinnedMeshes.find((o2) => o2.skeleton.bones[0].parent) || null;
    const skeleton = skeletonSkinnedMesh && skeletonSkinnedMesh.skeleton;
    const poseSkeletonSkinnedMesh = skeleton ? skinnedMeshes.find((o2) => o2.skeleton !== skeleton && o2.skeleton.bones.length >= skeleton.bones.length) : null;
    const poseSkeleton = poseSkeletonSkinnedMesh && poseSkeletonSkinnedMesh.skeleton;
    if (poseSkeleton) {
      _copySkeleton(poseSkeleton, skeleton);
      poseSkeletonSkinnedMesh.bind(skeleton);
    }
    if (options.debug) {
      const debugMeshes = _makeDebugMeshes();
      for (const k in debugMeshes) {
        this.model.add(debugMeshes[k]);
      }
      this.debugMeshes = debugMeshes;
    } else {
      this.debugMeshes = null;
    }
    const tailBones = _getTailBones(skeleton);
    const Eye_L = _findEye(tailBones, true);
    const Eye_R = _findEye(tailBones, false);
    const Head = _findHead(tailBones);
    const Neck = Head.parent;
    const Chest = Neck.parent;
    const Hips = _findHips(skeleton);
    const Spine = _findSpine(Chest, Hips);
    const Left_shoulder = _findShoulder(tailBones, true);
    const Left_wrist = _findHand(Left_shoulder);
    const Left_elbow = Left_wrist.parent;
    const Left_arm = Left_elbow.parent;
    const Right_shoulder = _findShoulder(tailBones, false);
    const Right_wrist = _findHand(Right_shoulder);
    const Right_elbow = Right_wrist.parent;
    const Right_arm = Right_elbow.parent;
    const Left_ankle = _findFoot(tailBones, true);
    const Left_knee = Left_ankle.parent;
    const Left_leg = Left_knee.parent;
    const Right_ankle = _findFoot(tailBones, false);
    const Right_knee = Right_ankle.parent;
    const Right_leg = Right_knee.parent;
    const modelBones = {
      Hips,
      Spine,
      Chest,
      Neck,
      Head,
      Left_shoulder,
      Left_arm,
      Left_elbow,
      Left_wrist,
      Left_leg,
      Left_knee,
      Left_ankle,
      Right_shoulder,
      Right_arm,
      Right_elbow,
      Right_wrist,
      Right_leg,
      Right_knee,
      Right_ankle
    };
    this.modelBones = modelBones;
    const armature = _findArmature(Hips);
    const _getEyePosition = () => {
      if (Eye_L && Eye_R) {
        return Eye_L.getWorldPosition(new THREE.Vector3()).add(Eye_R.getWorldPosition(new THREE.Vector3())).divideScalar(2);
      } else {
        const neckToHeadDiff = Head.getWorldPosition(new THREE.Vector3()).sub(Neck.getWorldPosition(new THREE.Vector3()));
        if (neckToHeadDiff.z < 0) {
          neckToHeadDiff.z *= -1;
        }
        return Head.getWorldPosition(new THREE.Vector3()).add(neckToHeadDiff);
      }
    };
    const leftArmDirection = Left_wrist.getWorldPosition(new THREE.Vector3()).sub(Head.getWorldPosition(new THREE.Vector3()));
    const flipZ = leftArmDirection.x < 0;
    const armatureDirection = new THREE.Vector3(0, 1, 0).applyQuaternion(armature.quaternion);
    const flipY = armatureDirection.z < -0.5;
    const legDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(Left_leg.getWorldQuaternion(new THREE.Quaternion()).premultiply(armature.quaternion.clone().invert()));
    const flipLeg = legDirection.y < 0.5;
    this.flipZ = flipZ;
    this.flipY = flipY;
    this.flipLeg = flipLeg;
    const armatureQuaternion = armature.quaternion.clone();
    const armatureMatrixInverse = new THREE.Matrix4().copy(armature.matrixWorld).invert();
    armature.position.set(0, 0, 0);
    armature.quaternion.set(0, 0, 0, 1);
    armature.scale.set(1, 1, 1);
    armature.updateMatrix();
    Head.traverse((o2) => {
      o2.savedPosition = o2.position.clone();
      o2.savedMatrixWorld = o2.matrixWorld.clone();
    });
    const allHairBones = [];
    const _recurseAllHairBones = (bones) => {
      for (let i = 0; i < bones.length; i++) {
        const bone = bones[i];
        if (/hair/i.test(bone.name)) {
          allHairBones.push(bone);
        }
        _recurseAllHairBones(bone.children);
      }
    };
    _recurseAllHairBones(skeleton.bones);
    const hairBones = tailBones.filter((bone) => /hair/i.test(bone.name)).map((bone) => {
      for (; bone; bone = bone.parent) {
        if (bone.parent === Head) {
          return bone;
        }
      }
      return null;
    }).filter((bone) => bone);
    this.allHairBones = allHairBones;
    this.hairBones = hairBones;
    this.springBoneManager = null;
    if (options.hair) {
      new Promise((accept, reject) => {
        if (!object) {
          object = {};
        }
        if (!object.parser) {
          object.parser = {
            json: {
              extensions: {}
            }
          };
        }
        if (!object.parser.json.extensions) {
          object.parser.json.extensions = {};
        }
        if (!object.parser.json.extensions.VRM) {
          object.parser.json.extensions.VRM = {
            secondaryAnimation: {
              boneGroups: this.hairBones.map((hairBone) => {
                const boneIndices = [];
                const _recurse = (bone) => {
                  boneIndices.push(this.allHairBones.indexOf(bone));
                  if (bone.children.length > 0) {
                    _recurse(bone.children[0]);
                  }
                };
                _recurse(hairBone);
                return {
                  comment: hairBone.name,
                  stiffiness: 0.5,
                  gravityPower: 0.2,
                  gravityDir: {
                    x: 0,
                    y: -1,
                    z: 0
                  },
                  dragForce: 0.3,
                  center: -1,
                  hitRadius: 0.02,
                  bones: boneIndices,
                  colliderGroups: []
                };
              })
            }
          };
          object.parser.getDependency = async (type, nodeIndex) => {
            if (type === "node") {
              return this.allHairBones[nodeIndex];
            } else {
              throw new Error("unsupported type");
            }
          };
        }
        new Te().import(object).then((springBoneManager) => {
          this.springBoneManager = springBoneManager;
        });
      });
    }
    const _findFinger = (r, left) => {
      const fingerTipBone = tailBones.filter((bone) => r.test(bone.name) && _findClosestParentBone(bone, (bone2) => bone2 === modelBones.Left_wrist || bone2 === modelBones.Right_wrist)).sort((a, b) => {
        const aName = a.name.replace(r, "");
        const aLeftBalance = _countCharacters(aName, /l/i) - _countCharacters(aName, /r/i);
        const bName = b.name.replace(r, "");
        const bLeftBalance = _countCharacters(bName, /l/i) - _countCharacters(bName, /r/i);
        if (!left) {
          return aLeftBalance - bLeftBalance;
        } else {
          return bLeftBalance - aLeftBalance;
        }
      });
      let fingerRootBone = fingerTipBone.length > 0 ? _findFurthestParentBone(fingerTipBone[0], (bone) => r.test(bone.name)) : null;
      if (fingerRootBone == null ? void 0 : fingerRootBone.parent)
        fingerRootBone = fingerRootBone.parent;
      return fingerRootBone;
    };
    const fingerBones = {
      left: {
        thumb: _findFinger(/thumb/gi, true),
        index: _findFinger(/index/gi, true),
        middle: _findFinger(/middle/gi, true),
        ring: _findFinger(/ring/gi, true),
        little: _findFinger(/little/gi, true) || _findFinger(/pinky/gi, true)
      },
      right: {
        thumb: _findFinger(/thumb/gi, false),
        index: _findFinger(/index/gi, false),
        middle: _findFinger(/middle/gi, false),
        ring: _findFinger(/ring/gi, false),
        little: _findFinger(/little/gi, false) || _findFinger(/pinky/gi, false)
      }
    };
    this.fingerBones = fingerBones;
    const preRotations = {};
    const _ensurePrerotation = (k) => {
      const boneName = modelBones[k].name;
      if (!preRotations[boneName]) {
        preRotations[boneName] = new THREE.Quaternion();
      }
      return preRotations[boneName];
    };
    if (flipY) {
      ["Hips"].forEach((k) => {
        _ensurePrerotation(k).premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2));
      });
    }
    if (flipZ) {
      ["Hips"].forEach((k) => {
        _ensurePrerotation(k).premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI));
      });
    }
    if (flipLeg) {
      ["Left_leg", "Right_leg"].forEach((k) => {
        _ensurePrerotation(k).premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2));
      });
    }
    const qrArm = flipZ ? Left_arm : Right_arm;
    const qrElbow = flipZ ? Left_elbow : Right_elbow;
    const qrWrist = flipZ ? Left_wrist : Right_wrist;
    const qr = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2).premultiply(
      new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(
        new THREE.Vector3(0, 0, 0),
        qrElbow.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse).sub(qrArm.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse)).applyQuaternion(armatureQuaternion),
        new THREE.Vector3(0, 1, 0)
      ))
    );
    const qr2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2).premultiply(
      new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(
        new THREE.Vector3(0, 0, 0),
        qrWrist.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse).sub(qrElbow.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse)).applyQuaternion(armatureQuaternion),
        new THREE.Vector3(0, 1, 0)
      ))
    );
    const qlArm = flipZ ? Right_arm : Left_arm;
    const qlElbow = flipZ ? Right_elbow : Left_elbow;
    const qlWrist = flipZ ? Right_wrist : Left_wrist;
    const ql = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2).premultiply(
      new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(
        new THREE.Vector3(0, 0, 0),
        qlElbow.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse).sub(qlArm.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse)).applyQuaternion(armatureQuaternion),
        new THREE.Vector3(0, 1, 0)
      ))
    );
    const ql2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2).premultiply(
      new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(
        new THREE.Vector3(0, 0, 0),
        qlWrist.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse).sub(qlElbow.getWorldPosition(new THREE.Vector3()).applyMatrix4(armatureMatrixInverse)).applyQuaternion(armatureQuaternion),
        new THREE.Vector3(0, 1, 0)
      ))
    );
    _ensurePrerotation("Right_arm").multiply(qr.clone().invert());
    _ensurePrerotation("Right_elbow").multiply(qr.clone()).premultiply(qr2.clone().invert());
    _ensurePrerotation("Left_arm").multiply(ql.clone().invert());
    _ensurePrerotation("Left_elbow").multiply(ql.clone()).premultiply(ql2.clone().invert());
    _ensurePrerotation("Left_leg").premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2));
    _ensurePrerotation("Right_leg").premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2));
    for (const k in preRotations) {
      preRotations[k].invert();
    }
    fixSkeletonZForward(armature.children[0], {
      preRotations
    });
    model.traverse((o2) => {
      if (o2.isSkinnedMesh) {
        o2.bind(o2.skeleton.bones.length === skeleton.bones.length && o2.skeleton.bones.every((bone, i) => bone === skeleton.bones[i]) ? skeleton : o2.skeleton);
      }
    });
    if (flipY) {
      modelBones.Hips.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2));
    }
    if (!flipZ)
      ;
    else {
      modelBones.Hips.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI));
    }
    modelBones.Right_arm.quaternion.premultiply(qr.clone().invert());
    modelBones.Right_elbow.quaternion.premultiply(qr).premultiply(qr2.clone().invert());
    modelBones.Left_arm.quaternion.premultiply(ql.clone().invert());
    modelBones.Left_elbow.quaternion.premultiply(ql).premultiply(ql2.clone().invert());
    model.updateMatrixWorld(true);
    Hips.traverse((bone) => {
      bone.initialQuaternion = bone.quaternion.clone();
    });
    const _averagePoint = (points) => {
      const result = new THREE.Vector3();
      for (let i = 0; i < points.length; i++) {
        result.add(points[i]);
      }
      result.divideScalar(points.length);
      return result;
    };
    const eyePosition = _getEyePosition();
    this.poseManager = new PoseManager(this);
    this.shoulderTransforms = new ShoulderTransforms(this);
    this.legsManager = new LegsManager(this);
    const _getOffset = (bone, parent = bone.parent) => bone.getWorldPosition(new THREE.Vector3()).sub(parent.getWorldPosition(new THREE.Vector3()));
    this.initializeBonePositions({
      spine: _getOffset(modelBones.Spine),
      chest: _getOffset(modelBones.Chest, modelBones.Spine),
      neck: _getOffset(modelBones.Neck),
      head: _getOffset(modelBones.Head),
      eyes: eyePosition.clone().sub(Head.getWorldPosition(new THREE.Vector3())),
      leftShoulder: _getOffset(modelBones.Right_shoulder),
      leftUpperArm: _getOffset(modelBones.Right_arm),
      leftLowerArm: _getOffset(modelBones.Right_elbow),
      leftHand: _getOffset(modelBones.Right_wrist),
      rightShoulder: _getOffset(modelBones.Left_shoulder),
      rightUpperArm: _getOffset(modelBones.Left_arm),
      rightLowerArm: _getOffset(modelBones.Left_elbow),
      rightHand: _getOffset(modelBones.Left_wrist),
      leftUpperLeg: _getOffset(modelBones.Right_leg),
      leftLowerLeg: _getOffset(modelBones.Right_knee),
      leftFoot: _getOffset(modelBones.Right_ankle),
      rightUpperLeg: _getOffset(modelBones.Left_leg),
      rightLowerLeg: _getOffset(modelBones.Left_knee),
      rightFoot: _getOffset(modelBones.Left_ankle)
    });
    this.height = eyePosition.sub(_averagePoint([modelBones.Left_ankle.getWorldPosition(new THREE.Vector3()), modelBones.Right_ankle.getWorldPosition(new THREE.Vector3())])).y;
    this.shoulderWidth = modelBones.Left_arm.getWorldPosition(new THREE.Vector3()).distanceTo(modelBones.Right_arm.getWorldPosition(new THREE.Vector3()));
    this.leftArmLength = this.shoulderTransforms.leftArm.armLength;
    this.rightArmLength = this.shoulderTransforms.rightArm.armLength;
    this.inputs = {
      hmd: this.poseManager.vrTransforms.head,
      leftGamepad: this.poseManager.vrTransforms.rightHand,
      rightGamepad: this.poseManager.vrTransforms.leftHand
    };
    this.inputs.hmd.scaleFactor = 1;
    this.lastModelScaleFactor = 1;
    this.outputs = {
      eyes: this.shoulderTransforms.eyes,
      head: this.shoulderTransforms.head,
      hips: this.legsManager.hips,
      spine: this.shoulderTransforms.spine,
      chest: this.shoulderTransforms.transform,
      neck: this.shoulderTransforms.neck,
      leftShoulder: this.shoulderTransforms.leftShoulderAnchor,
      leftUpperArm: this.shoulderTransforms.leftArm.upperArm,
      leftLowerArm: this.shoulderTransforms.leftArm.lowerArm,
      leftHand: this.shoulderTransforms.leftArm.hand,
      rightShoulder: this.shoulderTransforms.rightShoulderAnchor,
      rightUpperArm: this.shoulderTransforms.rightArm.upperArm,
      rightLowerArm: this.shoulderTransforms.rightArm.lowerArm,
      rightHand: this.shoulderTransforms.rightArm.hand,
      leftUpperLeg: this.legsManager.leftLeg.upperLeg,
      leftLowerLeg: this.legsManager.leftLeg.lowerLeg,
      leftFoot: this.legsManager.leftLeg.foot,
      rightUpperLeg: this.legsManager.rightLeg.upperLeg,
      rightLowerLeg: this.legsManager.rightLeg.lowerLeg,
      rightFoot: this.legsManager.rightLeg.foot
    };
    this.modelBoneOutputs = {
      Hips: this.outputs.hips,
      Spine: this.outputs.spine,
      Chest: this.outputs.chest,
      Neck: this.outputs.neck,
      Head: this.outputs.head,
      Left_shoulder: this.outputs.rightShoulder,
      Left_arm: this.outputs.rightUpperArm,
      Left_elbow: this.outputs.rightLowerArm,
      Left_wrist: this.outputs.rightHand,
      Left_leg: this.outputs.rightUpperLeg,
      Left_knee: this.outputs.rightLowerLeg,
      Left_ankle: this.outputs.rightFoot,
      Right_shoulder: this.outputs.leftShoulder,
      Right_arm: this.outputs.leftUpperArm,
      Right_elbow: this.outputs.leftLowerArm,
      Right_wrist: this.outputs.leftHand,
      Right_leg: this.outputs.leftUpperLeg,
      Right_knee: this.outputs.leftLowerLeg,
      Right_ankle: this.outputs.leftFoot
    };
    this.microphoneWorker = null;
    this.volume = 0;
    this.setMicrophoneMediaStream(options.microphoneMediaStream, {
      muted: options.muted,
      microphoneWorkletUrl: options.microphoneWorkletUrl
    });
    this.lastTimestamp = Date.now();
    this.shoulderTransforms.Start();
    this.legsManager.Start();
    this.decapitated = false;
    if (options.decapitate) {
      this.decapitate();
    }
  }
  initializeBonePositions(setups) {
    this.shoulderTransforms.spine.position.copy(setups.spine);
    this.shoulderTransforms.transform.position.copy(setups.chest);
    this.shoulderTransforms.neck.position.copy(setups.neck);
    this.shoulderTransforms.head.position.copy(setups.head);
    this.shoulderTransforms.eyes.position.copy(setups.eyes);
    this.shoulderTransforms.leftShoulderAnchor.position.copy(setups.leftShoulder);
    this.shoulderTransforms.leftArm.upperArm.position.copy(setups.leftUpperArm);
    this.shoulderTransforms.leftArm.lowerArm.position.copy(setups.leftLowerArm);
    this.shoulderTransforms.leftArm.hand.position.copy(setups.leftHand);
    this.shoulderTransforms.rightShoulderAnchor.position.copy(setups.rightShoulder);
    this.shoulderTransforms.rightArm.upperArm.position.copy(setups.rightUpperArm);
    this.shoulderTransforms.rightArm.lowerArm.position.copy(setups.rightLowerArm);
    this.shoulderTransforms.rightArm.hand.position.copy(setups.rightHand);
    this.legsManager.leftLeg.upperLeg.position.copy(setups.leftUpperLeg);
    this.legsManager.leftLeg.lowerLeg.position.copy(setups.leftLowerLeg);
    this.legsManager.leftLeg.foot.position.copy(setups.leftFoot);
    this.legsManager.rightLeg.upperLeg.position.copy(setups.rightUpperLeg);
    this.legsManager.rightLeg.lowerLeg.position.copy(setups.rightLowerLeg);
    this.legsManager.rightLeg.foot.position.copy(setups.rightFoot);
    this.shoulderTransforms.hips.updateMatrixWorld();
  }
  update() {
    const wasDecapitated = this.decapitated;
    if (this.springBoneManager && wasDecapitated) {
      this.undecapitate();
    }
    const modelScaleFactor = this.inputs.hmd.scaleFactor;
    if (modelScaleFactor !== this.lastModelScaleFactor) {
      this.model.scale.set(modelScaleFactor, modelScaleFactor, modelScaleFactor);
      this.lastModelScaleFactor = modelScaleFactor;
      this.springBoneManager && this.springBoneManager.springBoneGroupList.forEach((springBoneGroup) => {
        springBoneGroup.forEach((springBone) => {
          springBone._worldBoneLength = springBone.bone.localToWorld(localVector.copy(springBone._initialLocalChildPosition)).sub(springBone._worldPosition).length();
        });
      });
    }
    this.shoulderTransforms.Update();
    this.legsManager.Update();
    for (const k in this.modelBones) {
      const modelBone = this.modelBones[k];
      const modelBoneOutput = this.modelBoneOutputs[k];
      if (k === "Hips") {
        modelBone.position.copy(modelBoneOutput.position);
      }
      modelBone.quaternion.multiplyQuaternions(modelBoneOutput.quaternion, modelBone.initialQuaternion);
      if (k === "Left_ankle" || k === "Right_ankle") {
        modelBone.quaternion.multiply(upRotation);
      } else if (k === "Left_wrist") {
        modelBone.quaternion.multiply(leftRotation);
      } else if (k === "Right_wrist") {
        modelBone.quaternion.multiply(rightRotation);
      }
      modelBone.updateMatrixWorld();
    }
    const now = Date.now();
    const timeDiff = Math.min(now - this.lastTimestamp, 1e3);
    this.lastTimestamp = now;
    if (this.options.fingers) {
      const _processFingerBones = (left) => {
        const fingerBones = left ? this.fingerBones.left : this.fingerBones.right;
        const gamepadInput = left ? this.inputs.leftGamepad : this.inputs.rightGamepad;
        for (const k in fingerBones) {
          const fingerBone = fingerBones[k];
          if (fingerBone) {
            let setter;
            if (k === "thumb") {
              setter = (q2, i) => q2.setFromAxisAngle(localVector.set(0, left ? 1 : -1, 0), gamepadInput.grip * Math.PI * (i === 0 ? 0.125 : 0.25));
            } else if (k === "index") {
              setter = (q2, i) => q2.setFromAxisAngle(localVector.set(0, 0, left ? -1 : 1), gamepadInput.pointer * Math.PI * 0.5);
            } else {
              setter = (q2, i) => q2.setFromAxisAngle(localVector.set(0, 0, left ? -1 : 1), gamepadInput.grip * Math.PI * 0.5);
            }
            let index = 0;
            fingerBone.traverse((subFingerBone) => {
              setter(subFingerBone.quaternion, index++);
            });
          }
        }
      };
      _processFingerBones(true);
      _processFingerBones(false);
    }
    if (this.springBoneManager) {
      this.springBoneManager.lateUpdate(timeDiff / 1e3);
    }
    if (this.springBoneManager && wasDecapitated) {
      this.decapitate();
    }
    if (this.options.visemes) {
      const aaValue = Math.min(this.volume * 10, 1);
      const blinkValue = (() => {
        const nowWindow = now % 2e3;
        if (nowWindow >= 0 && nowWindow < 100) {
          return nowWindow / 100;
        } else if (nowWindow >= 100 && nowWindow < 200) {
          return 1 - (nowWindow - 100) / 100;
        } else {
          return 0;
        }
      })();
      this.skinnedMeshes.forEach((o2) => {
        const { morphTargetDictionary, morphTargetInfluences } = o2;
        if (morphTargetDictionary && morphTargetInfluences) {
          const aaMorphTest = /.*_a+(?!\w+)/i;
          const aaMorphTarget = Object.keys(morphTargetDictionary).filter((key) => aaMorphTest.test(key));
          let aaMorphTargetIndex = morphTargetDictionary[aaMorphTarget];
          if (aaMorphTargetIndex === void 0) {
            aaMorphTargetIndex = morphTargetDictionary[26];
          }
          if (aaMorphTargetIndex !== void 0) {
            morphTargetInfluences[aaMorphTargetIndex] = aaValue;
          }
          const blinkLeftMorphTest = /.*blink_*l(?:eft)*/i;
          const blinkLeftMorphTarget = Object.keys(morphTargetDictionary).filter((key) => blinkLeftMorphTest.test(key));
          let blinkLeftMorphTargetIndex = morphTargetDictionary[blinkLeftMorphTarget];
          if (blinkLeftMorphTargetIndex === void 0) {
            blinkLeftMorphTargetIndex = morphTargetDictionary[16];
          }
          if (blinkLeftMorphTargetIndex !== void 0) {
            morphTargetInfluences[blinkLeftMorphTargetIndex] = blinkValue;
          }
          const blinkRightMorphTest = /.*blink_*r(?:ight)*/i;
          const blinkRightMorphTarget = Object.keys(morphTargetDictionary).filter((key) => blinkRightMorphTest.test(key));
          let blinkRightMorphTargetIndex = morphTargetDictionary[blinkRightMorphTarget];
          if (blinkRightMorphTargetIndex === void 0) {
            blinkRightMorphTargetIndex = morphTargetDictionary[17];
          }
          if (blinkRightMorphTargetIndex !== void 0) {
            morphTargetInfluences[blinkRightMorphTargetIndex] = blinkValue;
          }
        }
      });
    }
    if (this.debugMeshes) {
      for (const k in this.debugMeshes) {
        const mesh = this.debugMeshes[k];
        const output = this.outputs[k];
        mesh.matrixWorld.multiplyMatrices(this.model.matrixWorld, output.matrixWorld);
      }
    }
  }
  async setMicrophoneMediaStream(microphoneMediaStream, options = {}) {
    if (this.microphoneWorker) {
      this.microphoneWorker.close();
      this.microphoneWorker = null;
      setTimeout(() => {
        this.volume = 0;
      });
    }
    if (microphoneMediaStream) {
      this.microphoneWorker = new MicrophoneWorker(microphoneMediaStream, options);
      this.microphoneWorker.addEventListener("volume", (e) => {
        this.volume = this.volume * 0.8 + e.data * 0.2;
      });
    }
  }
  decapitate() {
    if (!this.decapitated) {
      this.modelBones.Head.traverse((o2) => {
        if (!o2.savedPosition || !o2.savedMatrixWorld)
          return;
        o2.savedPosition.copy(o2.position);
        o2.savedMatrixWorld.copy(o2.matrixWorld);
        o2.position.set(NaN, NaN, NaN);
        o2.matrixWorld.set(NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN);
      });
      if (this.debugMeshes) {
        [this.debugMeshes.eyes, this.debugMeshes.head].forEach((mesh) => {
          mesh.visible = false;
        });
      }
      this.decapitated = true;
    }
  }
  undecapitate() {
    if (this.decapitated) {
      this.modelBones.Head.traverse((o2) => {
        if (!o2.savedPosition || !o2.savedMatrixWorld)
          return;
        o2.position.copy(o2.savedPosition);
        o2.matrixWorld.copy(o2.savedMatrixWorld);
      });
      if (this.debugMeshes) {
        [this.debugMeshes.eyes, this.debugMeshes.head].forEach((mesh) => {
          mesh.visible = true;
        });
      }
      this.decapitated = false;
    }
  }
  setFloorHeight(floorHeight) {
    this.poseManager.vrTransforms.floorHeight = floorHeight;
  }
  getFloorHeight() {
    return this.poseManager.vrTransforms.floorHeight;
  }
  destroy() {
    this.setMicrophoneMediaStream(null);
  }
}
window.Avatar = Avatar;
export { Avatar as default };
