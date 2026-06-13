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

It's the core of SharpCraft. It provides all the low-level systems that both the built-in game and any game built on top of SharpCraft can use:

- Manages the [GameWindow](/Engine/Classes/GameWindow), [SceneManager](/Engine/Classes/class-list.md), and the main game loop
- Handles input via [InputManager](/Engine/Classes/class-list.md)
- Renders UI through [UIRenderer](/Engine/Classes/class-list.md) and its element hierarchy ([Canvas](/Engine/Classes/class-list.md), [UIElement](/Engine/Classes/class-list.md), [UIButton](//Engine/Classes/class-list.md), [UIText](/Engine/Classes/class-list.md), [UISlider](/Engine/Classes/class-list.md))
- Plays audio through [AudioManager](/Engine/Classes/class-list.md) (OpenAL + NVorbis)
- Loads assets through [AssetManager](/Engine/Classes/class-list.md) from an `.scres` ZIP archive
- Manages shaders, textures, meshes, and sounds ([Shader](/Engine/Classes/class-list.md), [Texture](/Engine/Classes/class-list.md), [Mesh](/Engine/Classes/class-list.md), [Sound](/Engine/Classes/class-list.md))
- Provides localization via JSON locale files embedded in the asset archive
- Persists user preferences through [UserSettings](/Engine/Classes/class-list.md) (`settings.json` on disk)
- Integrates Discord Rich Presence via [DiscordManager](/Engine/Classes/class-list.md)
- Initializes all classes as modules

> **Note:** `SharpCraft.Engine` does **not** depend on `SharpCraft.Game`.

## SharpCraft.Game

It's the built-in voxel game that ships with SharpCraft. It uses the engine's systems to implement gameplay:

- Implements all game screens: [MainMenuScreen](/Engine/Classes/class-list.md), [PlayScreen](/Engine/Classes/class-list.md), [OptionsScreen](/Engine/Classes/class-list.md), [PauseScreen](/Engine/Classes/class-list.md)
- Renders the world through [WorldScene](/Engine/Classes/class-list.md), which exposes a static `Camera` property
- Generates and stores voxel terrain via [WorldGenerator](/Engine/Classes/class-list.md) — planned to be split into a `World` (block storage) and `WorldGenerator` (procedural generation) pair
- Displays a HUD with a crosshair and a toggleable [DebugScreen](/Engine/Classes/class-list.md) (F3)
- Handles AABB-based physics for player movement and collision