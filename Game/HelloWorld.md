# Hello, World!

```cs
using SharpCraft.Engine.Scene;
using SharpCraft.Engine.UI;

namespace SharpCraft.Game;

public class MainScene : IScene
{
    public void Load()
    {
        Canvas canvas = new Canvas();

        var text = canvas.AddElement<UIText>();
        text.Anchor = Anchor.MiddleCenter;
        text.Text = "Hello, World!";
        
        canvas.SetExclusive(true);
    }
}
```