# UIButton

```C#
var rect = Canvas.AddElement<UIButton>();
rect.Position = new Vector2(0, 0);
rect.Size = MainMenuScene.defaultButtonSize;
rect.ButtonTexture = _buttonTexture;
rect.HoverTexture = _buttonHoverTexture;
rect.ButtonColor = Color.White;
rect.HoverColor = Color.White;
rect.Anchor = Anchor.MiddleCenter;
rect.OnClick += () =>
{
    AudioManager.Play(_clickSound);
    Console.WriteLine("[INFO] Changing screen to Play Screen");
    MainMenuScene.SwitchTo(PlayScreen.Canvas);
};
```