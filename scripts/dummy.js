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
	 * 24: uname
	 * 25: file
	 * */
	var image = document.getElementById("dummy_image");
	var text = document.getElementById("dummy_speech");
	switch(command) {
		case 0: {
			image.src = "/images/dummy_crying.png";
			text.innerText = "Nooo! Why do you need help? We are gonna have fun here. " +
			"You don't need any help or anyone other than me!";
			return;
		}
		case 1: {
			image.src = "/images/dummy_neutral.png";
			text.innerText = "What a nice day, huh?";
			return;
		}
		case 2: {
			image.src = "/images/dummy_not_happy.png";
			text.innerText = "This is outrageous! Stop it right now!";
			return;
		}
		case 3: {
			image.src = "/images/dummy_confused.png";
			text.innerText = "What are you going to do with that information?";
			return;
		}
		case 4: {
			image.src = "/images/dummy_winking.png";
			text.innerText = "Someone is trying to learn bash, I think.";
			return;
		}
		case 5: {
			image.src = "/images/dummy_laughing.png";
			text.innerText = "Don't go so fast. You can't modify my computer!";
			return;
		}
		case 6: {
			image.src = "/images/dummy_not_happy.png";
			text.innerText = "Do not even think about reading my files.";
			return;
		}
		case 7: {
			image.src = "/images/dummy_crying.png";
			text.innerText = "Hey, please stop!";
			return;
		}
		case 8: {
			image.src = "/images/dummy_not_happy.png";
			text.innerText = "Wait! Do not read it! I'm begging you!";
			return;
		}
		case 9: {
			image.src = "/images/dummy_crying.png";
			text.innerText = "Stop reading my diary!";
			return;
		}
		case 10: {
			image.src = "/images/dummy_crying.png";
			text.innerText = "You are the worst person I have ever met!";
			return;
		}
		case 11: {
			image.src = "/images/dummy_happy.png";
			text.innerText = "Nobody will be able to open my locker. " +
			"Wait a minute! You wouldn't open it too, right?";
			return;
		}
		case 12: {
			image.src = "/images/dummy_happy.png";
			text.innerText = "It's for my bank account.";
			return;
		}
		case 13: {
			image.src = "/images/dummy_happy.png";
			text.innerText = "I love every friend of mine! " +
			"And I have so many friends. " +
			"Let me count: 1, ... I guess I only have one friend. " +
			"And that is you! We are best friends, right? Right?";
			return;
		}
		case 14: {
			document.getElementById("music").pause();
			document.getElementById("dummy_singing").play();
			image.src = "/images/dummy_chilling.png";
			text.innerText = "I am very good at singing too. Let me sing: " +
			"Woaahh woooaaaahh, wooooooooaaaaahhh, WOOOOOOAAAAAAHHHHH! " +
			"How was it?";
			return;
		}
		case 15: {
			document.getElementById('music').pause();
			image.src = "/images/dummy_neutral.png";
			text.innerText = "Welp. I guess you really are a good hacker. " +
			"Well done and goodbye friend!";
			window.open("https://youtu.be/XMEXPkPmmq0", "_blank");
			return;
		}
		case 16: {
			image.src = "/images/dummy_laughing.png";
			text.innerText = "HAH! You think you can escape from me?!";
			return;
		}
		case 17: {
			image.src = "/images/dummy_not_happy.png";
			text.innerText = "Stop messing around!";
			return;
		}
		case 18: {
			image.src = "/images/dummy_not_happy.png";
			text.innerText = "These things are not for you!";
			return;
		}
		case 19: {
			image.src = "/images/dummy_crying.png";
			text.innerText = "Don't read my diaries, please!";
			return;
		}
		case 20: {
			image.src = "/images/dummy_confused.png";
			text.innerText = "Wait, that directory was hidden! How did you " +
			"get in?";
			return;
		}
		case 21: {
			image.src = "/images/dummy_neutral.png";
			text.innerText = "Yeah! Stay right there and do not go anywhere " +
			"else.";
			return;
		}
		case 22: {
			image.src = "/images/dummy_laughing.png";
			text.innerText = "HAH! You think you are that smart? Think again.";
			return;
		}
		case 23: {
			image.src = "/images/dummy_confused.png";
			text.innerText = "What? God's sake, this is heavily modified " +
			"version of bash. And it's made by myself, The Great Dummy! " +
			"If you don't know how to use bash, that's a pity. We will be " +
			"stuck here forever! HAHAHA! ---Hey! Ceyhun here, creator of " +
			"this game. Do not give up now! Check Github page below for " +
			"help. Stay determined.---";
			return;
		}
		case 24: {
			image.src = "/images/dummy_neutral.png";
			text.innerText = "Yeah, that's right! It's the RISC-V architecture.";
			return;
		}
		case 25: {
			image.src = "/images/dummy_not_happy.png";
			text.innerText = "That file's type is: NONE OF YOUR GODDAMN BUSINESS!";
			return;
		}
		default: {
			image.src = "/images/dummy_neutral.png";
			text.innerText = "I have no idea how you done that. That command " +
			"is beyond my understanding.";
			return;
		}
	}
}
