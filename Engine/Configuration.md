# Configuration
SharpCraft has 2 global configs. It's important data, that used in Engine, just in one place to change it in any way you need.

## Usage
To use some data from config, you can simply use `Config` namespace in any part of Engine project. <br>
For example:
```cs
string windowTitle = Config.EngineDefaults.Window.Title;
Console.WriteLine(windowTitle); // Will print "SharpCraft" in the console
```

We do not recomend to connect configs like that:
```cs
using SharpCraft.Engine.Config.EngineDefaults
```
Because it can conflict with other namespaces. The canonical way is to use `Config` namespace in line.

## EngineMetadata
```cs
public class EngineMetadata
{
    public static class Info
    {
        public const string EngineName = "SharpCraft";
        public const string EngineVersion = "v0.2.0";
        public const string EngineCopyright = "© 2026 MiraDiv · © 2026 SharpCraft Contributors";
        public const string EngineLicense = "MIT";
        public const string EngineWebsite = "https://github.com/MiraDiv-git/SharpCraft";
        public const string EngineDocs = "https://sharpcraft-docs.netlify.app/";
        
        public const string GameName = "Unnamed";
        public const string GameAuthor = "Unknown";
    }
}
```

## EngineDefaults
```cs
public static class EngineDefaults
{
    public static class Window
    {
        public const string Title = "SharpCraft";
        public const int Width = 800;
        public const int Height = 600;
        public const bool VSync = false;

        public const WindowState Mode = WindowState.Normal;
        public const WindowBorder Border = WindowBorder.Resizable;
    }

    public static class Font
    {
        public static readonly string Path = System.IO.Path.Combine("Fonts", "dogicapixel.png");
        public const float Size = 16f;
    }
}
```