# Project Hierachy
After cloning the repository, you'll already get the `SharpCraft.Game` project. This is the project, where **your game logic** should be contained.
This is the most minimal structure you need to have just to launch the game.

## Structure
You should have exactly this project structure by default:

<FileTree :data="[
  { name: 'SharpCraft.Game', children: [
    { name: 'Resources', children: [
      { name: 'Fonts', children: [{ name: 'dogicapixel.png' }] },
      { name: 'Localization', children: [{ name: 'en.json' }] },
      { name: 'Textures', children: [
        { name: 'UI', children: [
          { name: 'Logos', children: [{ name: 'game_icon.png' }] }
        ]}
      ]}
    ]},
    { name: 'MainScene.cs' }
  ]}
]" />


## Main scene
```cs
using SharpCraft.Engine.Scene;

namespace SharpCraft.Game;

public class MainScene : IScene
{
    public void Load()
    {
        
    }
}
```