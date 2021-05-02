function parse(s)
{
	var ans = ""
	switch (s) {
		case "help": {
			return "You called for help... But nobody came.";
		}
		case "date": {
			return Date();
		}
	}
	var ss = s.split(" ");
	if (ss[0] == "echo") {
		for (var i = 1; i < ss.length; i++)
			ans += ss[i] + " ";
		return ans;
	}
	return "bash: " + s + ": command not found...";
}
