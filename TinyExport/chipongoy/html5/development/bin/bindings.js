/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var game = game || {};
game.SceneId = {
  SceneMgr: 0,
  Bootstrap: 1,
  Scene1: 2,
  Scene2: 3
};
game.SceneId._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.SceneId', 4, [
    {name: 'SceneMgr', offset: 0, type: enumType},
    {name: 'Bootstrap', offset: 1, type: enumType},
    {name: 'Scene1', offset: 2, type: enumType},
    {name: 'Scene2', offset: 3, type: enumType}
  ]);
})();
game.ChildScene = function(arg0, arg1) {
  this._parentSceneId = (arg0|0);
  this._sceneIdToLoad = (arg1|0);
};
game.ChildScene.prototype = Object.create(null);
game.ChildScene.prototype.constructor = game.ChildScene;
Object.defineProperties(game.ChildScene.prototype, {
  parentSceneId: {
    get: function() { return this._parentSceneId; },
    set: function(v) { this._parentSceneId = (v|0); },
  },
  sceneIdToLoad: {
    get: function() { return this._sceneIdToLoad; },
    set: function(v) { this._sceneIdToLoad = (v|0); },
  },
});
game.ChildScene._size = 8;
game.ChildScene._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ChildScene.prototype);
  v._parentSceneId = HEAP32[(ptr+0)>>2];
  v._sceneIdToLoad = HEAP32[(ptr+4)>>2];
  return v;
};
game.ChildScene._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.parentSceneId;
  HEAP32[(ptr+4)>>2] = v.sceneIdToLoad;
};
game.ChildScene._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.parentSceneId;
  HEAP32[(ptr+4)>>2] = v.sceneIdToLoad;
};
game.ChildScene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.ChildScene._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ChildScene._typeDesc = (function() {
  return ut.meta.allocType(4, 'game.ChildScene', 8, [
    {name: 'parentSceneId', offset: 0, type: ut.meta.getType('game.SceneId')},
    {name: 'sceneIdToLoad', offset: 4, type: ut.meta.getType('game.SceneId')}
  ]);
})();
game.SceneData = function(arg0, arg1) {
  this._sceneId = (arg0|0);
  this._DontDestroy = (arg1 ? true : false);
};
game.SceneData.prototype = Object.create(null);
game.SceneData.prototype.constructor = game.SceneData;
Object.defineProperties(game.SceneData.prototype, {
  sceneId: {
    get: function() { return this._sceneId; },
    set: function(v) { this._sceneId = (v|0); },
  },
  DontDestroy: {
    get: function() { return this._DontDestroy; },
    set: function(v) { this._DontDestroy = (v ? true : false); },
  },
});
game.SceneData._size = 8;
game.SceneData._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SceneData.prototype);
  v._sceneId = HEAP32[(ptr+0)>>2];
  v._DontDestroy = (HEAP8[ptr+4]?true:false);
  return v;
};
game.SceneData._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.sceneId;
  HEAP8[ptr+4] = (v.DontDestroy)?1:0;
};
game.SceneData._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.sceneId;
  HEAP8[ptr+4] = (v.DontDestroy)?1:0;
};
game.SceneData._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.SceneData._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SceneData._typeDesc = (function() {
  return ut.meta.allocType(4, 'game.SceneData', 8, [
    {name: 'sceneId', offset: 0, type: ut.meta.getType('game.SceneId')},
    {name: 'DontDestroy', offset: 4, type: ut.meta.getType('bool')}
  ]);
})();
game.ScenePathData = function(arg0, arg1) {
  this._sceneId = (arg0|0);
  this._scenePath = (arg1 === undefined ? '' : arg1);
};
game.ScenePathData.prototype = Object.create(null);
game.ScenePathData.prototype.constructor = game.ScenePathData;
Object.defineProperties(game.ScenePathData.prototype, {
  sceneId: {
    get: function() { return this._sceneId; },
    set: function(v) { this._sceneId = (v|0); },
  },
  scenePath: {
    get: function() { return this._scenePath; },
    set: function(v) { this._scenePath = (v === undefined ? '' : v); },
  },
});
game.ScenePathData._size = 12;
game.ScenePathData._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScenePathData.prototype);
  v._sceneId = HEAP32[(ptr+0)>>2];
  v._scenePath = (Module._ut_nativestring_data(ptr+4) ? UTF8ToString(Module._ut_nativestring_data(ptr+4)) : "");
  return v;
};
game.ScenePathData._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.sceneId;
  ut.newHeapNativeString(ptr+4, v.scenePath);
};
game.ScenePathData._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.sceneId;
  ut.toExistingScratchNativeString(ptr+4, v.scenePath);
};
game.ScenePathData._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.ScenePathData._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScenePathData._typeDesc = (function() {
  return ut.meta.allocType(4, 'game.ScenePathData', 12, [
    {name: 'sceneId', offset: 0, type: ut.meta.getType('game.SceneId')},
    {name: 'scenePath', offset: 4, type: ut.meta.getType('string')}
  ]);
})();
game.ScenePin = function(arg0, arg1, arg2) {
  this._pinId = (arg0|0);
  this._srcSceneId = (arg1|0);
  this._destSceneId = (arg2|0);
};
game.ScenePin.prototype = Object.create(null);
game.ScenePin.prototype.constructor = game.ScenePin;
Object.defineProperties(game.ScenePin.prototype, {
  pinId: {
    get: function() { return this._pinId; },
    set: function(v) { this._pinId = (v|0); },
  },
  srcSceneId: {
    get: function() { return this._srcSceneId; },
    set: function(v) { this._srcSceneId = (v|0); },
  },
  destSceneId: {
    get: function() { return this._destSceneId; },
    set: function(v) { this._destSceneId = (v|0); },
  },
});
game.ScenePin._size = 12;
game.ScenePin._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ScenePin.prototype);
  v._pinId = HEAP8[ptr+0];
  v._srcSceneId = HEAP32[(ptr+4)>>2];
  v._destSceneId = HEAP32[(ptr+8)>>2];
  return v;
};
game.ScenePin._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.pinId;
  HEAP32[(ptr+4)>>2] = v.srcSceneId;
  HEAP32[(ptr+8)>>2] = v.destSceneId;
};
game.ScenePin._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.pinId;
  HEAP32[(ptr+4)>>2] = v.srcSceneId;
  HEAP32[(ptr+8)>>2] = v.destSceneId;
};
game.ScenePin._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.ScenePin._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ScenePin._typeDesc = (function() {
  return ut.meta.allocType(4, 'game.ScenePin', 12, [
    {name: 'pinId', offset: 0, type: ut.meta.getType('int8')},
    {name: 'srcSceneId', offset: 4, type: ut.meta.getType('game.SceneId')},
    {name: 'destSceneId', offset: 8, type: ut.meta.getType('game.SceneId')}
  ]);
})();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.SceneMgr = entities.game.SceneMgr || {};
entities.game.SceneMgr.Component = function() {
};
entities.game.SceneMgr.Component.prototype = Object.create(null);
entities.game.SceneMgr.Component.prototype.constructor = entities.game.SceneMgr.Component;
Object.defineProperties(entities.game.SceneMgr.Component.prototype, {
});
entities.game.SceneMgr.Component._size = 1;
entities.game.SceneMgr.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.SceneMgr.Component.prototype);
  return v;
};
entities.game.SceneMgr.Component._toPtr = function(ptr, v) {
};
entities.game.SceneMgr.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.SceneMgr.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.SceneMgr.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.SceneMgr.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.SceneMgr.Component.StorageView.prototype = Object.create(null);
entities.game.SceneMgr.Component.StorageView.prototype.constructor = entities.game.SceneMgr.Component.StorageView;
entities.game.SceneMgr.Component._view = entities.game.SceneMgr.Component.StorageView;
entities.game.SceneMgr.Component.StorageView._isSharedComp = entities.game.SceneMgr.Component._isSharedComp = false;
entities.game.SceneMgr.Component.StorageView._fromPtr = entities.game.SceneMgr.Component._fromPtr;
entities.game.SceneMgr.Component.StorageView._toPtr = entities.game.SceneMgr.Component._toPtr;
entities.game.SceneMgr.Component.StorageView._tempHeapPtr = entities.game.SceneMgr.Component._tempHeapPtr;
entities.game.SceneMgr.Component.StorageView._size = entities.game.SceneMgr.Component._size;
entities.game.SceneMgr.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.SceneMgr.Component.StorageView.prototype, {
});
entities.game.SceneMgr.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.SceneMgr.Component is a POD type, so a JavaScript side copy constructor entities.game.SceneMgr.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.SceneMgr.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.SceneMgr.Component', 1, []);
})();
Object.defineProperties(entities.game.SceneMgr.Component, { cid: { configurable: true, get: function() { delete entities.game.SceneMgr.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.SceneMgr.Component.cid = Module._ut_component_register_cid_with_type(entities.game.SceneMgr.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.SceneMgr.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.SceneMgr.Component.cid; } } });
entities.game.Bootstrap = entities.game.Bootstrap || {};
entities.game.Bootstrap.Component = function() {
};
entities.game.Bootstrap.Component.prototype = Object.create(null);
entities.game.Bootstrap.Component.prototype.constructor = entities.game.Bootstrap.Component;
Object.defineProperties(entities.game.Bootstrap.Component.prototype, {
});
entities.game.Bootstrap.Component._size = 1;
entities.game.Bootstrap.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Bootstrap.Component.prototype);
  return v;
};
entities.game.Bootstrap.Component._toPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Bootstrap.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Bootstrap.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Bootstrap.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Bootstrap.Component.StorageView.prototype = Object.create(null);
entities.game.Bootstrap.Component.StorageView.prototype.constructor = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component._view = entities.game.Bootstrap.Component.StorageView;
entities.game.Bootstrap.Component.StorageView._isSharedComp = entities.game.Bootstrap.Component._isSharedComp = false;
entities.game.Bootstrap.Component.StorageView._fromPtr = entities.game.Bootstrap.Component._fromPtr;
entities.game.Bootstrap.Component.StorageView._toPtr = entities.game.Bootstrap.Component._toPtr;
entities.game.Bootstrap.Component.StorageView._tempHeapPtr = entities.game.Bootstrap.Component._tempHeapPtr;
entities.game.Bootstrap.Component.StorageView._size = entities.game.Bootstrap.Component._size;
entities.game.Bootstrap.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Bootstrap.Component.StorageView.prototype, {
});
entities.game.Bootstrap.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Bootstrap.Component is a POD type, so a JavaScript side copy constructor entities.game.Bootstrap.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Bootstrap.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Bootstrap.Component', 1, []);
})();
Object.defineProperties(entities.game.Bootstrap.Component, { cid: { configurable: true, get: function() { delete entities.game.Bootstrap.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Bootstrap.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Bootstrap.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Bootstrap.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Bootstrap.Component.cid; } } });
entities.game.Scene1 = entities.game.Scene1 || {};
entities.game.Scene1.Component = function() {
};
entities.game.Scene1.Component.prototype = Object.create(null);
entities.game.Scene1.Component.prototype.constructor = entities.game.Scene1.Component;
Object.defineProperties(entities.game.Scene1.Component.prototype, {
});
entities.game.Scene1.Component._size = 1;
entities.game.Scene1.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Scene1.Component.prototype);
  return v;
};
entities.game.Scene1.Component._toPtr = function(ptr, v) {
};
entities.game.Scene1.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Scene1.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Scene1.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Scene1.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Scene1.Component.StorageView.prototype = Object.create(null);
entities.game.Scene1.Component.StorageView.prototype.constructor = entities.game.Scene1.Component.StorageView;
entities.game.Scene1.Component._view = entities.game.Scene1.Component.StorageView;
entities.game.Scene1.Component.StorageView._isSharedComp = entities.game.Scene1.Component._isSharedComp = false;
entities.game.Scene1.Component.StorageView._fromPtr = entities.game.Scene1.Component._fromPtr;
entities.game.Scene1.Component.StorageView._toPtr = entities.game.Scene1.Component._toPtr;
entities.game.Scene1.Component.StorageView._tempHeapPtr = entities.game.Scene1.Component._tempHeapPtr;
entities.game.Scene1.Component.StorageView._size = entities.game.Scene1.Component._size;
entities.game.Scene1.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Scene1.Component.StorageView.prototype, {
});
entities.game.Scene1.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Scene1.Component is a POD type, so a JavaScript side copy constructor entities.game.Scene1.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Scene1.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Scene1.Component', 1, []);
})();
Object.defineProperties(entities.game.Scene1.Component, { cid: { configurable: true, get: function() { delete entities.game.Scene1.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Scene1.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Scene1.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Scene1.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Scene1.Component.cid; } } });
entities.game.Scene2 = entities.game.Scene2 || {};
entities.game.Scene2.Component = function() {
};
entities.game.Scene2.Component.prototype = Object.create(null);
entities.game.Scene2.Component.prototype.constructor = entities.game.Scene2.Component;
Object.defineProperties(entities.game.Scene2.Component.prototype, {
});
entities.game.Scene2.Component._size = 1;
entities.game.Scene2.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Scene2.Component.prototype);
  return v;
};
entities.game.Scene2.Component._toPtr = function(ptr, v) {
};
entities.game.Scene2.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Scene2.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Scene2.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Scene2.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Scene2.Component.StorageView.prototype = Object.create(null);
entities.game.Scene2.Component.StorageView.prototype.constructor = entities.game.Scene2.Component.StorageView;
entities.game.Scene2.Component._view = entities.game.Scene2.Component.StorageView;
entities.game.Scene2.Component.StorageView._isSharedComp = entities.game.Scene2.Component._isSharedComp = false;
entities.game.Scene2.Component.StorageView._fromPtr = entities.game.Scene2.Component._fromPtr;
entities.game.Scene2.Component.StorageView._toPtr = entities.game.Scene2.Component._toPtr;
entities.game.Scene2.Component.StorageView._tempHeapPtr = entities.game.Scene2.Component._tempHeapPtr;
entities.game.Scene2.Component.StorageView._size = entities.game.Scene2.Component._size;
entities.game.Scene2.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Scene2.Component.StorageView.prototype, {
});
entities.game.Scene2.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Scene2.Component is a POD type, so a JavaScript side copy constructor entities.game.Scene2.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Scene2.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Scene2.Component', 1, []);
})();
Object.defineProperties(entities.game.Scene2.Component, { cid: { configurable: true, get: function() { delete entities.game.Scene2.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Scene2.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Scene2.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Scene2.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Scene2.Component.cid; } } });
game.SceneDefineContainer = function(arg0) {
  this._sceneList = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
};
game.SceneDefineContainer.prototype = Object.create(null);
game.SceneDefineContainer.prototype.constructor = game.SceneDefineContainer;
Object.defineProperties(game.SceneDefineContainer.prototype, {
  sceneList: {
    get: function() { return this._sceneList; },
    set: function(v) { this._sceneList = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
});
game.SceneDefineContainer._size = 12;
game.SceneDefineContainer._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SceneDefineContainer.prototype);
  v._sceneList = ut.nativeBufferToJsArray(ptr+0, 12, function(p) { return game.ScenePathData._fromPtr(p); });
  return v;
};
game.SceneDefineContainer._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.sceneList, ptr+0, 12, function(p, v) { game.ScenePathData._toPtr(p, v); });
};
game.SceneDefineContainer._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.sceneList, ptr+0, 12, function(p, v) { game.ScenePathData._toPtr(p, v); });
};
game.SceneDefineContainer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.SceneDefineContainer._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SceneDefineContainer.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SceneDefineContainer.StorageView.prototype = Object.create(null);
game.SceneDefineContainer.StorageView.prototype.constructor = game.SceneDefineContainer.StorageView;
game.SceneDefineContainer._view = game.SceneDefineContainer.StorageView;
game.SceneDefineContainer.StorageView._isSharedComp = game.SceneDefineContainer._isSharedComp = false;
game.SceneDefineContainer.StorageView._fromPtr = game.SceneDefineContainer._fromPtr;
game.SceneDefineContainer.StorageView._toPtr = game.SceneDefineContainer._toPtr;
game.SceneDefineContainer.StorageView._tempHeapPtr = game.SceneDefineContainer._tempHeapPtr;
game.SceneDefineContainer.StorageView._size = game.SceneDefineContainer._size;
game.SceneDefineContainer.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.SceneDefineContainer.StorageView.prototype, {
  sceneList: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 12, function(p) { return game.ScenePathData._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 12, function(p, v) { game.ScenePathData._toPtr(p, v); }); },
  },
});
game.SceneDefineContainer._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
};
game.SceneDefineContainer._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 12);
};
game.SceneDefineContainer._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SceneDefineContainer', 12, [
    {name: 'sceneList', offset: 0, type: ut.meta.getType('ut.NativeBuffer<game.ScenePathData>')}
  ]);
})();
Object.defineProperties(game.SceneDefineContainer, { cid: { configurable: true, get: function() { delete game.SceneDefineContainer.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SceneDefineContainer.cid = Module._ut_component_register_cid_with_type(game.SceneDefineContainer._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.SceneDefineContainer._dtorFn), ut.CopyFn._cb.token_for(game.SceneDefineContainer._copyFn)); } } });
Object.defineProperties(game.SceneDefineContainer.StorageView, { cid: { configurable: true, get: function() { return game.SceneDefineContainer.cid; } } });
game.SceneDefineContainer.sceneList = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.SceneDefineContainer };
game.SceneList = function(arg0, arg1, arg2) {
  this._sceneList = (arg0 === undefined ? new Array() : ((arg0 instanceof Array) ? arg0 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._sceneChildList = (arg1 === undefined ? new Array() : ((arg1 instanceof Array) ? arg1 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._scenePinList = (arg2 === undefined ? new Array() : ((arg2 instanceof Array) ? arg2 : (function() { throw new Error('Assigning non-array to array field'); })()));
};
game.SceneList.prototype = Object.create(null);
game.SceneList.prototype.constructor = game.SceneList;
Object.defineProperties(game.SceneList.prototype, {
  sceneList: {
    get: function() { return this._sceneList; },
    set: function(v) { this._sceneList = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  sceneChildList: {
    get: function() { return this._sceneChildList; },
    set: function(v) { this._sceneChildList = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  scenePinList: {
    get: function() { return this._scenePinList; },
    set: function(v) { this._scenePinList = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
});
game.SceneList._size = 36;
game.SceneList._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SceneList.prototype);
  v._sceneList = ut.nativeBufferToJsArray(ptr+0, 8, function(p) { return game.SceneData._fromPtr(p); });
  v._sceneChildList = ut.nativeBufferToJsArray(ptr+12, 8, function(p) { return game.ChildScene._fromPtr(p); });
  v._scenePinList = ut.nativeBufferToJsArray(ptr+24, 12, function(p) { return game.ScenePin._fromPtr(p); });
  return v;
};
game.SceneList._toPtr = function(ptr, v) {
  ut.jsArrayToExistingNativeBuffer_pod(v.sceneList, ptr+0, 8, function(p, v) { game.SceneData._toPtr(p, v); });
  ut.jsArrayToExistingNativeBuffer_pod(v.sceneChildList, ptr+12, 8, function(p, v) { game.ChildScene._toPtr(p, v); });
  ut.jsArrayToExistingNativeBuffer_pod(v.scenePinList, ptr+24, 12, function(p, v) { game.ScenePin._toPtr(p, v); });
};
game.SceneList._toTempHeapPtr = function(ptr, v) {
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.sceneList, ptr+0, 8, function(p, v) { game.SceneData._toPtr(p, v); });
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.sceneChildList, ptr+12, 8, function(p, v) { game.ChildScene._toPtr(p, v); });
  ut.jsArrayToExistingScratchNativeBuffer_pod(v.scenePinList, ptr+24, 12, function(p, v) { game.ScenePin._toPtr(p, v); });
};
game.SceneList._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(36);
  if (v) game.SceneList._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SceneList.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SceneList.StorageView.prototype = Object.create(null);
game.SceneList.StorageView.prototype.constructor = game.SceneList.StorageView;
game.SceneList._view = game.SceneList.StorageView;
game.SceneList.StorageView._isSharedComp = game.SceneList._isSharedComp = false;
game.SceneList.StorageView._fromPtr = game.SceneList._fromPtr;
game.SceneList.StorageView._toPtr = game.SceneList._toPtr;
game.SceneList.StorageView._tempHeapPtr = game.SceneList._tempHeapPtr;
game.SceneList.StorageView._size = game.SceneList._size;
game.SceneList.StorageView.prototype.$advance = function() {
  this._ptr += 36;
};
Object.defineProperties(game.SceneList.StorageView.prototype, {
  sceneList: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+0, 8, function(p) { return game.SceneData._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+0, 8, function(p, v) { game.SceneData._toPtr(p, v); }); },
  },
  sceneChildList: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+12, 8, function(p) { return game.ChildScene._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+12, 8, function(p, v) { game.ChildScene._toPtr(p, v); }); },
  },
  scenePinList: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+24, 12, function(p) { return game.ScenePin._fromPtr(p); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_pod(v, this._ptr+24, 12, function(p, v) { game.ScenePin._toPtr(p, v); }); },
  },
});
game.SceneList._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativebuffer_pod_placement_delete(ptr + 0);
  Module._ut_nativebuffer_pod_placement_delete(ptr + 12);
  Module._ut_nativebuffer_pod_placement_delete(ptr + 24);
};
game.SceneList._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativebuffer_pod_copy_construct(dst + 0, src + 0, 8);
  Module._ut_nativebuffer_pod_copy_construct(dst + 12, src + 12, 8);
  Module._ut_nativebuffer_pod_copy_construct(dst + 24, src + 24, 12);
};
game.SceneList._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SceneList', 36, [
    {name: 'sceneList', offset: 0, type: ut.meta.getType('ut.NativeBuffer<game.SceneData>')},
    {name: 'sceneChildList', offset: 12, type: ut.meta.getType('ut.NativeBuffer<game.ChildScene>')},
    {name: 'scenePinList', offset: 24, type: ut.meta.getType('ut.NativeBuffer<game.ScenePin>')}
  ]);
})();
Object.defineProperties(game.SceneList, { cid: { configurable: true, get: function() { delete game.SceneList.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SceneList.cid = Module._ut_component_register_cid_with_type(game.SceneList._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.SceneList._dtorFn), ut.CopyFn._cb.token_for(game.SceneList._copyFn)); } } });
Object.defineProperties(game.SceneList.StorageView, { cid: { configurable: true, get: function() { return game.SceneList.cid; } } });
game.SceneList.sceneList = { $ofs:0, $t:"ut.DynamicArray`1", $c:game.SceneList };
game.SceneList.sceneChildList = { $ofs:12, $t:"ut.DynamicArray`1", $c:game.SceneList };
game.SceneList.scenePinList = { $ofs:24, $t:"ut.DynamicArray`1", $c:game.SceneList };
game.MouseSpriteInteractionData = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
  this._camera = (arg0 === undefined ? new ut.Entity : arg0);
  this._hover = (arg1 ? true : false);
  this._down = (arg2 ? true : false);
  this._lastDown = (arg3 ? true : false);
  this._clicked = (arg4 ? true : false);
  this._isInteractable = (arg5 ? true : false);
  this._mouseButtonCode = (arg6|0);
  this._clickDragTreshold = (+(arg7===undefined ? 0 : arg7));
  this._tresholdCounter = (+(arg8===undefined ? 0 : arg8));
  this._drag = (arg9 ? true : false);
  this._startDrag = (arg10 ? true : false);
};
game.MouseSpriteInteractionData.prototype = Object.create(null);
game.MouseSpriteInteractionData.prototype.constructor = game.MouseSpriteInteractionData;
Object.defineProperties(game.MouseSpriteInteractionData.prototype, {
  camera: {
    get: function() { return this._camera; },
    set: function(v) { this._camera = (v === undefined ? new ut.Entity : v); },
  },
  hover: {
    get: function() { return this._hover; },
    set: function(v) { this._hover = (v ? true : false); },
  },
  down: {
    get: function() { return this._down; },
    set: function(v) { this._down = (v ? true : false); },
  },
  lastDown: {
    get: function() { return this._lastDown; },
    set: function(v) { this._lastDown = (v ? true : false); },
  },
  clicked: {
    get: function() { return this._clicked; },
    set: function(v) { this._clicked = (v ? true : false); },
  },
  isInteractable: {
    get: function() { return this._isInteractable; },
    set: function(v) { this._isInteractable = (v ? true : false); },
  },
  mouseButtonCode: {
    get: function() { return this._mouseButtonCode; },
    set: function(v) { this._mouseButtonCode = (v|0); },
  },
  clickDragTreshold: {
    get: function() { return this._clickDragTreshold; },
    set: function(v) { this._clickDragTreshold = (+(v===undefined ? 0 : v)); },
  },
  tresholdCounter: {
    get: function() { return this._tresholdCounter; },
    set: function(v) { this._tresholdCounter = (+(v===undefined ? 0 : v)); },
  },
  drag: {
    get: function() { return this._drag; },
    set: function(v) { this._drag = (v ? true : false); },
  },
  startDrag: {
    get: function() { return this._startDrag; },
    set: function(v) { this._startDrag = (v ? true : false); },
  },
});
game.MouseSpriteInteractionData._size = 40;
game.MouseSpriteInteractionData._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MouseSpriteInteractionData.prototype);
  v._camera = ut.Entity._fromPtr(ptr+0);
  v._hover = (HEAP8[ptr+8]?true:false);
  v._down = (HEAP8[ptr+9]?true:false);
  v._lastDown = (HEAP8[ptr+10]?true:false);
  v._clicked = (HEAP8[ptr+11]?true:false);
  v._isInteractable = (HEAP8[ptr+12]?true:false);
  v._mouseButtonCode = HEAP8[ptr+13];
  v._clickDragTreshold = HEAPF64[(ptr+16)>>3];
  v._tresholdCounter = HEAPF64[(ptr+24)>>3];
  v._drag = (HEAP8[ptr+32]?true:false);
  v._startDrag = (HEAP8[ptr+33]?true:false);
  return v;
};
game.MouseSpriteInteractionData._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.camera);
  HEAP8[ptr+8] = (v.hover)?1:0;
  HEAP8[ptr+9] = (v.down)?1:0;
  HEAP8[ptr+10] = (v.lastDown)?1:0;
  HEAP8[ptr+11] = (v.clicked)?1:0;
  HEAP8[ptr+12] = (v.isInteractable)?1:0;
  HEAP8[ptr+13] = v.mouseButtonCode;
  HEAPF64[(ptr+16)>>3] = v.clickDragTreshold;
  HEAPF64[(ptr+24)>>3] = v.tresholdCounter;
  HEAP8[ptr+32] = (v.drag)?1:0;
  HEAP8[ptr+33] = (v.startDrag)?1:0;
};
game.MouseSpriteInteractionData._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.camera);
  HEAP8[ptr+8] = (v.hover)?1:0;
  HEAP8[ptr+9] = (v.down)?1:0;
  HEAP8[ptr+10] = (v.lastDown)?1:0;
  HEAP8[ptr+11] = (v.clicked)?1:0;
  HEAP8[ptr+12] = (v.isInteractable)?1:0;
  HEAP8[ptr+13] = v.mouseButtonCode;
  HEAPF64[(ptr+16)>>3] = v.clickDragTreshold;
  HEAPF64[(ptr+24)>>3] = v.tresholdCounter;
  HEAP8[ptr+32] = (v.drag)?1:0;
  HEAP8[ptr+33] = (v.startDrag)?1:0;
};
game.MouseSpriteInteractionData._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(40);
  if (v) game.MouseSpriteInteractionData._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MouseSpriteInteractionData.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MouseSpriteInteractionData.StorageView.prototype = Object.create(null);
