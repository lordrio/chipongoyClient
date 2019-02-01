
namespace game {

    /** New System */
    ut.executeBefore(ut.Shared.UserCodeStart)
    export class FadeTransitionSystem extends ut.ComponentSystem {

        public static FadeInEntityGroup = "game.FadeIn";
        public static FadeOutEntityGroup = "game.FadeIn";

        public static StartFade(world: ut.World, fadetype: game.TransitionType, func?: Function): void {
            var entities: ut.Entity[];
            switch(fadetype) {
                case TransitionType.FadeOut:
                entities = ut.EntityGroup.instantiate(world, this.FadeOutEntityGroup);
                break;

                case TransitionType.FadeIn:
                entities = ut.EntityGroup.instantiate(world, this.FadeInEntityGroup);
                break;

                default:
                return;
            }

            if (func != null && func != undefined) {
                entities.forEach(e => {
                    if(world.hasComponent(e, FadeComponent)) {
                        CallbackService.AddCallbackToEntitiy(world, e, func);
                    }
                });
            }
        }

        private DoFade(self:ut.Entity, fade:FadeComponent, tc:TransitionComponent, cb?:CallbackComponent): void {
            let dt = this.scheduler.deltaTime();
            if(!tc.transitionPlayFlag || tc.transitionEnded) {
                return;
            }

            if(!tc.transitionStarted && !tc.transitionEnded) {
                tc.transitionStarted = true;
            }

            let destroy = false;
            switch(fade.FadeType) {
                case TransitionType.FadeIn: {
                    fade.fadeVal += dt * fade.fadeTimeScale;
                    if(fade.fadeVal > 1.0){
                        fade.fadeVal = 1.0;
                        
                        if(cb != undefined && cb != null) {
                            CallbackService.TriggerCallback(cb);
                        }
                        tc.transitionStarted = false;
                        tc.transitionEnded = true;

                        destroy = true;
                    }
                }
                break;
                case TransitionType.FadeOut: {
                    fade.fadeVal -= dt * fade.fadeTimeScale;
                    if(fade.fadeVal < 1.0) {
                        fade.fadeVal = 0.0;

                        if(cb != undefined && cb != null) {
                            CallbackService.TriggerCallback(cb);
                        }
                        tc.transitionStarted = false;
                        tc.transitionEnded = true;
                        destroy = true;
                    }

                }
                break;
                default:
                break;
            }

            fade.colorComponent.forEach(i => {
                // console.log(i);
                let s = this.world.getComponentData(i, ut.Core2D.Sprite2DRenderer);
                s.color.a = fade.fadeVal;
                this.world.setComponentData(i, s);
            });

            if(destroy && tc.destroyWhenFinished) {
                switch(fade.FadeType) {
                    case TransitionType.FadeIn:
                    ut.EntityGroup.destroyAll(this.world, FadeTransitionSystem.FadeInEntityGroup);
                    break;
                    case TransitionType.FadeOut:
                    ut.EntityGroup.destroyAll(this.world, FadeTransitionSystem.FadeOutEntityGroup);
                    break;
                }
            }
        }
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, game.FadeComponent, game.TransitionComponent, game.CallbackComponent], (self, fade, tc, cb?) => {
                this.DoFade(self, fade, tc, cb);
                // let s = this.world.getComponentData(fade.temp, ut.Core2D.Sprite2DRenderer);
                // s.color.a = 1;
            });
        }
    }
}
