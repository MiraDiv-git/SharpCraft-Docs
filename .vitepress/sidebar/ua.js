export default [
  {
    text: 'Про SharpCraft',
    items: [
      { text: 'Вступ', link: '/ua/AboutSetup/introduction' },
      { text: 'Ліцензія', link: '/ua/AboutSetup/license' },
      // { text: 'Contributing', link: '/AboutSetup/contributing' },
      { text: 'Початок роботи', link: '/ua/AboutSetup/getting-started' },
    ]
  },
  {
    text: "Робота з рушієм",
    items: [
      { text: 'Архітектура', link: '/ua/Engine/architecture' },
      { text: "Конфігурація", link: "/ua/Engine/Configuration" },
      
      {
        text: "Класи",
        collapsed: true,
        link: "/ua/Engine/Classes/class-list",
        items: [
          {
            text: "Корінь Engine",
            collapsed: true,
            items: [
              { text: "DiscordManager", link: "/ua/Engine/Classes/DiscordManager" },
              { text: "GameWindow", link: "/ua/Engine/Classes/GameWindow" },
              { text: "GlobalUsings", link: "/ua/Engine/Classes/GlobalUsings" },
              { text: "Localization", link: "/ua/Engine/Classes/Localization" },
              { text: "UserSettings", link: "/ua/Engine/Classes/UserSettings" },
            ]
          },
          {
            text: "Assets",
            collapsed: true,
            items: [
              { text: "AssetManager", link: "/ua/Engine/Classes/AssetManager" },
            ]
          },
          {
            text: "Audio",
            collapsed: true,
            items: [
              { text: "AudioManager", link: "/ua/Engine/Classes/AudioManager" },
              { text: "Sound", link: "/ua/Engine/Classes/Sound" },
            ]
          },
          {
            text: "Input",
            collapsed: true,
            items: [
              { text: "CommandHandler", link: "/ua/Engine/Classes/CommandHandler" },
              { text: "InputManager", link: "/ua/Engine/Classes/InputManager" },
              { text: "KeyBind", link: "/ua/Engine/Classes/KeyBind" },
            ]
          },
          {
            text: "Physics",
            collapsed: true,
            items: [
              { text: "AABB", link: "/ua/Engine/Classes/AABB" },
              { text: "Chunk", link: "/ua/Engine/Classes/Chunk" },
              { text: "Player", link: "/ua/Engine/Classes/Player" },
              { text: "Raycast", link: "/ua/Engine/Classes/Raycast" },
              { text: "Time", link: "/ua/Engine/Classes/Time" },
            ]
          },
          {
            text: "Rendering",
            collapsed: true,
            items: [
              { text: "Camera", link: "/ua/Engine/Classes/Camera" },
              { text: "ColorTranslator", link: "/ua/Engine/Classes/ColorTranslator" },
              { text: "Mesh", link: "/ua/Engine/Classes/Mesh" },
              { text: "Shader", link: "/ua/Engine/Classes/Shader" },
              { text: "Texture", link: "/ua/Engine/Classes/Texture" },
              { text: "WindowIcon", link: "/ua/Engine/Classes/WindowIcon" },
              { text: "BlockOutlineRenderer", link: "/ua/Engine/Classes/BlockOutlineRenderer" },
            ]
          },
          {
            text: "Scene",
            collapsed: true,
            items: [
              { text: "IScene", link: "/ua/Engine/Classes/IScene" },
              { text: "SceneManager", link: "/ua/Engine/Classes/SceneManager" },
            ]
          },
          {
            text: "UI",
            collapsed: true,
            items: [
              { text: "Anchor", link: "/ua/Engine/Classes/Anchor" },
              { text: "Canvas", link: "/ua/Engine/Classes/Canvas" },
              { text: "UIElement", link: "/ua/Engine/Classes/UIElement" },
              { text: "UIRenderer", link: "/ua/Engine/Classes/UIRenderer" },
              {
                text: "Elements",
                collapsed: true,
                items: [
                  { text: "UIAnimation", link: "/ua/Engine/Classes/UIAnimation" },
                  { text: "UIButton", link: "/ua/Engine/Classes/UIButton" },
                  { text: "UIHint", link: "/ua/Engine/Classes/UIHint" },
                  { text: "UIImage", link: "/ua/Engine/Classes/UIImage" },
                  { text: "UISlider", link: "/ua/Engine/Classes/UISlider" },
                  { text: "UIText", link: "/ua/Engine/Classes/UIText" },
                  { text: "UITextField", link: "/ua/Engine/Classes/UITextField" },
                ]
              }
            ]
          },
          {
            text: "World",
            collapsed: true,
            items: [
              { text: "GameWorld", link: "/ua/Engine/Classes/GameWorld" },
              { text: "WorldGenerator", link: "/ua/Engine/Classes/WorldGenerator" },
              {
                text: "Blocks",
                collapsed: true,
                items: [
                  { text: "Block", link: "/ua/Engine/Classes/Block" },
                  { text: "BlockMeshes", link: "/ua/Engine/Classes/BlockMeshes" },
                ]
              }
            ]
          },
        ]
      }
    ]
  },
  {
    text: "Створення гри",
    items: [
      { text: "Ієрархія проєкту", link: "/ua/Game/minimal" },
      { text: "Hello, World!", link: "/ua/Game/HelloWorld" },
    ]
  }
]