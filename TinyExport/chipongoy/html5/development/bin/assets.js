/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project chipongoy
 */

/**
 * @type {object}
 * @desc Map containing URLs for all assets.  If assets are included as base64 blobs, these will be data URLs.
 * @example var assetUrl = UT_ASSETS["MyCustomAsset"]
 */
var UT_ASSETS = {
}

var UT_ASSETS_SETUP = function(world) {
    var arch0 = world.createArchetype(ut.UIControls.ColorTintTransition)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "assets/transitions/f645c73fb6f548769ae2a3f54104dc71");
    var c0 = new ut.UIControls.ColorTintTransition();
    var s0 = new ut.Core2D.Color();
    s0.r = 1;
    s0.g = 1;
    s0.b = 1;
    s0.a = 1;
    c0.normal = s0;
    var s1 = new ut.Core2D.Color();
    s1.r = 1;
    s1.g = 0.2783019;
    s1.b = 0.2783019;
    s1.a = 1;
    c0.hover = s1;
    var s2 = new ut.Core2D.Color();
    s2.r = 0.7843137;
    s2.g = 0.7843137;
    s2.b = 0.7843137;
    s2.a = 1;
    c0.pressed = s2;
    var s3 = new ut.Core2D.Color();
    s3.r = 0.7843137;
    s3.g = 0.7843137;
    s3.b = 0.7843137;
    s3.a = 0.5019608;
    c0.disabled = s3;
    world.setComponentData(e0, c0);
    return [e0];
}


