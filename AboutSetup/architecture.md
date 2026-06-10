# Architecture

SharpCraft's architecture contains 3 main projects in the solution, that are described below.

## SharpCraft

It's an entry point of SharpCraft. It contains only `Program.cs` script, that starts everything in both engine and game:

- Sets directory where to save configuration files, like `settings.json`
- Creates an instance of [GameWindow](/Engine/GameWindow)
- Sets default scene
- Runs the instantiated window

Also includes `soft_oal.dll` and `game_icon.ico` - those are dependencies for Windows, that are copying automatically in build.

## SharpCraft.Engine

It's the core of SharpCraft. It provides all the low-level systems that both the built-in game and any game built on top of SharpCraft can use:

- Manages the [GameWindow](/Engine/GameWindow), [SceneManager](/Engine/SceneManager), and the main game loop
- Handles input via [InputManager](/Engine/InputManager)
- Renders UI through [UIRenderer](/Engine/UIRenderer) and its element hierarchy ([Canvas](/Engine/UI/Canvas), [UIElement](/Engine/UI/UIElement), [UIButton](/Engine/UI/UIButton), [UIText](/Engine/UI/UIText), [UISlider](/Engine/UI/UISlider))
- Plays audio through [AudioManager](/Engine/AudioManager) (OpenAL + NVorbis)
- Loads assets through [AssetManager](/Engine/AssetManager) from an `.scres` ZIP archive
- Manages shaders, textures, meshes, and sounds ([Shader](/Engine/Render/Shader), [Texture](/Engine/Render/Texture), [Mesh](/Engine/Render/Mesh), [Sound](/Engine/Sound))
- Provides localization via JSON locale files embedded in the asset archive
- Persists user preferences through [UserSettings](/Engine/UserSettings) (`settings.json` on disk)
- Integrates Discord Rich Presence via [DiscordManager](/Engine/DiscordManager)
- Initializes all classes as modules

> **Note:** `SharpCraft.Engine` does **not** depend on `SharpCraft.Game`.

## SharpCraft.Game

It's the built-in voxel game that ships with SharpCraft. It uses the engine's systems to implement gameplay:

- Implements all game screens: [MainMenuScreen](/Game/Screens/MainMenuScreen), [PlayScreen](/Game/Screens/PlayScreen), [OptionsScreen](/Game/Screens/OptionsScreen), [PauseScreen](/Game/Screens/PauseScreen)
- Renders the world through [WorldScene](/Game/WorldScene), which exposes a static `Camera` property
- Generates and stores voxel terrain via [WorldGenerator](/Game/WorldGenerator) — planned to be split into a `World` (block storage) and `WorldGenerator` (procedural generation) pair
- Displays a HUD with a crosshair and a toggleable [DebugScreen](/Game/DebugScreen) (F3)
- Handles AABB-based physics for player movement and collision