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
		case "./keygen": {
			if (window.path != "/bin/") {
				return "bash: cd: " + s[1] + ": No such file or directory";
			}
		}
		case "../bin/keygen":
		case "/bin/keygen":
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
			switch (window.path) {
				case "/bin/": {
					switch (s[1]) {
						case "keygen":
							return "#!/bin/bash<br />echo donotusethiskeypls";
						case "exitpls":
							return "#!/bin/bash<br />" +
								   "if [ $1 = 'donotusethiskeypls' ] then" +
								   "<br />exit<br />fi";
						default:
							return "cat: " + s[1] + ": No such file or directory";
					}
				}
				case "/Dummy/": {
					switch (s[1]) {
						case "Diary1": {
							return "I am so aloneeee!!! Ugh! I wish that " +
							       "someone logs in to my computer so that " +
							       "I can talk with them.";
						}
						case "Diary2": {
							return "Well... If someone falls in to my " +
							       "computer somehow, they are not going to " +
							       "get out that easily. Because I modified " +
							       "my bash so that they can't escape. " +
							       "HAHAHA! They have to find my special " +
							       "script to get out. But they will never" +
							       "find it and we will talk forever. HAHAHA!";
						}
						case "password": {
							return "My locker password is: iamthebest. " +
							       "It's really secure isn't it?"
						}
						default: {
							return "cat: " + s[1] + ": No such file or directory";
						}
					}
				}
				case "/xxxSecretxxx/": {
					switch (s[1]) {
						case "secretpass": {
							return "extremelysecretpass";
						}
						case "my_favorite_song": {
							return "I Love My Friends";
						}
						case "my_secret": {
							return "OMG I LOVE ACTING! I will be an actor " +
							       "when I have so many friends!";
						}
					}
				}
			}
		}
		case "./exitpls": {
			if (window.path != "/bin/") {
				return "bash: cd: " + s[1] + ": No such file or directory";
			}
		}
		case "../bin/exitpls":
		case "/bin/exitpls":
		case "exitpls": {
			if (s[1] == "donotusethiskeypls") {
				return "Well done!";
			}
			return "";
		}
		case "ls": {
			switch (window.path) {
				case "/":
					return "bin Dummy xxxSecretxxx";
				case "/bin/":
					return "keygen exitpls";
				case "/Dummy/":
					return "Diary1 Diary2 password";
				case "/xxxSecretxxx/":
					return "secretpass my_favorite_song my_secret";
			}
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
					return "";
				}
				case "/": {
					window.path = "/";
					return "";
				}
				case "bin": {
					if (window.path == "/") {
						window.path = "/bin/";
						return "";
					}
					return "bash: cd: " + s[1] + ": No such file or directory";
				}
				case "Dummy": {
					if (window.path == "/") {
						window.path = "/Dummy/";
						return "";
					}
					return "bash: cd: " + s[1] + ": No such file or directory";
				}
				case "xxxSecretxxx": {
					if (window.path == "/") {
						window.path = "/xxxSecretxxx/";
						return "";
					}
					return "bash: cd: " + s[1] + ": No such file or directory";
				}
				case "..": {
					window.path = "/";
					return "";
				}
				case ".": {
					return "";
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
