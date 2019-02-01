
declare namespace ut {

  /** Base class for user-defined Systems.*/
  abstract class ComponentSystem {

    /** Scheduler executing this system.*/
    readonly scheduler: ut.Scheduler;

    /** World on which this system operates on.*/
    readonly world: ut.World;

    /** Override this method to define your system update function.*/
    abstract OnUpdate():void;
  }

  type Schedulable = typeof ComponentBehaviour | typeof ComponentSystem | System | SystemJS;
  
  /** Decorator. This system will be executed after the given systems.*/
  function executeAfter(...args: Schedulable[]) : any;

  /** Decorator. This system will be executed before the given systems.*/
  function executeBefore(...args: Schedulable[]) : any;

  /** Decorator. These components are required by this system.*/
  function requiredComponents(...args: typeof Component[]) : any;

  /** Decorator. These components are optionally affected by this system.*/
  function optionalComponents(...args: typeof Component[]) : any;

  /** Classes based on EntityFilter can be used to iterate on entities.
   * 
   * This class is parsed by the Editor according to this convention:
   * - Add ut.Component fields to a filter to require them when iterating.
   * - Add the optional modifier '?' to ut.Component fields to require them if they exist.
   * - Add the 'readonly' modifier to ut.Component fields to tell the runtime this data is not modified.
   *
  */
  abstract class EntityFilter {
    /** Populates this filter from the given entity.*/
    Read(world: ut.World, entity: ut.Entity): void;
    /** Writes the contents of this filter to the given entity.*/
    Write(world: ut.World, entity: ut.Entity): void;
    /** Resets all fields to undefined.*/
    Reset(): void;
    /** Invokes the given callback for each entity matching this filter.*/
    ForEach(world: ut.World, callback: (entity: ut.Entity) => void): void;
  }

  /** Decorator. Declare that this system or behaviour may use the given EntityFilter during processing.*/
  function usingFilters(...filters: typeof EntityFilter[]) : any;

  /** Base class to define multiple systems following a familiar component lifecycle.
   * 
   * You must add an EntityFilter field to access per-entity data.
   * 
   * You must also define at least one of the following methods to get callbacks per entity matching the filter:
   * - OnEntityEnable. Called only once, the first frame this entity is matched by this behaviour.
   * - OnEntityUpdate. Called every frame on matching entities.
   * - OnEntityDisable. Called only once, the first frame this entity is marked as disabled by this behaviour.
  */
  abstract class ComponentBehaviour {
    /** Single instance for this class.*/
    static readonly Instance: ComponentBehaviour;

    readonly scheduler: ut.Scheduler;
    readonly world: ut.World;
    readonly entity: ut.Entity;

