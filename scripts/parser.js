function parse(s)
{
	s = s.split(" ");
	var ans = "";

	// Available commands
	switch (s[0]) {
		case "help": {
			dummy(0);
			return "You called for help... But nobody came.";
		}
		case "date": {
			dummy(1);
			return Date();
		}
		case "./keygen": {
			if (window.path != "/bin/") {
				dummy(22);
				return "bash: cd: " + s[1] + ": No such file or directory";
			}
		}
		case "../bin/keygen":
		case "/bin/keygen":
		case "keygen": {
			dummy(2);
			return "donotusethiskeypls";
		}
		case "pwd": {
			dummy(3);
			return window.path;
		}
		case "echo": {
			dummy(4);
			if (s[1] == "$PATH") {
				return "/bin";
			}
			for (var i = 1; i < s.length; i++) {
				dummy(5);
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
						case "keygen": {
							dummy(7)
							return "#!/bin/bash<br />echo donotusethiskeypls";
						}
						case "exitpls": {
							dummy(8);
							return "#!/bin/bash<br />" +
								   "if [ $1 = 'donotusethiskeypls' ] then" +
								   "<br />exit<br />fi";
						}
						default: {
							dummy(6);
							return "cat: " + s[1] + ": No such file or directory";
						}
					}
				}
				case "/Dummy/": {
					switch (s[1]) {
						case "Diary1": {
							dummy(9);
							return "I am so aloneeee!!! Ugh! I wish that " +
							       "someone logs in to my computer so that " +
							       "I can talk with them.";
						}
						case "Diary2": {
							dummy(10);
							return "Well... If someone falls in to my " +
							       "computer somehow, they are not going to " +
							       "get out that easily. Because I modified " +
							       "my bash so that they can't escape. " +
							       "HAHAHA! They have to find my special " +
							       "script to get out. But they will never" +
							       "find it and we will talk forever. HAHAHA!";
						}
						case "password": {
							dummy(11);
							return "My locker password is: iamthebest. " +
							       "It's really secure isn't it?"
						}
						default: {
							dummy(6);
							return "cat: " + s[1] + ": No such file or directory";
						}
					}
				}
				case "/xxxSecretxxx/": {
					switch (s[1]) {
						case "secretpass": {
							dummy(12);
							return "extremelysecretpass";
						}
						case "my_favorite_song": {
							dummy(13);
							return "I Love My Friends";
						}
						case "my_secret": {
							dummy(14);
							return "OMG I LOVE ACTING! I will be an actor " +
							       "when I have so many friends!";
						}
						default: {
							dummy(6);
							return "cat: " + s[1] + ": No such file or directory";
						}
					}
				}
			}
		}
		case "./exitpls": {
			if (window.path != "/bin/") {
				dummy(22);
				return "bash: cd: " + s[1] + ": No such file or directory";
			}
		}
		case "../bin/exitpls":
		case "/bin/exitpls":
		case "exitpls": {
			if (s[1] == "donotusethiskeypls") {
				dummy(15);
				return "";
			} else {
				dummy(16);
			}
			return "";
		}
		case "ls": {
			dummy(17);
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
				case "bin": {
					if (window.path != "/") {
						return "bash: cd: " + s[1] + ": No such file or directory";
					}
				}
				case "/bin/":
				case "/bin": {
					dummy(18);
					window.path = "/bin/";
					return "";
				}
				case "Dummy": {
					if (window.path != "/") {
						return "bash: cd: " + s[1] + ": No such file or directory";
					}
				}
				case "/Dummy":
				case "/Dummy/": {
					dummy(19);
					window.path = "/Dummy/";
					return "";
				}
				case "xxxSecretxxx": {
					if (window.path != "/") {
						return "bash: cd: " + s[1] + ": No such file or directory";
					}
				}
				case "/xxxSecretxxx":
				case "/xxxSecretxxx/": {
					dummy(20);
					window.path = "/xxxSecretxxx/";
					return "";
				}
				case "/":
				case "..": {
					dummy(21);
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
			dummy(22);
			return "bash: " + s[0] + ": Permission denied";
		}
	}
	dummy(23);
	return "bash: " + s[0] + ": command not found...";
}
