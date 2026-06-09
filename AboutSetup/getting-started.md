# Getting Started

Let's get SharpCraft Engine up and running on your machine!

::: tip Supported platforms
Currently SharpCraft is a PC engine, available on Windows, Linux and macOS.
:::

## Prerequisites

Before you begin, make sure you have the following installed:
- **[.NET SDK 10.0](https://dotnet.microsoft.com)**
- **Any C#-capable IDE** — [Visual Studio](https://visualstudio.microsoft.com/), [VS Code](https://code.visualstudio.com/), [JetBrains Rider](https://www.jetbrains.com/rider/), [MonoDevelop](https://www.monodevelop.com/), whatever you prefer

## Setup

Clone the repository:

```sh
git clone https://github.com/MiraDiv-git/SharpCraft.git
```

## Building

There are a few ways to build, pick what works for you.

### Using an IDE publish profile

The most convenient option. Create a publish profile with these settings:
- Self-contained .NET
- Single file output
- Your target OS and Debug/Release config

### Using the build scripts

The repo includes `build.sh` and `build.bat` for quick builds. Usage: `./build.sh <os> [config]`

**For example:**
```sh
chmod +x ./build.sh
./build.sh linux-x64 Debug
```

### Using the .NET CLI directly

You can just use publish settings like that using `.NET CLI` for full control over build parameters.

```sh
dotnet publish SharpCraft/SharpCraft.csproj \
  -c Debug \
  -r linux-x64 \
  --self-contained true \
  -p:PublishSingleFile=true \
  -o ./publish
```