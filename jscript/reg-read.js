var wsh = WScript.CreateObject("WScript.Shell")
var temp = wsh.RegRead("HKEY_CURRENT_USER\\Environment\\TEMP");
println(temp);

function print(message) {
	WScript.stdout.write(message);
}

function println(message) {
	WScript.stdout.write(message);
	WScript.stdout.write("\n");
}

