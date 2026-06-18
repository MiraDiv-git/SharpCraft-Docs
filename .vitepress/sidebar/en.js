export default [
  {
    text: 'About & Setup',
    items: [
      { text: 'Introduction', link: '/AboutSetup/introduction' },
      { text: 'License', link: '/AboutSetup/license' },
      // { text: 'Contributing', link: '/AboutSetup/contributing' },
      { text: 'Getting Started', link: '/AboutSetup/getting-started' }
    ]
  },
  {
    text: "Learning the Engine",
    items: [
      { text: 'Architecture', link: '/Engine/architecture' },
      { text: "Configuration", link: "/Engine/Configuration" },
      
      {
        text: "Classes",
        collapsed: true,
        link: "/Engine/Classes/class-list",
        items: [
          {
            text: "Engine Root",
            collapsed: true,
            items: [
              { text: "DiscordManager", link: "/Engine/Classes/DiscordManager" },
              { text: "GameWindow", link: "/Engine/Classes/GameWindow" },
              { text: "GlobalUsings", link: "/Engine/Classes/GlobalUsings" },
              { text: "Localization", link: "/Engine/Classes/Localization" },
              { text: "UserSettings", link: "/Engine/Classes/UserSettings" },
            ]
          },
          {
            text: "Assets",
            collapsed: true,
            items: [
              { text: "AssetManager", link: "/Engine/Classes/AssetManager" },
            ]
          },
          {
            text: "Audio",
            collapsed: true,
            items: [
              { text: "AudioManager", link: "/Engine/Classes/AudioManager" },
              { text: "Sound", link: "/Engine/Classes/Sound" },
            ]
          },
          {
            text: "Input",
            collapsed: true,
            items: [
              { text: "CommandHandler", link: "/Engine/Classes/CommandHandler" },
              { text: "InputManager", link: "/Engine/Classes/InputManager" },
              { text: "KeyBind", link: "/Engine/Classes/KeyBind" },
            ]
          },
          {
            text: "Physics",
            collapsed: true,
            items: [
              { text: "AABB", link: "/Engine/Classes/AABB" },
              { text: "Chunk", link: "/Engine/Classes/Chunk" },
              { text: "Player", link: "/Engine/Classes/Player" },
              { text: "Raycast", link: "/Engine/Classes/Raycast" },
              { text: "Time", link: "/Engine/Classes/Time" },
            ]
          },
          {
            text: "Rendering",
            collapsed: true,
            items: [
              { text: "Camera", link: "/Engine/Classes/Camera" },
              { text: "ColorTranslator", link: "/Engine/Classes/ColorTranslator" },
              { text: "Mesh", link: "/Engine/Classes/Mesh" },
              { text: "Shader", link: "/Engine/Classes/Shader" },
              { text: "Texture", link: "/Engine/Classes/Texture" },
              { text: "WindowIcon", link: "/Engine/Classes/WindowIcon" },
              { text: "BlockOutlineRenderer", link: "/Engine/Classes/BlockOutlineRenderer" },
            ]
          },
          {
            text: "Scene",
            collapsed: true,
            items: [
              { text: "IScene", link: "/Engine/Classes/IScene" },
              { text: "SceneManager", link: "/Engine/Classes/SceneManager" },
            ]
          },
          {
            text: "UI",
            collapsed: true,
            items: [
              { text: "Anchor", link: "/Engine/Classes/Anchor" },
              { text: "Canvas", link: "/Engine/Classes/Canvas" },
              { text: "UIElement", link: "/Engine/Classes/UIElement" },
              { text: "UIRenderer", link: "/Engine/Classes/UIRenderer" },
              {
                text: "Elements",
                collapsed: true,
                items: [
                  { text: "UIAnimation", link: "/Engine/Classes/UIAnimation" },
                  { text: "UIButton", link: "/Engine/Classes/UIButton" },
                  { text: "UIHint", link: "/Engine/Classes/UIHint" },
                  { text: "UIImage", link: "/Engine/Classes/UIImage" },
                  { text: "UISlider", link: "/Engine/Classes/UISlider" },
                  { text: "UIText", link: "/Engine/Classes/UIText" },
                  { text: "UITextField", link: "/Engine/Classes/UITextField" },
                ]
              }
            ]
          },
          {
            text: "World",
            collapsed: true,
            items: [
              { text: "GameWorld", link: "/Engine/Classes/GameWorld" },
              { text: "WorldGenerator", link: "/Engine/Classes/WorldGenerator" },
              {
                text: "Blocks",
                collapsed: true,
                items: [
                  { text: "Block", link: "/Engine/Classes/Block" },
                  { text: "BlockMeshes", link: "/Engine/Classes/BlockMeshes" },
                ]
              }
            ]
          },
        ]
      }
    ]
  },
  {
    text: "Creating a Game",
    items: [
      { text: "Project Hierarchy", link: "/Game/minimal" },
      { text: "Hello, World!", link: "/Game/HelloWorld" },
    ]
  }
]