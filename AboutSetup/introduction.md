---
outline: deep
---
# Introduction

SharpCraft is an open-source engine for building Minecraft-like voxel games, written in C# on top of [Silk.NET](https://github.com/dotnet/Silk.NET) and OpenGL.

The engine handles the low-level stuff — rendering, physics, audio, UI, input, asset loading — so you can focus on building your game. It ships with a reference implementation ([SharpCraft.Game](https://github.com/MiraDiv-git/SharpCraft/tree/main/SharpCraft.Game)) that you can use as a starting point or replace entirely.

## Why SharpCraft?

If you want to build a voxel game in C# without writing an engine from scratch — and without the overhead of a full-blown engine — SharpCraft gives you a focused, transparent foundation you can actually read and modify as you want.

## Source Code

You can always access source code on official GitHub Repository:<br> 
https://github.com/MiraDiv-git/SharpCraft

## Used Libraries

| Library | Purpose | Maintainer |
|:---|:---|:---|
| [Silk.NET](https://github.com/dotnet/Silk.NET) | OpenGL context creation, windowing, keyboard and mouse input handling — the foundation of SharpCraft's rendering and platform layer | .NET Foundation |
| [OpenAL Soft](https://openal-soft.org/) | Cross-platform audio playback and spatial sound, used for all in-game audio output | OpenAL Soft Community |
| [NVorbis](https://github.com/NVorbis/NVorbis) | Pure C# OGG Vorbis decoder, used to stream and decode compressed audio assets at runtime without native dependencies | ioctlLR |
| [Discord RPC](https://github.com/Lachee/discord-rpc-csharp) | Discord Rich Presence integration — displays current game state and activity in the user's Discord profile | Lachee |
| [StbImageSharp](https://github.com/StbSharp/StbImageSharp) | C# port of stb_image, handles loading of PNG, JPEG and other image formats for textures and asset pipeline | abarim-games |