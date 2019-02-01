var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var scene;
(function (scene) {
    var SceneData = /** @class */ (function (_super) {
        __extends(SceneData, _super);
        function SceneData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SceneData;
    }(game.SceneData));
    scene.SceneData = SceneData;
    function ParseSceneData(data) {
        var output = {};
        data.list.sceneList.forEach(function (d) {
            var item = __assign({}, d, { pins: {}, childs: [], path: "" });
            data.list.scenePinList.forEach(function (pin) {
                if (pin.srcSceneId == d.sceneId) {
                    item.pins[pin.pinId] = pin.destSceneId;
                }
            });
            data.list.sceneChildList.forEach(function (child) {
                if (child.parentSceneId == d.sceneId) {
                    item.childs.push(child.sceneIdToLoad);
                }
            });
            // output.push(item);
            output[d.sceneId] = item;
        });
        data.def.sceneList.forEach(function (def) {
            output[def.sceneId].path = def.scenePath;
        });
        return output;
    }
    scene.ParseSceneData = ParseSceneData;
})(scene || (scene = {}));
var game;
(function (game) {
    /*
        notes :
            - workflow :
                - change scene
                    > IN transition start
                    > IN transition end
                - all system should be in pause state
                - clean up scene
                - load up scene
                    > OUT transition start
                    > OUT transition end
                - <<all done>>
    */
    var SceneMgr = /** @class */ (function () {
        function SceneMgr() {
            this.currentSceneId = null;
            this.nextSceneId = SceneMgr_1.StartUpScene;
            this.prevSceneId = null;
            this.isInTransition = false;
            this.data = null;
            if (SceneMgr_1._instance) {
                throw new Error("Error: Instantiation failed");
            }
            console.log("startup mgr");
        }
        SceneMgr_1 = SceneMgr;
        Object.defineProperty(SceneMgr, "Instance", {
            get: function () {
                return this._instance || (this._instance = new this());
            },
            enumerable: true,
            configurable: true
        });
        SceneMgr.prototype.Initialize = function (d, world) {
            if (this.data != null) {
                return;
            }
            console.log(this.currentSceneId);
            // lets reconstruct, because fucking entity can be nested
            this.data = scene.ParseSceneData(d);
            console.log(this.data);
            this.LoadUpScene(world);
        };
        // flag :
        // return if shit is in transition mode so game system is paused
        SceneMgr.prototype.IsInTransition = function () {
            return this.isInTransition;
        };
        SceneMgr.prototype.LoadUpScene = function (world) {
            var _this = this;
            if (this.nextSceneId == null) {
                return;
            }
            // load
            var loadedSceneData = this.data[this.nextSceneId];
            // update
            this.prevSceneId = this.currentSceneId;
            this.currentSceneId = this.nextSceneId;
            this.nextSceneId = null;
            // spawn parent
            if (this.nextSceneId != SceneMgr_1.StartUpScene) {
                ut.EntityGroup.instantiate(world, loadedSceneData.path);
                console.log("loaded parent " + loadedSceneData.path);
            }
            // spawn childs
            if (loadedSceneData != null) {
                loadedSceneData.childs.forEach(function (child) {
                    var d = _this.data[child];
                    ut.EntityGroup.instantiate(world, d.path);
                    console.log("loaded child " + d.path);
                });
            }
        };
        SceneMgr.prototype.CleanUpScene = function (world) {
            var _this = this;
            // do not clean if its startup scene
            if (this.currentSceneId == SceneMgr_1.StartUpScene) {
                return;
            }
            // lets clean up
            var loadedSceneData = this.data[this.currentSceneId];
            // clean child
            loadedSceneData.childs.forEach(function (child) {
                var d = _this.data[child];
                ut.EntityGroup.destroyAll(world, d.path);
            });
            // clean parent
            ut.EntityGroup.destroyAll(world, loadedSceneData.path);
        };
        // do clean up
        SceneMgr.prototype.ChangeScene = function (pinId, world) {
            var loadedSceneData = this.data[this.currentSceneId];
            // check if pin exist
            if (loadedSceneData.pins[pinId] == undefined || loadedSceneData.pins[pinId] == null) {
                // no pin
                console.log("[ERROR] pin " + pinId + " does not exist for " + this.currentSceneId);
                return;
            }
            // set next scene
            this.nextSceneId = loadedSceneData.pins[pinId];
            // temp without transition
            this.CleanUpScene(world);
            this.LoadUpScene(world);
        };
        SceneMgr.prototype.UpdateSystem = function (world) {
            // temp
            if (ut.Runtime.Input.getKeyUp(ut.Core2D.KeyCode.S)) {
                console.log("pressed S");
                this.ChangeScene(1, world);
            }
            if (ut.Runtime.Input.getKeyUp(ut.Core2D.KeyCode.D)) {
                console.log("pressed D");
                this.ChangeScene(2, world);
            }
            // for transition animation :O
        };
        var SceneMgr_1;
        SceneMgr.StartUpScene = game.SceneId.SceneMgr;
        SceneMgr = SceneMgr_1 = __decorate([
            ut.executeAfter(ut.Shared.UserCodeEnd)
        ], SceneMgr);
        return SceneMgr;
    }());
    game.SceneMgr = SceneMgr;
})(game || (game = {}));
(function HDPI_Hacks_By_abeisgreat() {
    var w = window;
    // const initialize_hack = () => {
    //     console.log("Initializing HDPI hacks v6 by @abeisgreat");
    //     const fakeMouseEventFn = (ev) => {
    //         const ut_HTML = w.ut._HTML;
    //         const fakeEvent = {
    //             type: ev.type,
    //             pageX: ev.pageX * window.devicePixelRatio,
    //             pageY: ev.pageY * window.devicePixelRatio,
    //             preventDefault: () => {},
    //             stopPropagation: () => {}
    //         };
    //         ut_HTML.mouseEventFn(fakeEvent);
    //         ev.preventDefault();
    //         ev.stopPropagation();
    //     };
    //     const fakeTouchEventFn = (ev) => {
    //         const ut_HTML = w.ut._HTML;
    //         const changedTouches = [];
    //         for (var index = 0; index < ev.changedTouches.length; index++) {
    //             const touch = ev.changedTouches[index];
    //             changedTouches.push({
    //                 identifier: touch.identifier,
    //                 pageX: touch.pageX * window.devicePixelRatio,
    //                 pageY: touch.pageY * window.devicePixelRatio
    //             });
    //         }
    //         const fakeEvent = {
    //             type: ev.type,
    //             changedTouches,
    //             preventDefault: () => {},
    //             stopPropagation: () => {}
    //         };
    //         ut_HTML.touchEventFn(fakeEvent);
    //         ev.preventDefault();
    //         ev.stopPropagation();
    //     };
    //     window.addEventListener("resize", function () {
    //         const ut = w.ut;
    //         ut._HTML.onDisplayUpdated(
    //             window.innerWidth * window.devicePixelRatio,
    //             window.innerHeight * window.devicePixelRatio,
    //             window.screen.width * window.devicePixelRatio,
    //             window.screen.height * window.devicePixelRatio,
    //             -1);
    //         ut._HTML.canvasElement.style.width = `${window.innerWidth}px`;
    //         ut._HTML.canvasElement.style.height = `${window.innerHeight}px`;
    //         ut._HTML.stopResizeListening();
    //         const mouseEvents = ["down", "move", "up"];
    //         const touchEvents = ["touch", "cancel", "move", "start"];
    //         mouseEvents.forEach((type) => {
    //             const eventType = `mouse${type}`;
    //             ut._HTML.canvasElement.removeEventListener(eventType, fakeMouseEventFn);
    //             ut._HTML.canvasElement.addEventListener(eventType, fakeMouseEventFn);
    //         });
    //         touchEvents.forEach((type) => {
    //             const eventType = `touch${type}`;
    //             ut._HTML.canvasElement.removeEventListener(eventType, fakeTouchEventFn);
    //             ut._HTML.canvasElement.addEventListener(eventType, fakeTouchEventFn);
    //         });
    //         setTimeout(function () {
    //             mouseEvents.forEach((type) => {
    //                 ut._HTML.canvasElement.removeEventListener(`mouse${type}`, ut._HTML.mouseEventFn);
    //             });
    //             touchEvents.forEach((type) => {
    //                 ut._HTML.canvasElement.removeEventListener(`touch${type}`, ut._HTML.touchEventFn);
    //             });
    //         }, 100);
    //     });
    //     window.dispatchEvent(new Event("resize"));
    // }
    var ut = w.ut;
    var html = ut._HTML;
    var oldSetCanvasSie = ut._HTML.setCanvasSize;
    // ut._HTML.setCanvasSize = (function(width, height, webgl) {
    //     oldSetCanvasSie(800, 600, webgl);
    // });
    // const intervalID = setInterval(() => {
    //     const w = (window as any);
    //     const ut = w.ut;
    //     if (ut._HTML.canvasElement && w.known_ut_HTML !== ut._HTML) {
    //         w.known_ut_HTML = ut._HTML;
    //         clearInterval(intervalID);
    //         ut._HTML.setCanvasSize(800, 600, "gl");
    //     }
    // }, 0);
})();
var game;
(function (game) {
    var SceneMgrBehaviourFilter = /** @class */ (function (_super) {
        __extends(SceneMgrBehaviourFilter, _super);
        function SceneMgrBehaviourFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SceneMgrBehaviourFilter;
    }(ut.EntityFilter));
    game.SceneMgrBehaviourFilter = SceneMgrBehaviourFilter;
    // there should only be one behaviour of this type.
    // if more then one then its fucked already
    var SceneMgrBehaviour = /** @class */ (function (_super) {
        __extends(SceneMgrBehaviour, _super);
        function SceneMgrBehaviour() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the SceneMgrFilter signature, once when enabled
        SceneMgrBehaviour.prototype.OnEntityEnable = function () {
            // run the processSceneChange(?) once
            game.SceneMgr.Instance.Initialize(this.data, this.world);
        };
        // this method is called for each entity matching the SceneMgrFilter signature, every frame it's enabled
        SceneMgrBehaviour.prototype.OnEntityUpdate = function () {
            game.SceneMgr.Instance.UpdateSystem(this.world);
        };
        return SceneMgrBehaviour;
    }(ut.ComponentBehaviour));
    game.SceneMgrBehaviour = SceneMgrBehaviour;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    ut.executeAfter(ut.Shared.InputFence);
    ut.executeBefore(ut.Shared.UserCodeStart);
    var MouseSpriteInteractionSystem = /** @class */ (function (_super) {
        __extends(MouseSpriteInteractionSystem, _super);
        function MouseSpriteInteractionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MouseSpriteInteractionSystem.prototype.OnUpdate = function () {
            var _this = this;
            var deltaTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, ut.Core2D.TransformLocalScale, game.MouseSpriteInteractionData], function (pos, scale, data) {
                if (data.isInteractable) {
                    var pointerWorldPosition = game.InputService.getPointerWorldPosition(_this.world, data.camera);
                    var topLeft = new Vector2(pos.position.x - scale.scale.x / 2, pos.position.y + scale.scale.y / 2);
                    var bottomRight = new Vector2(pos.position.x + scale.scale.x / 2, pos.position.y - scale.scale.y / 2);
                    data.hover = false;
                    if (pointerWorldPosition.x >= topLeft.x && pointerWorldPosition.x <= bottomRight.x &&
                        pointerWorldPosition.y <= topLeft.y && pointerWorldPosition.y >= bottomRight.y) {
                        var down = ut.Runtime.Input.getMouseButtonDown(data.mouseButtonCode);
                        var up = ut.Runtime.Input.getMouseButtonUp(data.mouseButtonCode);
                        var held = ut.Runtime.Input.getMouseButton(data.mouseButtonCode);
                        data.hover = true;
                        data.lastDown = data.down;
                        data.down = held;
                        var prevDrag = data.drag;
                        if (down) {
                            data.drag = false;
                            data.startDrag = false;
                            data.tresholdCounter = 0;
                        }
                        else if (held) {
                            data.tresholdCounter += deltaTime;
                            if (data.tresholdCounter > data.clickDragTreshold) {
                                data.drag = true;
                                if (prevDrag != data.drag) {
                                    data.startDrag = true;
                                }
                                else {
                                    data.startDrag = false;
                                }
                            }
                        }
                        if (up && !data.drag) {
                            data.clicked = true;
                        }
                        if (up && data.drag) {
                            data.drag = false;
                            data.startDrag = false;
                        }
                        else {
                            data.clicked = false;
                        }
                    }
                }
                else {
                    // disabled
                    data.hover = false;
                    data.clicked = false;
                    data.down = false;
                    data.lastDown = false;
                    data.drag = false;
                    data.startDrag = false;
                    data.tresholdCounter = 0;
                }
            });
        };
        return MouseSpriteInteractionSystem;
    }(ut.ComponentSystem));
    game.MouseSpriteInteractionSystem = MouseSpriteInteractionSystem;
})(game || (game = {}));
var game;
(function (game) {
    var SimpleDraggerFilter = /** @class */ (function (_super) {
        __extends(SimpleDraggerFilter, _super);
        function SimpleDraggerFilter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SimpleDraggerFilter;
    }(ut.EntityFilter));
    game.SimpleDraggerFilter = SimpleDraggerFilter;
    var SimpleDragger = /** @class */ (function (_super) {
        __extends(SimpleDragger, _super);
        function SimpleDragger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        // this method is called for each entity matching the SimpleDraggerFilter signature, once when enabled
        SimpleDragger.prototype.OnEntityEnable = function () { };
        // this method is called for each entity matching the SimpleDraggerFilter signature, every frame it's enabled
        SimpleDragger.prototype.OnEntityUpdate = function () {
            if (this.data.mouseSprite.drag) {
                if (this.data.mouseSprite.startDrag) {
                    ut.Tweens.TweenService.addTween(this.world, this.entity, ut.Core2D.TransformLocalPosition.position, this.data.pos.position, game.InputService.getPointerWorldPosition(this.world, this.data.mouseSprite.camera), 0.1, 0, ut.Core2D.LoopMode.Once, ut.Tweens.TweenFunc.InExponential, true);
                }
                else {
                    this.data.pos.position = game.InputService.getPointerWorldPosition(this.world, this.data.mouseSprite.camera);
                }
            }
        };
        return SimpleDragger;
    }(ut.ComponentBehaviour));
    game.SimpleDragger = SimpleDragger;
})(game || (game = {}));
var game;
(function (game) {
    var InputService = /** @class */ (function () {
        function InputService() {
        }
        InputService.getPointerWorldPosition = function (world, cameraEntity) {
            var displayInfo = world.getConfigData(ut.Core2D.DisplayInfo);
            var displaySize = new Vector2(displayInfo.width, displayInfo.height);
            var inputPosition = ut.Runtime.Input.getInputPosition();
            return ut.Core2D.TransformService.windowToWorld(world, cameraEntity, inputPosition, displaySize);
        };
        return InputService;
    }());
    game.InputService = InputService;
})(game || (game = {}));
// declare module "rx.all" {
//     export = Rx;
// }
var game;
(function (game) {
    /** New System */
    var TimerService = /** @class */ (function (_super) {
        __extends(TimerService, _super);
        function TimerService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimerService.prototype.OnUpdate = function () {
            var deltaTime = this.scheduler.deltaTime();
        };
        TimerService.timerContainer = {};
        return TimerService;
    }(ut.ComponentSystem));
    game.TimerService = TimerService;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var CustomButtonSystem = /** @class */ (function (_super) {
        __extends(CustomButtonSystem, _super);
        function CustomButtonSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomButtonSystem.prototype.OnUpdate = function () {
            // let deltaTime = this.scheduler.deltaTime();
            // this.world.forEach([game.CustomButton, ut.Core2D.Sprite2DRenderer, ut.UIControls.MouseInteraction],
            //     (button, spriteRenderer, mouseInteraction) => {
            //         button.IsPressed = mouseInteraction.down && button.IsInteractable;
            //         button.JustDown = !button.LastDown && mouseInteraction.down && button.IsInteractable;
            //         button.JustUp = button.LastDown && !mouseInteraction.down && button.IsInteractable;
            //         button.JustClicked = mouseInteraction.clicked && button.IsInteractable;
            //         if (button.IsPressed) {
            //             button.TimePressed += deltaTime;
            //         }
            //         if (button.JustDown || button.JustUp || mouseInteraction.over != button.IsPointerOver || button.LastIsInteractable != button.IsInteractable) {
            //             button.LastIsInteractable = button.IsInteractable;
            //             let sprite = button.DefaultSprite;
            //             if (!button.IsInteractable) {
            //                 sprite = button.DisabledSprite;
            //             }
            //             else if (mouseInteraction.over && button.IsPressed) {
            //                 sprite = button.PressedSprite;
            //             }
            //             else if (mouseInteraction.over) {
            //                 sprite = button.HoveredSprite;
            //             }
            //             if (this.world.exists(sprite)) {
            //                 spriteRenderer.sprite = sprite;
            //             }
            //             if (this.world.exists(button.ContentToOffsetOnPress) && button.IsInteractable) {
            //                 let contentRectTransform = this.world.getComponentData(button.ContentToOffsetOnPress, ut.UILayout.RectTransform);
            //                 if (!button.ContentDefautPositionIsSet) {
            //                     button.ContentDefautPositionIsSet = true;
            //                     button.ContentDefautPositionY = contentRectTransform.anchoredPosition.y;
            //                 }
            //                 let contentPosition = contentRectTransform.anchoredPosition;
            //                 contentPosition.y = button.ContentDefautPositionY + (mouseInteraction.over && button.IsPressed ? button.PressedOffsetY : 0);
            //                 contentRectTransform.anchoredPosition = contentPosition;
            //                 this.world.setComponentData(button.ContentToOffsetOnPress, contentRectTransform);
            //             }
            //         }
            //         button.IsPointerOver = mouseInteraction.over;
            //         button.LastDown = mouseInteraction.down;
            //         button.LastOver = mouseInteraction.over;
            // });
        };
        return CustomButtonSystem;
    }(ut.ComponentSystem));
    game.CustomButtonSystem = CustomButtonSystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map