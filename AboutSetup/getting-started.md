# Getting Started

Let's get SharpCraft Engine up and running on your machine.

## Prerequisites

Before you begin, make sure you have the following installed:
- **.NET SDK 10.0**
- **Any C#-capable IDE** — Visual Studio, VS Code, JetBrains Rider, MonoDevelop, whatever you prefer

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

**Linux:**
```sh
chmod +x ./build.sh
./build.sh linux-x64 Debug
```

**Windows:**
```cmd
./build.bat win-x64 Debug
```

### Using the .NET CLI directly

```sh
dotnet publish SharpCraft/SharpCraft.csproj \
  -c Debug \
  -r linux-x64 \
  --self-contained true \
  -p:PublishSingleFile=true \
  -o ./publish
```

::: info Cross-platform builds
.NET publish is cross-platform — you can target any OS from any OS. The only exception is macOS targets, which require Xcode-specific tools available only on macOS.
:::