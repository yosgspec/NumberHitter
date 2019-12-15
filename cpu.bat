@echo off
cd cpu.cs
if exist bin\Release\netcoreapp3.0\cpu.cs.dll (
	dotnet bin\Release\netcoreapp3.0\cpu.cs.dll
) else (
	dotnet run -c Release
)
