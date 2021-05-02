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
		case "exit": {
			return "Hah! You think you can escape that easily?";
		}
		case "keygen": {
			return "donotusethiskeypls";
		}
		case "pwd": {
			return window.path;
		}
		case "sudo": {
			return "bash: sudo: You can't be root user if you are not " +
			       "the Magnificent Dummy himself!";
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
					return "You can't use relative file paths. " +
					       "Because I want you to suffer! HAHAHA!";
					// Actually I am lazy to implement that
				}
				default: {
					return "bash: cd: " + s[1] + ": No such file or directory";
				}
			}
		}
		case "mkdir":
		case "touch": {
			return "bash: " + s[0] + ": Permission denied";
		}
	}

	return "bash: " + s[0] + ": command not found...";
}
