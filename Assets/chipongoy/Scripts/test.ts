
namespace game {

    /** New System */
    export class test extends ut.ComponentSystem {
        
        OnUpdate():void {
            let dt = this.scheduler.deltaTime();
            this.world.forEach([game.testflag, ut.Core2D.Sprite2DRenderer], (t, d) => {
                // console.log(dt);
                // d.color.a = d.color.a - dt;
                // console.log(d.color.a);
            })
        }
    }
}
