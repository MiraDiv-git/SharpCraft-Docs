# Архітектура

Архітектура SharpCraft складається з 3 основних проєктів у рішенні, які описані нижче.

## SharpCraft

Це точка входу SharpCraft. Містить лише скрипт `Program.cs`, який запускає все в рушії та грі:

- Встановлює директорію для збереження конфігураційних файлів, наприклад `settings.json`
- Створює екземпляр [GameWindow](/Engine/GameWindow)
- Встановлює сцену за замовчуванням
- Запускає створене вікно

Також включає `soft_oal.dll` та `game_icon.ico` - це залежності для Windows, які копіюються автоматично при збірці.

## SharpCraft.Engine

Це ядро SharpCraft. Надає всі низькорівневі системи, які можуть використовувати як вбудована гра, так і будь-яка гра, побудована на основі SharpCraft:

- Керує [GameWindow](/Engine/GameWindow), [SceneManager](/Engine/SceneManager) та головним ігровим циклом
- Обробляє введення через [InputManager](/Engine/InputManager)
- Відображає інтерфейс через [UIRenderer](/Engine/UIRenderer) та його ієрархію елементів ([Canvas](/Engine/UI/Canvas), [UIElement](/Engine/UI/UIElement), [UIButton](/Engine/UI/UIButton), [UIText](/Engine/UI/UIText), [UISlider](/Engine/UI/UISlider))
- Відтворює звук через [AudioManager](/Engine/AudioManager) (OpenAL + NVorbis)
- Завантажує ресурси через [AssetManager](/Engine/AssetManager) з ZIP-архіву `.scres`
- Керує шейдерами, текстурами, мешами та звуками ([Shader](/Engine/Render/Shader), [Texture](/Engine/Render/Texture), [Mesh](/Engine/Render/Mesh), [Sound](/Engine/Sound))
- Забезпечує локалізацію через JSON-файли локалей, вбудовані в архів ресурсів
- Зберігає налаштування користувача через [UserSettings](/Engine/UserSettings) (`settings.json` на диску)
- Інтегрує Discord Rich Presence через [DiscordManager](/Engine/DiscordManager)
- Ініціалізує всі класи як модулі

> **Примітка:** `SharpCraft.Engine` **не** залежить від `SharpCraft.Game`.

## SharpCraft.Game

Це вбудована воксельна гра, що постачається разом із SharpCraft. Використовує системи рушія для реалізації ігрового процесу:

- Реалізує всі ігрові екрани: [MainMenuScreen](/Game/Screens/MainMenuScreen), [PlayScreen](/Game/Screens/PlayScreen), [OptionsScreen](/Game/Screens/OptionsScreen), [PauseScreen](/Game/Screens/PauseScreen)
- Відображає світ через [WorldScene](/Game/WorldScene), яка надає статичну властивість `Camera`
- Генерує та зберігає воксельний рельєф через [WorldGenerator](/Game/WorldGenerator) — планується розділити на `World` (зберігання блоків) та `WorldGenerator` (процедурна генерація)
- Відображає HUD із прицілом і перемикним [DebugScreen](/Game/DebugScreen) (F3)
- Обробляє AABB-фізику для руху гравця та зіткнень