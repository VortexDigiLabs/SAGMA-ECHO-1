Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "C:\Users\PC 1\Desktop\ECHO"
WshShell.Run "ECHO.bat", 0, False
