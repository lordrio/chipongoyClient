
namespace game {
    export class CallbackService {

        private static callbackMap: {[hash: string]: Function} = {};
        private static uniqID: number = 0;

        public static TriggerCallback(cb: CallbackComponent): void {
            // console.log("trigged " + cb.hash);
            let cbfunc = this.callbackMap[cb.hash];
            if (cbfunc == null || cbfunc == undefined) {
                return;
            }
            // console.log("trigged " + cb.hash);
            cbfunc();
            delete this.callbackMap[cb.hash];
        }

        public static AddCallbackToEntitiy(world:ut.World, obj: ut.Entity, func: Function): void {
            let cb = world.getOrAddComponentData(obj, game.CallbackComponent);
            CallbackService.uniqID++;
            cb.hash = "" + CallbackService.uniqID;
            CallbackService.callbackMap[cb.hash] = func;
            world.setComponentData(obj, cb);
            // console.log("added " + cb.hash + " " + func);
        }
    }
}
