# Архітектура

Архітектура SharpCraft складається з 3 основних проєктів у рішенні, які описані нижче.

## SharpCraft

Це точка входу SharpCraft. Містить лише скрипт `Program.cs`, який запускає все в рушії та грі:

- Встановлює директорію для збереження конфігураційних файлів, наприклад `settings.json`
- Створює екземпляр [GameWindow](/ua/Engine/Classes/GameWindow.md)
- Встановлює сцену за замовчуванням
- Запускає створене вікно

Також включає `soft_oal.dll` та `game_icon.ico` - це залежності для Windows, які копіюються автоматично при збірці.

## SharpCraft.Engine

Це ядро SharpCraft. Надає всі низькорівневі системи, які можуть використовувати як вбудована гра, так і будь-яка гра, побудована на основі SharpCraft:

- Керує [GameWindow](/ua/Engine/Classes/class-list.md), [SceneManager](/ua/Engine/Classes/class-list.md) та головним ігровим циклом
- Обробляє введення через [InputManager](/ua/Engine/Classes/class-list.md)
- Відображає інтерфейс через [UIRenderer](/ua/Engine/Classes/class-list.md) та його ієрархію елементів ([Canvas](/ua/Engine/Classes/class-list.md), [UIElement](/ua/Engine/Classes/class-list.md), [UIButton](/ua/Engine/Classes/class-list.md), [UIText](/ua/Engine/Classes/class-list.md), [UISlider](/ua/Engine/Classes/class-list.md))
- Відтворює звук через [AudioManager](/ua/Engine/Classes/class-list.md) (OpenAL + NVorbis)
- Завантажує ресурси через [AssetManager](/ua/Engine/Classes/class-list.md) з ZIP-архіву `.scres`
- Керує шейдерами, текстурами, мешами та звуками ([Shader](/ua/Engine/Classes/class-list.md), [Texture](/ua/Engine/Classes/class-list.md), [Mesh](/ua/Engine/Classes/class-list.md), [Sound](/ua/Engine/Classes/class-list.md))
- Забезпечує локалізацію через JSON-файли локалей, вбудовані в архів ресурсів
- Зберігає налаштування користувача через [UserSettings](/ua/Engine/Classes/class-list.md) (`settings.json` на диску)
- Інтегрує Discord Rich Presence через [DiscordManager](/ua/Engine/Classes/class-list.md)
- Ініціалізує всі класи як модулі

> **Примітка:** `SharpCraft.Engine` **не** залежить від `SharpCraft.Game`.

## SharpCraft.Game

Це вбудована воксельна гра, що постачається разом із SharpCraft. Використовує системи рушія для реалізації ігрового процесу:

- Реалізує всі ігрові екрани: [MainMenuScreen](/ua/Engine/Classes/class-list.md), [PlayScreen](/ua/Engine/Classes/class-list.md), [OptionsScreen](/ua/Engine/Classes/class-list.md), [PauseScreen](/ua/Engine/Classes/class-list.md)
- Відображає світ через [WorldScene](/ua/Engine/Classes/class-list.md), яка надає статичну властивість `Camera`
- Генерує та зберігає воксельний рельєф через [WorldGenerator](/ua/Engine/Classes/class-list.md) — планується розділити на `World` (зберігання блоків) та `WorldGenerator` (процедурна генерація)
- Відображає HUD із прицілом і перемикним [DebugScreen](/ua/Engine/Classes/class-list.md) (F3)
- Обробляє AABB-фізику для руху гравця та зіткнень