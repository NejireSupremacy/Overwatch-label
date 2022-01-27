# 🍁 Overwatch label
An overwatch account statistics label manager.

This project was made with the purpose of providing a tool to facilitate the fact of having statistics at hand in real time, being saved in text files (.txt) while the application is running.

# 🍂 How to use
As a first step you should download [**Node.js**](https://nodejs.org/), which will serve as the application's execution environment, without this you will not be able to execute the application.

Then clone the repository on your desktop, so you will have access to the entire application (`git clone https://github.com/NejireSupremacy/Overwatch-label`).

After having all the files, you will have to modify the **`config.json`** file to fill your profile, you will have to modify the data as indicated in the table (preferably have the public profile to obtain all the statistics).
|Value|Description|
|---|---|
| username | Your [Battle.net](https://battle.net/) username. |
| tag | Your [Battle.net](https://battle.net/) tag. |
| platform | The main platform you play on (pc/xbl/psn/nintendo-switch). |
| region | The game region you normally play in (us/eu/kr/cn/global). |

Then you will simply open the Windows terminal or the console of your choice, enter the directory and run the application with the commands `npm i` (just the first time) and then `node index.js`.

And that's it, you'll have the application console open and every 10 minutes it will be updating the data (I don't recommend having more than one process open at the same time).

# 🍄 Credits

- [ThisIsAName](https://github.com/NejireSupremacy) (Main developer).
- [Overwatch api server](https://owapi.io/docs) (An Unoffical Overwatch HTTP API)