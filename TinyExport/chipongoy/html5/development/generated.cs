using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.UILayout;
using UTiny.Text;
using UTiny.UIControls;
using UTiny.Tweens;
using UTiny.HitBox2D;
using UTiny.Animation;
using UTiny.Watchers;
using UTiny.Physics2D;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace SceneMgr
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Scene1
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Scene2
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct SceneDefineContainer : IComponentData
    {
        public DynamicArray<ScenePathData> sceneList;
    }
    public struct SceneList : IComponentData
    {
        public DynamicArray<SceneData> sceneList;
        public DynamicArray<ChildScene> sceneChildList;
        public DynamicArray<ScenePin> scenePinList;
    }
    public struct MouseSpriteInteractionData : IComponentData
    {
        public Entity camera;
        public bool hover;
        public bool down;
        public bool lastDown;
        public bool clicked;
        public bool isInteractable;
        public sbyte mouseButtonCode;
        public double clickDragTreshold;
        public double tresholdCounter;
        public bool drag;
        public bool startDrag;
    }
    public struct SimpleDraggerTag : IComponentData
    {
    }
    public struct ChildScene
    {
        public game.SceneId parentSceneId;
        public game.SceneId sceneIdToLoad;
    }
    public struct SceneData
    {
        public game.SceneId sceneId;
        public bool DontDestroy;
    }
    public struct ScenePathData
    {
        public game.SceneId sceneId;
        public string scenePath;
    }
    public struct ScenePin
    {
        public sbyte pinId;
        public game.SceneId srcSceneId;
        public game.SceneId destSceneId;
    }
    public enum SceneId
    {
        SceneMgr = 0
        , Bootstrap = 1
        , Scene1 = 2
        , Scene2 = 3
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct Grid : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTile : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.UILayout
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UIControls
{
}

namespace ut.Tweens
{
}

namespace ut.Core2D
{
}

namespace ut.HitBox2D
{
}

namespace ut.Animation
{
}

namespace ut.Watchers
{
}

namespace ut.Physics2D
{
}
namespace game
{
    public struct SceneMgrBehaviour_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public struct SimpleDragger_State : IComponentData
    {
        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;
    }
}
namespace game
{
    public class MouseSpriteInteractionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class TimerServiceJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CustomButtonSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class SceneMgrBehaviour_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class SceneMgrBehaviour_OnEntityUpdateJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.InputFence))]
    public class SimpleDragger_OnEntityEnableJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class SimpleDragger_OnEntityUpdateJS : IComponentSystem
    {
    }
}
