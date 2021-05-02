function parse(s)
{
	s = s.split(" ");
	var ans = "";

	// Available commands
	switch (s[0]) {
		case "help": {
			return "You called for help... But nobody came.";
		}
		case "date": {
			return Date();
		}
		case "keygen": {
			return "donotusethiskeypls";
		}
		case "pwd": {
			return window.path;
		}
		case "echo": {
			if (s[1] == "$PATH") {
				return "/bin";
			}
			for (var i = 1; i < s.length; i++) {
				if (s[i] == ">" || s[i] == ">>") {
					return "bash: " + s[i + 1] + ": Permission denied";
				} else {
					ans += s[i] + " ";
				}
			}
			return ans;
		}
		case "cat": {

		}
		case "exitpls": {

		}
		case "cd": {
			switch (s[1]) {
				case "/bin/":
				case "/bin": {
					window.path = "/bin/";
					return "";
				}
				case "/Dummy":
				case "/Dummy/": {
					window.path = "/Dummy/";
					return "";
				}
				case "/xxxSecretxxx":
				case "/xxxSecretxxx/": {
					window.path = "/xxxSecretxxx/";
				}
				case "bin":
				case "Dummy":
				case "xxxSecretxx":
				case "..":
				case ".": {
					return "Relative file paths are disabled.";
					// I am too lazy to implement that
				}
				default: {
					return "bash: cd: " + s[1] + ": No such file or directory";
				}
			}
		}
		case "exit":
		case "sudo":
		case "mkdir":
		case "touch": {
			return "bash: " + s[0] + ": Permission denied";
		}
	}

	return "bash: " + s[0] + ": command not found...";
}
