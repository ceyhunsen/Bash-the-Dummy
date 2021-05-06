# Walkthrough

**Try to beat game without reading these!**

1. `ls` -> to see what's inside in `/`
2. `cd Dummy` -> Dummy's personal folder
3. `ls` -> to see what's inside Dummy's personal folder
4. `cat Diary1` and `cat Diary2` -> read that he wrote a script for victims to exit
5. `cd /bin` and `ls` -> to see those scripts
6. `file keygen` and `file exitpls` -> see that they are bash scripts
7. `./exitpls` -> see that it doesn't work
8. `sudo ./exitpls` -> see that it still doesn't work
9. `cat exitpls` -> see that it needs a password and password is generated from script `keygen`
10. `./keygen` -> learn password
11. `./exitpls donotusethispls` -> game ended, you won
