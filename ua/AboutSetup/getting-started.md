# Початок роботи

Давайте налаштуємо SharpCraft Engine для розробки на вашому комп'ютері!

::: tip Підтримувані платформи
Станом на сьогодні, SharpCraft - рушій для ПК, доступний на Windows, Linux та macOS.
:::

## Необхідні умови

Перед початком переконайтеся, що у вас встановлено:
- **[.NET SDK 10.0](https://dotnet.microsoft.com)**
- **IDE з підтримкою C#** — [Visual Studio](https://visualstudio.microsoft.com/), [VS Code](https://code.visualstudio.com/), [JetBrains Rider](https://www.jetbrains.com/rider/), [MonoDevelop](https://www.monodevelop.com/), що вам зручніше

## Встановлення

Клонуйте репозиторій:

```sh
git clone https://github.com/MiraDiv-git/SharpCraft.git
```

## Збірка

Є кілька способів зібрати проєкт. Оберіть той, що вам до вподоби.

### Використання publish-профілю в IDE

Найзручніший варіант. Створіть publish-профіль з такими параметрами:
- Self-contained .NET
- Single file output
- Ваша цільова ОС та конфігурація Debug/Release 

### Використання скриптів збірки

Репозиторій містить `build.sh` та `build.bat` для швидкої збірки. Використання: `./build.sh <os> [config]`

**Наприклад:**
```sh
chmod +x ./build.sh
./build.sh linux-x64 Debug
```

### Використання .NET CLI безпосередньо

Ви можете використати подібні publish параметри через `.NET CLI`, для повного контролю над збіркою.

```sh
dotnet publish SharpCraft/SharpCraft.csproj \
  -c Debug \
  -r linux-x64 \
  --self-contained true \
  -p:PublishSingleFile=true \
  -o ./publish
```