---
outline: deep
---
# Вступ

SharpCraft — це рушій з відкритим вихідним кодом для створення воксельних ігор у стилі Minecraft, написаний на C# поверх [Silk.NET](https://github.com/dotnet/Silk.NET) та OpenGL.

Рушій бере на себе низькорівневі завдання — рендеринг, фізику, звук, UI, введення, завантаження ресурсів — щоб ви могли зосередитися на розробці гри. До нього входить референсна реалізація ([SharpCraft.Game](https://github.com/MiraDiv-git/SharpCraft/tree/main/SharpCraft.Game)), яку можна використовувати як відправну точку або замінити повністю.

## Чому SharpCraft?

Якщо ви хочете створити воксельну гру на C# без написання рушія з нуля — і без надмірної складності повноцінних рушіїв — SharpCraft дає вам зосереджену, прозору основу, яку ви реально можете читати й змінювати на власний розсуд.

## Вихідний код

Вихідний код завжди доступний в офіційному репозиторії на GitHub:<br>
https://github.com/MiraDiv-git/SharpCraft

## Використані бібліотеки

| Бібліотека | Призначення | Розробник |
|:---|:---|:---|
| [Silk.NET](https://github.com/dotnet/Silk.NET) | Створення контексту OpenGL, керування вікнами, обробка введення з клавіатури та миші — основа рендерингу та платформного шару SharpCraft | .NET Foundation |
| [OpenAL Soft](https://openal-soft.org/) | Крос-платформне відтворення звуку та просторове аудіо, використовується для всього ігрового звуку | OpenAL Soft Community |
| [NVorbis](https://github.com/NVorbis/NVorbis) | Декодер OGG Vorbis на чистому C#, використовується для потокового декодування стиснутих аудіоресурсів без нативних залежностей | ioctlLR |
| [Discord RPC](https://github.com/Lachee/discord-rpc-csharp) | Інтеграція Discord Rich Presence — відображає поточний стан гри та активність у профілі Discord користувача | Lachee |
| [StbImageSharp](https://github.com/StbSharp/StbImageSharp) | Порт stb_image на C#, обробляє завантаження PNG, JPEG та інших форматів зображень для текстур і пайплайну ресурсів | abarim-games |