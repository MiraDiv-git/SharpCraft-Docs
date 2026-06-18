# Configuration
SharpCraft has two global configs: [EngineMetadata](#enginemetadata) and [EngineDefaults](#enginedefaults).
They store important data used by the Engine, all in one place,
so any changes take effect globally without touching the engine internals.

## Usage
To use some data from config, you can simply use `Config` namespace in any part of `Engine` project. <br>
For example:
```cs
using SharpCraft.Engine.Config;
string windowTitle = EngineDefaults.Window.Title;
Console.WriteLine(windowTitle); // Will print "SharpCraft" in the console
```

You can also edit the config in `Game` project for cases when you don't need to edit the engine, and just developing the game. <br>
For example:
```cs
using SharpCraft.Engine.Config;
EngineMetadata.GameInfo.GameName = "SharpCraft Game";
```

We do not recommend to import configs like that:
```cs
using SharpCraft.Engine.Config.EngineDefaults;
using SharpCraft.Engine.Config.EngineMetadata;
```
Because it can conflict with other namespaces. The canonical way is to use `Config` namespace.

## EngineMetadata
```cs
public static class EngineMetadata
{
    public static class EngineInfo
    {
        public static string EngineName = "SharpCraft";
        public static string EngineVersion = "v0.2.0";
        public static string EngineCopyright = "© 2026 MiraDiv · © 2026 SharpCraft Contributors";
        public static string EngineLicense = "MIT";
        public static string EngineWebsite = "https://github.com/MiraDiv-git/SharpCraft";
        public static string EngineDocs = "https://sharpcraft-docs.netlify.app/";
    }
    
    public static class GameInfo
    {
        public static string GameName = "Unnamed";
        public static string GameVersion = "v0.1.0";
        public static string GameAuthor = "Unknown";
        public static string GameWebsite = "https://www.webpagetest.org/blank.html";
    }
}
```

## EngineDefaults
```cs
public static class EngineDefaults
{
    public static class Window
    {
        public static string Title = "SharpCraft";
        public static int Width = 800;
        public static int Height = 600;
        public static bool VSync = false;
        public static WindowState Mode = WindowState.Normal;
        public static WindowBorder Border = WindowBorder.Resizable;
    }

    public static class Font
    {
        public static string Path = System.IO.Path.Combine("Fonts", "dogicapixel.png");
        public static float Size = 16f;
        public static Color4 Color = Rendering.Color.White;
        public static float Spacing = 0.4f;
        public static bool Shadow = true;
        public static float ShadowOffset = 2f;
        public static float VerticalOffset = 0f;
        public static UI.TextAlign TextAlign = UI.TextAlign.Center;
    }
}
```
