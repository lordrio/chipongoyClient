
namespace game {

    /** New System */
    ut.executeBefore(ut.Shared.UserCodeStart)
    export class FadeHelper {

        public static FadeInEntityGroup = "game.FadeIn";
        public static FadeOutEntityGroup = "game.FadeOut";

        public static StartFade(world: ut.World, fadetype: game.TransitionType, func?: Function): void {
            var entities: ut.Entity[];
            let maxTimer = 0.0;

            switch(fadetype) {
                case TransitionType.FadeOut:
                entities = ut.EntityGroup.instantiate(world, this.FadeOutEntityGroup);
                maxTimer = 0;
                entities.forEach(x => {
                    if(world.hasComponent(x, game.FadeComponent)) {
                        world.usingComponentData(x, [game.FadeComponent], fade => {
                            maxTimer = Math.max(maxTimer, fade.fadeDuration);
                            fade.entityItems.forEach(i => {
                                ut.Tweens.TweenService.addTween(
                                    world,
                                    i,
                                    ut.Core2D.Sprite2DRenderer.color.a,
                                    1,
                                    0,
                                    fade.fadeDuration,
                                    0,
                                    ut.Core2D.LoopMode.Once,
                                    ut.Tweens.TweenFunc.OutExponential,
                                    true);
                            });
                        });
                    }
                })
                setTimeout(() => {
                    if(func != null && func != undefined) {
                        func();
                        ut.EntityGroup.destroyAll(world, this.FadeOutEntityGroup);
                    }
                }, 1100 * maxTimer);
                break;

                case TransitionType.FadeIn:
                entities = ut.EntityGroup.instantiate(world, this.FadeInEntityGroup);
                maxTimer = 0;
                entities.forEach(x => {
                    if(world.hasComponent(x, game.FadeComponent)) {
                        world.usingComponentData(x, [game.FadeComponent], fade => {
                            maxTimer = Math.max(maxTimer, fade.fadeDuration);
                            fade.entityItems.forEach(i => {
                                ut.Tweens.TweenService.addTween(
                                    world,
                                    i,
                                    ut.Core2D.Sprite2DRenderer.color.a,
                                    0,
                                    1,
                                    fade.fadeDuration,
                                    0,
                                    ut.Core2D.LoopMode.Once,
                                    ut.Tweens.TweenFunc.InExponential,
                                    true);
                            });
                        });
                    }
                })
                setTimeout(() => {
                    if(func != null && func != undefined) {
                        func();
                        ut.EntityGroup.destroyAll(world, this.FadeInEntityGroup);
                    }
                }, 1100 * maxTimer);
                break;

                default:
                return;
            }
        }
    }
}
