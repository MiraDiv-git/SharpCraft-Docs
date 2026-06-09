# Початок роботи

Давайте налаштуємо SharpCraft Engine для розробки на вашому комп'ютері.

## Необхідні умови

Перед початком переконайтеся, що у вас встановлено:
- **[.NET SDK 10.0](https://dotnet.microsoft.com)**
- **IDE з підтримкою C#** — [Visual Studio](https://visualstudio.microsoft.com/), [VS Code](https://code.visualstudio.com/), [JetBrains Rider](https://www.jetbrains.com/rider/), [MonoDevelop](https://www.monodevelop.com/), що вам зручніше

Додатково:
- **[Xcode](https://developer.apple.com/xcode/)** — тільки для збірки на macOS.

## Встановлення

Склонуйте репозиторій:

```sh
git clone https://github.com/MiraDiv-git/SharpCraft.git
```

## Збірка

Є кілька способів зібрати проєкт. Оберіть той, що вам більш довподоби.

### Використання publish-профілю в IDE

Найзручніший варіант. Створіть publish-профіль з такими параметрами:
- Self-contained .NET
- Single file output
- Ваша цільова ОС та конфігурація Debug/Release 

### Використання скриптів збірки

Репозиторій містить `build.sh` та `build.bat` для швидкої збірки. Використання: `./build.sh <os> [config]`

**Linux:**
```sh
chmod +x ./build.sh
./build.sh linux-x64 Debug
```

**Windows:**
```cmd
./build.bat win-x64 Debug
```

### Використання .NET CLI безпосередньо

```sh
dotnet publish SharpCraft/SharpCraft.csproj \
  -c Debug \
  -r linux-x64 \
  --self-contained true \
  -p:PublishSingleFile=true \
  -o ./publish
```

::: info Кросплатформова збірка
.NET publish є кросплатформеним — ви можете збирати з будь-якої ОС на будь-яку ОС. Єдине виключення — збірка для macOS, яка потребує інструментів Xcode, доступних лише на macOS.
:::