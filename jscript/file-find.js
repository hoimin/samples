var dirs = getDirs("C:\\Windows\\System32");
for (var i in dirs) {
	println(dirs[i]);
}
var files = getFiles("C:\\Windows\\System32");
for (var i in files) {
	println(files[i]);
}

/**
* 再帰的に、指定したディレクトリ内の全ディリクトリの名前を配列にして返します。
* @param path ディレクトリ
* @return ディレクトリ名の配列
*/
function getDirs(path) {
	var fso = WScript.CreateObject("Scripting.FileSystemObject")
	var dirs = new Array();

	function sub(path) {
		var d = fso.GetFolder(path);
		for (var dir = new Enumerator(d.SubFolders);!dir.atEnd();dir.moveNext()) {
			dirs.push(dir.item().Path);
		}
		for (var dir = new Enumerator(d.SubFolders);!dir.atEnd();dir.moveNext()) {
			sub(dir.item().Path);
		}
	}

	dirs.push(path);
	sub(path);
	return dirs;
}

/**
* 再帰的に、指定したディレクトリ内の全ファイルの名前を配列にして返します。
* @param path ディレクトリ
* @return ファイル名の配列
*/
function getFiles(path) {
	var fso = WScript.CreateObject("Scripting.FileSystemObject")
	var files = new Array();

	function sub(path) {
		var d = fso.GetFolder(path);
		for (var dir = new Enumerator(d.SubFolders);!dir.atEnd();dir.moveNext()) {
			sub(dir.item().Path);
		}
		for (var f = new Enumerator(d.Files);!f.atEnd();f.moveNext()) {
			files.push(f.item().Path);
		}
	}

	sub(path);
	return files;
}

function print(message) {
	WScript.stdout.write(message);
}

function println(message) {
	WScript.stdout.write(message);
	WScript.stdout.write("\n");
}

