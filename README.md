# 🍁 Overwatch label
An overwatch account statistics label manager.

This project was made with the purpose of providing a tool to facilitate the fact of having statistics at hand in real time, being saved in text files (.txt) while the application is running.

# 🍂 How to use
There are 3 ways to run this application.

In all 3 forms there is a common step that you must follow, you will have to modify the **`config.json`** file to fill your profile, you will have to modify the data as indicated in the table (preferably have the public profile to obtain all the statistics).
|Value|Description|
|---|---|
| username | Your [Battle.net](https://battle.net/) username. |
| tag | Your [Battle.net](https://battle.net/) tag. |
| platform | The main platform you play on (pc/xbl/psn/nintendo-switch). |
| region | The game region you normally play in (us/eu/kr/cn/global). |

**Do not move the config.json file from its source folder, doing so will cause problems**

## 🟨 Download the executable
You can download the executable directly from [**this**](https://www.mediafire.com/file/y3p1lozbj7teu1h/Overwatch+label.rar/file) link and thus avoid multiple steps (the 3 executables will be downloaded, you can delete the folders of the non-compatible operating systems).

## 🟧 Compile the application on your own
If you like you can compile the executable for the application yourself, you just have to follow the following steps.

Clone the repository on your desktop (you must install git), then you will execute the following command in the folder that the project is in: `git clone https://github.com/NejireSupremacy/Overwatch-label`).

which will serve as the application's execution environment, 

After having all the files, you should download [**Node.js**](https://nodejs.org/), which will serve to download the correct dependencies, without this you will not be able to execute the application.

You will then simply open the Windows terminal or console of your choice, enter the directory and run the application with the commands in the following order:
- `npm i`
- `npm i pkg`
- `pkg .`

After that an executable will be created in the **`./output`** folder which you will open whenever you need it.

## 🟥 Run the project with node
You must follow all the previous steps, the only thing that changes is the list of commands to execute:

- `npm i`
- `node ./src/index.js`

And that's it, you'll have the application console open and every 10 minutes it will be updating the data (I don't recommend having more than one process open at the same time).

# 🍄 Credits

- [ThisIsAName](https://github.com/NejireSupremacy) (Main developer)
- [Overwatch api server](https://owapi.io/docs) (An Unoffical Overwatch HTTP API)