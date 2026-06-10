---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SharpCraft Docs"
  tagline: Official documentation for open-source voxel 3D engine written on C#
  
  actions:
    - text: About & Setup
      link: /AboutSetup/introduction

    - text: Engine API
      link: /Engine/Classes/class-list
      
    - text: Game API
      link: /

# features:
#   - icon: .NET
#     title: "C# Language"
#     details: "Core gameplay and engine systems written in C# on .NET 9 runtime."

#   - icon: GL
#     title: "OpenGL Renderer"
#     details: "GPU rendering backend using OpenGL: shaders, buffers, and frame rendering."
---

<div class="feature-row">
  <!-- <img src="/screenshots/rendering.png" class="feature-img"/> -->
  <img src="https://picsum.photos/seed/rendering/480/270" class="feature-img"/>
  <div class="feature-text">
    <h3>OpenGL Rendering</h3>
    <p>Full 3D rendering pipeline built on Silk.NET and OpenGL with custom shaders, asset pipeline and embedded resources.</p>
  </div>
</div>

<div class="feature-row reverse">
  <!-- <img src="/screenshots/world.png" class="feature-img"/> -->
  <img src="https://picsum.photos/seed/world/480/270" class="feature-img"/>
  <div class="feature-text">
    <h3>Voxel World</h3>
    <p>Chunk-based world with AABB physics, collision detection and procedural generation.</p>
  </div>
</div>

<div class="feature-row">
  <!-- <img src="/screenshots/ui.png" class="feature-img"/> -->
  <img src="https://picsum.photos/seed/ui/480/270" class="feature-img"/>
  <div class="feature-text">
    <h3>Audio & UI</h3>
    <p>Integrated AudioManager, full UI system with Canvas, buttons, sliders and localization support.</p>
  </div>
</div>