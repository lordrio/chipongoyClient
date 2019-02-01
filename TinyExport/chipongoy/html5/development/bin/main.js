/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project chipongoy
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.UILayout);
ut.importModule(ut.Text);
ut.importModule(ut.HTML);
ut.importModule(ut.UIControls);
ut.importModule(ut.Tweens);
ut.importModule(ut.Core2D);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Animation);
ut.importModule(ut.Watchers);
ut.importModule(ut.Physics2D);
ut.main = function() {
    game.SceneMgrBehaviourFilter._Components = [ut.Entity, 
        game.SceneList, game.SceneDefineContainer
    ];
    game.SceneMgrBehaviourFilter.prototype.Read = function(world, entity) {
        this.list = world.getComponentData(entity, game.SceneList);
        this.def = world.getComponentData(entity, game.SceneDefineContainer);
    };
    game.SceneMgrBehaviourFilter.prototype.Reset = function() {
        this.list = undefined;
        this.def = undefined;
    };
    game.SceneMgrBehaviourFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.list);
        world.setComponentData(entity, this.def);
    };
    game.SceneMgrBehaviourFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, list, def) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.SimpleDraggerFilter._Components = [ut.Entity, 
        ut.Core2D.TransformLocalPosition, game.MouseSpriteInteractionData, game.SimpleDraggerTag
    ];
    game.SimpleDraggerFilter.prototype.Read = function(world, entity) {
        this.pos = world.getComponentData(entity, ut.Core2D.TransformLocalPosition);
        this.mouseSprite = world.getComponentData(entity, game.MouseSpriteInteractionData);
        this.tag = world.getComponentData(entity, game.SimpleDraggerTag);
    };
    game.SimpleDraggerFilter.prototype.Reset = function() {
        this.pos = undefined;
        this.mouseSprite = undefined;
        this.tag = undefined;
    };
    game.SimpleDraggerFilter.prototype.Write = function(world, entity) {
        world.setComponentData(entity, this.pos);
        world.setComponentData(entity, this.mouseSprite);
        world.setComponentData(entity, this.tag);
    };
    game.SimpleDraggerFilter.prototype.ForEach = function(world, callback) {
        var _this = this;
        world.forEach(this.constructor._Components, function($entity, pos, mouseSprite, tag) {
            _this.Read(world, $entity);
            callback($entity);
            if (world.exists($entity)) { _this.Write(world, $entity); }
        });
    };
    game.SceneMgrBehaviour.Instance = new game.SceneMgrBehaviour();
    game.SceneMgrBehaviour._StateType = game.SceneMgrBehaviour_State;
    game.SceneMgrBehaviour.prototype._GetFilter = function() { if (!this.data) { this.data = new game.SceneMgrBehaviourFilter(); } return this.data; }
    game.SimpleDragger.Instance = new game.SimpleDragger();
    game.SimpleDragger._StateType = game.SimpleDragger_State;
    game.SimpleDragger.prototype._GetFilter = function() { if (!this.data) { this.data = new game.SimpleDraggerFilter(); } return this.data; }
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.MouseSpriteInteractionSystemJS.update = new game.MouseSpriteInteractionSystem()._MakeSystemFn();
    game.TimerServiceJS.update = new game.TimerService()._MakeSystemFn();
    game.CustomButtonSystemJS.update = new game.CustomButtonSystem()._MakeSystemFn();
    game.SceneMgrBehaviour_OnEntityEnableJS.update = game.SceneMgrBehaviour.Instance._MakeOnEntityEnable();
    game.SimpleDragger_OnEntityEnableJS.update = game.SimpleDragger.Instance._MakeOnEntityEnable();
    game.SceneMgrBehaviour_OnEntityUpdateJS.update = game.SceneMgrBehaviour.Instance._MakeOnEntityUpdate();
    game.SimpleDragger_OnEntityUpdateJS.update = game.SimpleDragger.Instance._MakeOnEntityUpdate();
    scheduler.schedule(game.MouseSpriteInteractionSystemJS);
    scheduler.schedule(game.TimerServiceJS);
    scheduler.schedule(game.CustomButtonSystemJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(game.SceneMgrBehaviour_OnEntityEnableJS);
    scheduler.schedule(game.SimpleDragger_OnEntityEnableJS);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.UIControls.MouseInteractionSystem);
    scheduler.schedule(ut.UIControls.ToggleCheckedSystem);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.SceneMgrBehaviour_OnEntityUpdateJS);
    scheduler.schedule(game.SimpleDragger_OnEntityUpdateJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.HTML.TextMeasurement);
    scheduler.schedule(ut.UIControls.UIControlsSystem);
    scheduler.schedule(ut.UIControls.ButtonSystem);
    scheduler.schedule(ut.UIControls.ToggleSystem);
    scheduler.schedule(ut.Tweens.TweenSystem);
    scheduler.schedule(ut.Animation.AnimationClipSourceSystem);
    scheduler.schedule(ut.Animation.AnimationClipPlayerSystem);
    scheduler.schedule(ut.Animation.AnimationBlenderSystem);
    scheduler.schedule(ut.Animation.AnimationResultApplierSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Text.Text2DInitSystem);
    scheduler.schedule(ut.Core2D.Shape2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 1920;
    c0.height = 1080;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c1.gravity = s0;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.SceneMgr");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
