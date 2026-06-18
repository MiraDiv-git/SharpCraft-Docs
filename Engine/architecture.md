# Architecture

SharpCraft's architecture contains 3 main projects in the solution, that are described below.

## SharpCraft

It's an entry point of SharpCraft. It contains only `Program.cs` script, that starts everything in both engine and game:

- Sets directory where to save configuration files, like `settings.json`
- Creates an instance of [GameWindow](/Engine/Classes/GameWindow)
- Sets default scene
- Runs the instantiated window

Also includes `soft_oal.dll` and `game_icon.ico` - those are dependencies for Windows, that are copying automatically in build.

## SharpCraft.Engine

It's the core of SharpCraft. It provides all the low-level systems any game made with SharpCraft can use:

- Manages the [GameWindow](/Engine/Classes/GameWindow), [SceneManager](/Engine/Classes/class-list.md), and the main game loop
- Handles input via [InputManager](/Engine/Classes/class-list.md)
- Renders UI through [UIRenderer](/Engine/Classes/class-list.md) and its element hierarchy ([Canvas](/Engine/Classes/class-list.md), [UIElement](/Engine/Classes/class-list.md), [UIButton](//Engine/Classes/class-list.md), [UIText](/Engine/Classes/class-list.md), [UISlider](/Engine/Classes/class-list.md))
- Plays audio through [AudioManager](/Engine/Classes/class-list.md) (OpenAL + NVorbis)
- Loads assets through [AssetManager](/Engine/Classes/class-list.md) from an `Resources.scres` ZIP archive
- Manages shaders, textures, meshes, and sounds ([Shader](/Engine/Classes/class-list.md), [Texture](/Engine/Classes/class-list.md), [Mesh](/Engine/Classes/class-list.md), [Sound](/Engine/Classes/class-list.md))
- Provides localization via JSON locale files embedded in the asset archive
- Persists user preferences through [UserSettings](/Engine/Classes/class-list.md) (`settings.json` on disk)
- Integrates Discord Rich Presence via [DiscordManager](/Engine/Classes/class-list.md)
- Initializes all classes as modules

> **Note:** `SharpCraft.Engine` does **not** depend on `SharpCraft.Game`.

## SharpCraft.Game

It's the development space for your game. It has minimal skeleton that's required by engine to get your game started. For more information - read the [Creating game](../Game/minimal) docs.