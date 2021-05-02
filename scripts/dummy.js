function dummy(command)
{
	/*
	 * 0:  help
	 * 1:  date
	 * 2:  run keygen
	 * 3:  pwd
	 * 4:  echo
	 * 5:  echo to file
	 * 6:  cat wrong file
	 * 7:  cat keygen
	 * 8:  cat exitpls
	 * 9:  cat Diary1
	 * 10: cat Diary2
	 * 11: cat password
	 * 12: cat secretpass
	 * 13: cat my_favorite_song
	 * 14: cat my_secret
	 * 15: exitpls
	 * 16: exitpls wrong password
	 * 17: ls
	 * 18: cd bin
	 * 19: cd Dummy
	 * 20: cd xxxSecretxxx
	 * 21: cd /
	 * 22: access denied
	 * 23: wrong command
	 * */
	var image = document.getElementById("dummy_image");
	var text = document.getElementById("dummy_speech");
	switch(command) {
		case 0: {
			image.src = "/images/dummy_crying.png";
			text.innerText = "Nooo! Why do you need help? We are gonna have fun here. " +
			"You don't need help or anyone other than me!";
			break;
		}
		case 1: {
			image.src = "";
		}
	}
}