game.MouseSpriteInteractionData.StorageView.prototype.constructor = game.MouseSpriteInteractionData.StorageView;
game.MouseSpriteInteractionData._view = game.MouseSpriteInteractionData.StorageView;
game.MouseSpriteInteractionData.StorageView._isSharedComp = game.MouseSpriteInteractionData._isSharedComp = false;
game.MouseSpriteInteractionData.StorageView._fromPtr = game.MouseSpriteInteractionData._fromPtr;
game.MouseSpriteInteractionData.StorageView._toPtr = game.MouseSpriteInteractionData._toPtr;
game.MouseSpriteInteractionData.StorageView._tempHeapPtr = game.MouseSpriteInteractionData._tempHeapPtr;
game.MouseSpriteInteractionData.StorageView._size = game.MouseSpriteInteractionData._size;
game.MouseSpriteInteractionData.StorageView.prototype.$advance = function() {
  this._ptr += 40;
};
Object.defineProperties(game.MouseSpriteInteractionData.StorageView.prototype, {
  camera: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  hover: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
  down: {
    get: function() { return (HEAP8[this._ptr+9]?true:false); },
    set: function(v) { HEAP8[this._ptr+9] = (v)?1:0; },
  },
  lastDown: {
    get: function() { return (HEAP8[this._ptr+10]?true:false); },
    set: function(v) { HEAP8[this._ptr+10] = (v)?1:0; },
  },
  clicked: {
    get: function() { return (HEAP8[this._ptr+11]?true:false); },
    set: function(v) { HEAP8[this._ptr+11] = (v)?1:0; },
  },
  isInteractable: {
    get: function() { return (HEAP8[this._ptr+12]?true:false); },
    set: function(v) { HEAP8[this._ptr+12] = (v)?1:0; },
  },
  mouseButtonCode: {
    get: function() { return HEAP8[this._ptr+13]; },
    set: function(v) { HEAP8[this._ptr+13] = v; },
  },
  clickDragTreshold: {
    get: function() { return HEAPF64[(this._ptr+16)>>3]; },
    set: function(v) { HEAPF64[(this._ptr+16)>>3] = v; },
  },
  tresholdCounter: {
    get: function() { return HEAPF64[(this._ptr+24)>>3]; },
    set: function(v) { HEAPF64[(this._ptr+24)>>3] = v; },
  },
  drag: {
    get: function() { return (HEAP8[this._ptr+32]?true:false); },
    set: function(v) { HEAP8[this._ptr+32] = (v)?1:0; },
  },
  startDrag: {
    get: function() { return (HEAP8[this._ptr+33]?true:false); },
    set: function(v) { HEAP8[this._ptr+33] = (v)?1:0; },
  },
});
game.MouseSpriteInteractionData._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MouseSpriteInteractionData is a POD type, so a JavaScript side copy constructor game.MouseSpriteInteractionData._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.MouseSpriteInteractionData._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.MouseSpriteInteractionData', 40, [
    {name: 'camera', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'hover', offset: 8, type: ut.meta.getType('bool')},
    {name: 'down', offset: 9, type: ut.meta.getType('bool')},
    {name: 'lastDown', offset: 10, type: ut.meta.getType('bool')},
    {name: 'clicked', offset: 11, type: ut.meta.getType('bool')},
    {name: 'isInteractable', offset: 12, type: ut.meta.getType('bool')},
    {name: 'mouseButtonCode', offset: 13, type: ut.meta.getType('int8')},
    {name: 'clickDragTreshold', offset: 16, type: ut.meta.getType('double')},
    {name: 'tresholdCounter', offset: 24, type: ut.meta.getType('double')},
    {name: 'drag', offset: 32, type: ut.meta.getType('bool')},
    {name: 'startDrag', offset: 33, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.MouseSpriteInteractionData, { cid: { configurable: true, get: function() { delete game.MouseSpriteInteractionData.cid; var offsetsPtr = ut.tempHeapPtrI32([0]); var offsetsCount = 1; return game.MouseSpriteInteractionData.cid = Module._ut_component_register_cid_with_type(game.MouseSpriteInteractionData._typeDesc, 8, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.MouseSpriteInteractionData.StorageView, { cid: { configurable: true, get: function() { return game.MouseSpriteInteractionData.cid; } } });
game.MouseSpriteInteractionData.camera = { $ofs:0, $t:"ut.Entity", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.camera.index = { $ofs:0, $t:"int32_t", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.camera.version = { $ofs:4, $t:"int32_t", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.hover = { $ofs:8, $t:"bool", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.down = { $ofs:9, $t:"bool", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.lastDown = { $ofs:10, $t:"bool", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.clicked = { $ofs:11, $t:"bool", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.isInteractable = { $ofs:12, $t:"bool", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.mouseButtonCode = { $ofs:13, $t:"int8_t", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.clickDragTreshold = { $ofs:16, $t:"double", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.tresholdCounter = { $ofs:24, $t:"double", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.drag = { $ofs:32, $t:"bool", $c:game.MouseSpriteInteractionData };
game.MouseSpriteInteractionData.startDrag = { $ofs:33, $t:"bool", $c:game.MouseSpriteInteractionData };
game.SimpleDraggerTag = function() {
};
game.SimpleDraggerTag.prototype = Object.create(null);
game.SimpleDraggerTag.prototype.constructor = game.SimpleDraggerTag;
Object.defineProperties(game.SimpleDraggerTag.prototype, {
});
game.SimpleDraggerTag._size = 1;
game.SimpleDraggerTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SimpleDraggerTag.prototype);
  return v;
};
game.SimpleDraggerTag._toPtr = function(ptr, v) {
};
game.SimpleDraggerTag._toTempHeapPtr = function(ptr, v) {
};
game.SimpleDraggerTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.SimpleDraggerTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SimpleDraggerTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SimpleDraggerTag.StorageView.prototype = Object.create(null);
game.SimpleDraggerTag.StorageView.prototype.constructor = game.SimpleDraggerTag.StorageView;
game.SimpleDraggerTag._view = game.SimpleDraggerTag.StorageView;
game.SimpleDraggerTag.StorageView._isSharedComp = game.SimpleDraggerTag._isSharedComp = false;
game.SimpleDraggerTag.StorageView._fromPtr = game.SimpleDraggerTag._fromPtr;
game.SimpleDraggerTag.StorageView._toPtr = game.SimpleDraggerTag._toPtr;
game.SimpleDraggerTag.StorageView._tempHeapPtr = game.SimpleDraggerTag._tempHeapPtr;
game.SimpleDraggerTag.StorageView._size = game.SimpleDraggerTag._size;
game.SimpleDraggerTag.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.SimpleDraggerTag.StorageView.prototype, {
});
game.SimpleDraggerTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SimpleDraggerTag is a POD type, so a JavaScript side copy constructor game.SimpleDraggerTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.SimpleDraggerTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SimpleDraggerTag', 1, []);
})();
Object.defineProperties(game.SimpleDraggerTag, { cid: { configurable: true, get: function() { delete game.SimpleDraggerTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SimpleDraggerTag.cid = Module._ut_component_register_cid_with_type(game.SimpleDraggerTag._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.SimpleDraggerTag.StorageView, { cid: { configurable: true, get: function() { return game.SimpleDraggerTag.cid; } } });
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.Grid = function() {
};
ut.Core2D.layers.Grid.prototype = Object.create(null);
ut.Core2D.layers.Grid.prototype.constructor = ut.Core2D.layers.Grid;
Object.defineProperties(ut.Core2D.layers.Grid.prototype, {
});
ut.Core2D.layers.Grid._size = 1;
ut.Core2D.layers.Grid._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Grid.prototype);
  return v;
};
ut.Core2D.layers.Grid._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Grid._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Grid.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Grid.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Grid.StorageView.prototype.constructor = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid._view = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid.StorageView._isSharedComp = ut.Core2D.layers.Grid._isSharedComp = false;
ut.Core2D.layers.Grid.StorageView._fromPtr = ut.Core2D.layers.Grid._fromPtr;
ut.Core2D.layers.Grid.StorageView._toPtr = ut.Core2D.layers.Grid._toPtr;
ut.Core2D.layers.Grid.StorageView._tempHeapPtr = ut.Core2D.layers.Grid._tempHeapPtr;
ut.Core2D.layers.Grid.StorageView._size = ut.Core2D.layers.Grid._size;
ut.Core2D.layers.Grid.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Grid.StorageView.prototype, {
});
ut.Core2D.layers.Grid._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Grid is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Grid._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Grid._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Grid', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Grid, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Grid.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Grid.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Grid._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Grid.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Grid.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTile = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTile.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTile.prototype.constructor = ut.EditorExtensions.AssetReferenceTile;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTile._size = 24;
ut.EditorExtensions.AssetReferenceTile._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTile.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTile._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTile._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTile._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTile._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTile.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTile.StorageView;
ut.EditorExtensions.AssetReferenceTile._view = ut.EditorExtensions.AssetReferenceTile.StorageView;
ut.EditorExtensions.AssetReferenceTile.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTile._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTile.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTile._fromPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTile._toPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTile._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTile.StorageView._size = ut.EditorExtensions.AssetReferenceTile._size;
ut.EditorExtensions.AssetReferenceTile.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTile._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTile._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTile._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTile', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTile.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTile.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTile._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTile._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTile._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTile.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTile.cid; } } });
ut.EditorExtensions.AssetReferenceTile.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.AssetReferenceTile.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.AssetReferenceTile.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTile };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.SceneMgrBehaviour_State = function(arg0, arg1, arg2, arg3) {
  this._initialized = (arg0 ? true : false);
  this._enabled = (arg1 ? true : false);
  this._onEnableCalled = (arg2 ? true : false);
  this._onDisableCalled = (arg3 ? true : false);
};
game.SceneMgrBehaviour_State.prototype = Object.create(null);
game.SceneMgrBehaviour_State.prototype.constructor = game.SceneMgrBehaviour_State;
Object.defineProperties(game.SceneMgrBehaviour_State.prototype, {
  initialized: {
    get: function() { return this._initialized; },
    set: function(v) { this._initialized = (v ? true : false); },
  },
  enabled: {
    get: function() { return this._enabled; },
    set: function(v) { this._enabled = (v ? true : false); },
  },
  onEnableCalled: {
    get: function() { return this._onEnableCalled; },
    set: function(v) { this._onEnableCalled = (v ? true : false); },
  },
  onDisableCalled: {
    get: function() { return this._onDisableCalled; },
    set: function(v) { this._onDisableCalled = (v ? true : false); },
  },
});
game.SceneMgrBehaviour_State._size = 4;
game.SceneMgrBehaviour_State._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SceneMgrBehaviour_State.prototype);
  v._initialized = (HEAP8[ptr+0]?true:false);
  v._enabled = (HEAP8[ptr+1]?true:false);
  v._onEnableCalled = (HEAP8[ptr+2]?true:false);
  v._onDisableCalled = (HEAP8[ptr+3]?true:false);
  return v;
};
game.SceneMgrBehaviour_State._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.SceneMgrBehaviour_State._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.SceneMgrBehaviour_State._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.SceneMgrBehaviour_State._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SceneMgrBehaviour_State.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SceneMgrBehaviour_State.StorageView.prototype = Object.create(null);
game.SceneMgrBehaviour_State.StorageView.prototype.constructor = game.SceneMgrBehaviour_State.StorageView;
game.SceneMgrBehaviour_State._view = game.SceneMgrBehaviour_State.StorageView;
game.SceneMgrBehaviour_State.StorageView._isSharedComp = game.SceneMgrBehaviour_State._isSharedComp = false;
game.SceneMgrBehaviour_State.StorageView._fromPtr = game.SceneMgrBehaviour_State._fromPtr;
game.SceneMgrBehaviour_State.StorageView._toPtr = game.SceneMgrBehaviour_State._toPtr;
game.SceneMgrBehaviour_State.StorageView._tempHeapPtr = game.SceneMgrBehaviour_State._tempHeapPtr;
game.SceneMgrBehaviour_State.StorageView._size = game.SceneMgrBehaviour_State._size;
game.SceneMgrBehaviour_State.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.SceneMgrBehaviour_State.StorageView.prototype, {
  initialized: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  enabled: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  onEnableCalled: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  onDisableCalled: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
});
game.SceneMgrBehaviour_State._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SceneMgrBehaviour_State is a POD type, so a JavaScript side copy constructor game.SceneMgrBehaviour_State._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.SceneMgrBehaviour_State._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SceneMgrBehaviour_State', 4, [
    {name: 'initialized', offset: 0, type: ut.meta.getType('bool')},
    {name: 'enabled', offset: 1, type: ut.meta.getType('bool')},
    {name: 'onEnableCalled', offset: 2, type: ut.meta.getType('bool')},
    {name: 'onDisableCalled', offset: 3, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.SceneMgrBehaviour_State, { cid: { configurable: true, get: function() { delete game.SceneMgrBehaviour_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SceneMgrBehaviour_State.cid = Module._ut_component_register_cid_with_type(game.SceneMgrBehaviour_State._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.SceneMgrBehaviour_State.StorageView, { cid: { configurable: true, get: function() { return game.SceneMgrBehaviour_State.cid; } } });
game.SceneMgrBehaviour_State.initialized = { $ofs:0, $t:"bool", $c:game.SceneMgrBehaviour_State };
game.SceneMgrBehaviour_State.enabled = { $ofs:1, $t:"bool", $c:game.SceneMgrBehaviour_State };
game.SceneMgrBehaviour_State.onEnableCalled = { $ofs:2, $t:"bool", $c:game.SceneMgrBehaviour_State };
game.SceneMgrBehaviour_State.onDisableCalled = { $ofs:3, $t:"bool", $c:game.SceneMgrBehaviour_State };
game.SimpleDragger_State = function(arg0, arg1, arg2, arg3) {
  this._initialized = (arg0 ? true : false);
  this._enabled = (arg1 ? true : false);
  this._onEnableCalled = (arg2 ? true : false);
  this._onDisableCalled = (arg3 ? true : false);
};
game.SimpleDragger_State.prototype = Object.create(null);
game.SimpleDragger_State.prototype.constructor = game.SimpleDragger_State;
Object.defineProperties(game.SimpleDragger_State.prototype, {
  initialized: {
    get: function() { return this._initialized; },
    set: function(v) { this._initialized = (v ? true : false); },
  },
  enabled: {
    get: function() { return this._enabled; },
    set: function(v) { this._enabled = (v ? true : false); },
  },
  onEnableCalled: {
    get: function() { return this._onEnableCalled; },
    set: function(v) { this._onEnableCalled = (v ? true : false); },
  },
  onDisableCalled: {
    get: function() { return this._onDisableCalled; },
    set: function(v) { this._onDisableCalled = (v ? true : false); },
  },
});
game.SimpleDragger_State._size = 4;
game.SimpleDragger_State._fromPtr = function(ptr, v) {
  v = v || Object.create(game.SimpleDragger_State.prototype);
  v._initialized = (HEAP8[ptr+0]?true:false);
  v._enabled = (HEAP8[ptr+1]?true:false);
  v._onEnableCalled = (HEAP8[ptr+2]?true:false);
  v._onDisableCalled = (HEAP8[ptr+3]?true:false);
  return v;
};
game.SimpleDragger_State._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.SimpleDragger_State._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.initialized)?1:0;
  HEAP8[ptr+1] = (v.enabled)?1:0;
  HEAP8[ptr+2] = (v.onEnableCalled)?1:0;
  HEAP8[ptr+3] = (v.onDisableCalled)?1:0;
};
game.SimpleDragger_State._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.SimpleDragger_State._toTempHeapPtr(ptr, v);
  return ptr;
};
game.SimpleDragger_State.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.SimpleDragger_State.StorageView.prototype = Object.create(null);
game.SimpleDragger_State.StorageView.prototype.constructor = game.SimpleDragger_State.StorageView;
game.SimpleDragger_State._view = game.SimpleDragger_State.StorageView;
game.SimpleDragger_State.StorageView._isSharedComp = game.SimpleDragger_State._isSharedComp = false;
game.SimpleDragger_State.StorageView._fromPtr = game.SimpleDragger_State._fromPtr;
game.SimpleDragger_State.StorageView._toPtr = game.SimpleDragger_State._toPtr;
game.SimpleDragger_State.StorageView._tempHeapPtr = game.SimpleDragger_State._tempHeapPtr;
game.SimpleDragger_State.StorageView._size = game.SimpleDragger_State._size;
game.SimpleDragger_State.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.SimpleDragger_State.StorageView.prototype, {
  initialized: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  enabled: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
  onEnableCalled: {
    get: function() { return (HEAP8[this._ptr+2]?true:false); },
    set: function(v) { HEAP8[this._ptr+2] = (v)?1:0; },
  },
  onDisableCalled: {
    get: function() { return (HEAP8[this._ptr+3]?true:false); },
    set: function(v) { HEAP8[this._ptr+3] = (v)?1:0; },
  },
});
game.SimpleDragger_State._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.SimpleDragger_State is a POD type, so a JavaScript side copy constructor game.SimpleDragger_State._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.SimpleDragger_State._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.SimpleDragger_State', 4, [
    {name: 'initialized', offset: 0, type: ut.meta.getType('bool')},
    {name: 'enabled', offset: 1, type: ut.meta.getType('bool')},
    {name: 'onEnableCalled', offset: 2, type: ut.meta.getType('bool')},
    {name: 'onDisableCalled', offset: 3, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.SimpleDragger_State, { cid: { configurable: true, get: function() { delete game.SimpleDragger_State.cid; var offsetsPtr = 0, offsetsCount = 0; return game.SimpleDragger_State.cid = Module._ut_component_register_cid_with_type(game.SimpleDragger_State._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.SimpleDragger_State.StorageView, { cid: { configurable: true, get: function() { return game.SimpleDragger_State.cid; } } });
game.SimpleDragger_State.initialized = { $ofs:0, $t:"bool", $c:game.SimpleDragger_State };
game.SimpleDragger_State.enabled = { $ofs:1, $t:"bool", $c:game.SimpleDragger_State };
game.SimpleDragger_State.onEnableCalled = { $ofs:2, $t:"bool", $c:game.SimpleDragger_State };
game.SimpleDragger_State.onDisableCalled = { $ofs:3, $t:"bool", $c:game.SimpleDragger_State };
game.MouseSpriteInteractionSystemJS = ut.System.define({
  name: "game.MouseSpriteInteractionSystemJS"
});
game.TimerServiceJS = ut.System.define({
  name: "game.TimerServiceJS"
});
game.CustomButtonSystemJS = ut.System.define({
  name: "game.CustomButtonSystemJS"
});
game.SceneMgrBehaviour_OnEntityEnableJS = ut.System.define({
  name: "game.SceneMgrBehaviour_OnEntityEnableJS"
 ,updatesBefore: ["UTiny.Shared.InputFence"]
});
game.SceneMgrBehaviour_OnEntityUpdateJS = ut.System.define({
  name: "game.SceneMgrBehaviour_OnEntityUpdateJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});
game.SimpleDragger_OnEntityEnableJS = ut.System.define({
  name: "game.SimpleDragger_OnEntityEnableJS"
 ,updatesBefore: ["UTiny.Shared.InputFence"]
});
game.SimpleDragger_OnEntityUpdateJS = ut.System.define({
  name: "game.SimpleDragger_OnEntityUpdateJS"
 ,updatesBefore: ["UTiny.Shared.UserCodeEnd"]
 ,updatesAfter: ["UTiny.Shared.UserCodeStart"]
});




((function (ut) {

    var ComponentSystem = /** @class */ (function () {
        
        function ComponentSystem() {}

        ComponentSystem.prototype._MakeSystemFn = function () {
            var _this = this;
            return function (scheduler, world) {
                _this.scheduler = scheduler;
                _this.world = world;
                _this.OnUpdate();
            };
        };
        return ComponentSystem;
    }());
    ut.ComponentSystem = ComponentSystem;

    function executeAfter() { }
    ut.executeAfter = executeAfter;

    function executeBefore() { }
    ut.executeBefore = executeBefore;

    function requiredComponents() { }
    ut.requiredComponents = requiredComponents;

    function optionalComponents() { }
    ut.optionalComponents = optionalComponents;

    var EntityFilter = /** @class */ (function () {
        function EntityFilter() {}
        EntityFilter.prototype.Read = function (world, entity) {};
        EntityFilter.prototype.Reset = function () {};
        EntityFilter.prototype.ForEach = function (world, callback) {
            var _this = this;
            world.forEach(this.constructor._Components, function(entity) {
                _this.Read(world, entity);
                callback(entity);
                if (world.exists(entity)) {
                    _this.Write(world, entity);
                }
            });
        };
        return EntityFilter;
    }());
    ut.EntityFilter = EntityFilter;

    function usingFilters() { }
    ut.usingFilters = usingFilters;

    var ComponentBehaviour = /** @class */ (function () {
        function ComponentBehaviour() { }
        ComponentBehaviour.prototype.IsEnabled = function (world, entity) {
            var stateType = this.constructor._StateType;
            return world.hasComponent(entity, stateType) && world.getComponentData(entity, stateType).enabled;
        };
        ComponentBehaviour.prototype.Enable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (!state.enabled) {
                state.enabled = true;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype.Disable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (state.enabled) {
                state.enabled = false;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype._MakeOnEntityEnable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onEnableCalled && state.enabled) {
                            state.onEnableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityEnable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityUpdate = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                        if (hasState) {
                            _this.world.setComponentData(entity, state);
                        } else {
                            _this.world.addComponentData(entity, state);
                        }
                    }
                    if (state.enabled) {
                        _this.entity = entity;
                        _this.OnEntityUpdate();
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityDisable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onDisableCalled && !state.enabled) {
                            state.onDisableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityDisable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        return ComponentBehaviour;
    }());
    ut.ComponentBehaviour = ComponentBehaviour;


})(ut || (ut = {})));