    /** Returns true if this behaviour is currently enabled on this entity.
     * Note that this method will return false if OnEnable was not called at least once.*/
    IsEnabled(world: ut.World, entity: ut.Entity): boolean;
    /** Enables this behaviour on the given entity.*/
    Enable(world: ut.World, entity: ut.Entity): void;
    /** Disables this behaviour on the given entity.*/
    Disable(world: ut.World, entity: ut.Entity): void;
  }
}
declare var UT_ASSETS: Object;
declare namespace game{
    class SceneDefineContainer extends ut.Component {
        constructor();
        sceneList: ScenePathData[];
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SceneDefineContainer): SceneDefineContainer;
        static _toPtr(p: number, v: SceneDefineContainer): void;
        static _tempHeapPtr(v: SceneDefineContainer): number;
        static _dtorFn(v: SceneDefineContainer): void;
    }
    class SceneList extends ut.Component {
        constructor();
        sceneList: SceneData[];
        sceneChildList: ChildScene[];
        scenePinList: ScenePin[];
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SceneList): SceneList;
        static _toPtr(p: number, v: SceneList): void;
        static _tempHeapPtr(v: SceneList): number;
        static _dtorFn(v: SceneList): void;
    }
    class MouseSpriteInteractionData extends ut.Component {
        constructor();
        camera: ut.Entity;
        hover: boolean;
        down: boolean;
        lastDown: boolean;
        clicked: boolean;
        isInteractable: boolean;
        mouseButtonCode: number;
        clickDragTreshold: number;
        tresholdCounter: number;
        drag: boolean;
        startDrag: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: MouseSpriteInteractionData): MouseSpriteInteractionData;
        static _toPtr(p: number, v: MouseSpriteInteractionData): void;
        static _tempHeapPtr(v: MouseSpriteInteractionData): number;
        static _dtorFn(v: MouseSpriteInteractionData): void;
    }
    class SimpleDraggerTag extends ut.Component {
        constructor();
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SimpleDraggerTag): SimpleDraggerTag;
        static _toPtr(p: number, v: SimpleDraggerTag): void;
        static _tempHeapPtr(v: SimpleDraggerTag): number;
        static _dtorFn(v: SimpleDraggerTag): void;
    }
    class FadeComponent extends ut.Component {
        constructor();
        colorComponent: ut.Entity[];
        fadeVal: number;
        FadeType: TransitionType;
        fadeTimeScale: number;
        temp: ut.Entity;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: FadeComponent): FadeComponent;
        static _toPtr(p: number, v: FadeComponent): void;
        static _tempHeapPtr(v: FadeComponent): number;
        static _dtorFn(v: FadeComponent): void;
    }
    class TransitionComponent extends ut.Component {
        constructor();
        transitionStarted: boolean;
        transitionEnded: boolean;
        transitionPlayFlag: boolean;
        destroyWhenFinished: boolean;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: TransitionComponent): TransitionComponent;
        static _toPtr(p: number, v: TransitionComponent): void;
        static _tempHeapPtr(v: TransitionComponent): number;
        static _dtorFn(v: TransitionComponent): void;
    }
    class CallbackComponent extends ut.Component {
        constructor();
        hash: string;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CallbackComponent): CallbackComponent;
        static _toPtr(p: number, v: CallbackComponent): void;
        static _tempHeapPtr(v: CallbackComponent): number;
        static _dtorFn(v: CallbackComponent): void;
    }
    class testflag extends ut.Component {
        constructor();
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: testflag): testflag;
        static _toPtr(p: number, v: testflag): void;
        static _tempHeapPtr(v: testflag): number;
        static _dtorFn(v: testflag): void;
    }
    class ChildScene {
        parentSceneId: SceneId;
        sceneIdToLoad: SceneId;
        static _size: number;
        static _fromPtr(p: number, v?: ChildScene): ChildScene;
        static _toPtr(p: number, v: ChildScene): void;
        static _tempHeapPtr(v: ChildScene): number;
    }
    class SceneData {
        sceneId: SceneId;
        DontDestroy: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: SceneData): SceneData;
        static _toPtr(p: number, v: SceneData): void;
        static _tempHeapPtr(v: SceneData): number;
    }
    class ScenePathData {
        sceneId: SceneId;
        scenePath: string;
        static _size: number;
        static _fromPtr(p: number, v?: ScenePathData): ScenePathData;
        static _toPtr(p: number, v: ScenePathData): void;
        static _tempHeapPtr(v: ScenePathData): number;
    }
    class ScenePin {
        pinId: number;
        srcSceneId: SceneId;
        destSceneId: SceneId;
        static _size: number;
        static _fromPtr(p: number, v?: ScenePin): ScenePin;
        static _toPtr(p: number, v: ScenePin): void;
        static _tempHeapPtr(v: ScenePin): number;
    }
    enum SceneId {
        SceneMgr = 0,
        Bootstrap = 1,
        Scene1 = 2,
        Scene2 = 3,
    }
    enum TransitionType {
        NONE = 0,
        FadeIn = 1,
        FadeOut = 2,
    }
    enum CallbackType {
    }
}
declare namespace ut{
}
declare namespace ut.EditorExtensions{
    class AssetReferenceAnimationClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAnimationClip): AssetReferenceAnimationClip;
        static _toPtr(p: number, v: AssetReferenceAnimationClip): void;
        static _tempHeapPtr(v: AssetReferenceAnimationClip): number;
        static _dtorFn(v: AssetReferenceAnimationClip): void;
    }
    class AssetReferenceAudioClip extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceAudioClip): AssetReferenceAudioClip;
        static _toPtr(p: number, v: AssetReferenceAudioClip): void;
        static _tempHeapPtr(v: AssetReferenceAudioClip): number;
        static _dtorFn(v: AssetReferenceAudioClip): void;
    }
    class AssetReferenceSprite extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSprite): AssetReferenceSprite;
        static _toPtr(p: number, v: AssetReferenceSprite): void;
        static _tempHeapPtr(v: AssetReferenceSprite): number;
        static _dtorFn(v: AssetReferenceSprite): void;
    }
    class AssetReferenceSpriteAtlas extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceSpriteAtlas): AssetReferenceSpriteAtlas;
        static _toPtr(p: number, v: AssetReferenceSpriteAtlas): void;
        static _tempHeapPtr(v: AssetReferenceSpriteAtlas): number;
        static _dtorFn(v: AssetReferenceSpriteAtlas): void;
    }
    class AssetReferenceTMP_FontAsset extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTMP_FontAsset): AssetReferenceTMP_FontAsset;
        static _toPtr(p: number, v: AssetReferenceTMP_FontAsset): void;
        static _tempHeapPtr(v: AssetReferenceTMP_FontAsset): number;
        static _dtorFn(v: AssetReferenceTMP_FontAsset): void;
    }
    class AssetReferenceTexture2D extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTexture2D): AssetReferenceTexture2D;
        static _toPtr(p: number, v: AssetReferenceTexture2D): void;
        static _tempHeapPtr(v: AssetReferenceTexture2D): number;
        static _dtorFn(v: AssetReferenceTexture2D): void;
    }
    class AssetReferenceTile extends ut.Component {
        constructor();
        guid: string;
        fileId: number;
        type: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: AssetReferenceTile): AssetReferenceTile;
        static _toPtr(p: number, v: AssetReferenceTile): void;
        static _tempHeapPtr(v: AssetReferenceTile): number;
        static _dtorFn(v: AssetReferenceTile): void;
    }
    class CameraCullingMask extends ut.Component {
        constructor();
        mask: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: CameraCullingMask): CameraCullingMask;
        static _toPtr(p: number, v: CameraCullingMask): void;
        static _tempHeapPtr(v: CameraCullingMask): number;
        static _dtorFn(v: CameraCullingMask): void;
    }
    class EntityLayer extends ut.Component {
        constructor();
        layer: number;
        static readonly cid: number;
        static readonly _view: any;
        static readonly _isSharedComp: boolean;
        static _size: number;
        static _fromPtr(p: number, v?: EntityLayer): EntityLayer;
        static _toPtr(p: number, v: EntityLayer): void;
        static _tempHeapPtr(v: EntityLayer): number;
        static _dtorFn(v: EntityLayer): void;
    }
}
declare namespace ut{
    class EntityGroupData extends Object{
        Component: ut.ComponentClass<any>;
        load(world: ut.World): ut.Entity[];
        name: string;
    }
    interface EntityGroups{
        [module: string]: any;
        game: {
            [data: string]: EntityGroupData;
            SceneMgr: EntityGroupData;
            Bootstrap: EntityGroupData;
            Scene1: EntityGroupData;
            Scene2: EntityGroupData;
            FadeIn: EntityGroupData;
            FadeOut: EntityGroupData;
        }
    }
}
declare let entities: ut.EntityGroups;
declare namespace ut.Core2D.layers{
    class Default extends ut.Component {
        static _wrap(w: number, e: number): Default;
        static readonly cid: number;
    }
    class TransparentFX extends ut.Component {
        static _wrap(w: number, e: number): TransparentFX;
        static readonly cid: number;
    }
    class IgnoreRaycast extends ut.Component {
        static _wrap(w: number, e: number): IgnoreRaycast;
        static readonly cid: number;
    }
    class Water extends ut.Component {
        static _wrap(w: number, e: number): Water;
        static readonly cid: number;
    }
    class UI extends ut.Component {
        static _wrap(w: number, e: number): UI;
        static readonly cid: number;
    }
    class Grid extends ut.Component {
        static _wrap(w: number, e: number): Grid;
        static readonly cid: number;
    }
    class Cutscene extends ut.Component {
        static _wrap(w: number, e: number): Cutscene;
        static readonly cid: number;
    }
}
