# **ALVIS** Discord bot, by PacketCloud™
*Version: 1.7.5*
## Setting Up The Bot
Before the bot will run, you must first set up a few values in the config files:
### Requirements:
You must have a Discord bot token and Google API.AI key for an agent with proper Intents and Entities.
Please contact us if you need further information about the API.AI agent [https://packetcloud.com/about].

### Tokens:
Enter your Discord bot token and API.AI agent key into the config JSON file (./config/config.json).

### User Permissions:
In the permissions JSON file (./config/permissions.json), add the names of the roles on your Discord server(s) that you want associated to bot permissions.
People with manager_role will be allowed to use all bot commands, admin_role grants administrative commands.
Default_role is the name of the role you want the bot to assign all new users. This one is optional.

## Bot Commands
### Public Commands
**About**\n
Displays bot information.
`!about`

**Flip**  
Flips a coin.  
`!flip`  

**Help**  
Displays list of available commands.  
`!help`  

**Play Music**  
Plays specific or random song matching provided search criteria.  
*'?' lists songs matching search criteria.*  
`!playmusic [song_name|[-|&]tag [...]|? [[-|&]tag [...]]]`  

**Play Sound**  
Plays specific or random sound matching provided search criteria.  
*'?' lists sounds matching search criteria.*  
`!playsound [sound_name|[-|&]tag [...]|? [[-|&]tag [...]]`  

**Play Stream**  
Plays audio from the provided YouTube video.  
`!playstream <Youtube_URL>`  

**R6 Stats**  
Generates a 'Rainbow Six Siege' Player Action Report.  
`!r6stats <username> [platform]`  

**Roll**  
Rolls a die.  
`!roll`  

**Song Info**  
Displays information about a song.  
`!songinfo <song_name>`  

**Sound Info**  
Displays information about a sound.  
 `!soundinfo <sound_name>`  

**Stop**  
Stops audio playback on voice channel.  
 `!stop`  
  
### Admin Commands
**Add Song**  
Adds any attached audio files to the local music library.  
*Adding '-f' tag will overwrite existing songs with same name.*  
`!addsong [-f]`  

**Add Sound**  
Adds any attached audio files to the local sounds library.  
*Adding '-f' tag will overwrite existing sounds with same name.*  
`!addsound [-f]`  

**Remove Song**  
Deletes a song from the local library structure. Does not delete the file from disk.  
`!removesong <song_name>`  

**Remove Sound**  
Deletes a sound from the local library structure. Does not delete the file from disk.  
`!removesound <sound_name>`  

**Set User Sound**  
Assigns (or removes) a sound to a user. This sound plays when the user joins a populated voice channel.  
`!setusersound <@mention> [sound_name]`  
 
### Manager Commands
**Add All Music**  
Attempts to add all files in ./music folder to the local library under their filenames.  
*Does not overwrite.*  
`!addallmusic`  

**Add All Sounds**  
Attempts to add all files in ./sounds folder to the local library under their filenames.  
*Does not overwrite.*  
`!addallsounds`  

**Purge Music**  
Removes all songs from the local library.  
`!purgemusic <confirmation>`  

**Purge Sounds**  
Removes all sounds from the local library.  
`!purgesounds <confirmation>`  

*Note:
To run commands, enter them into any text channel the bot has access to. Certain commands also work in Direct Messages with the bot.*

## Changing Settings
You can change bot settings manually in the configuration files within the 'config' folder.
Please do not mess with other files unless you know what you are doing.

## Adding Sounds
You can add music and sounds simply by adding audio files to the 'music' and 'sounds' directories. They must be in a format supported by Discord; we recommend MP3 or WAV.
New audio must then be added to the sound or music library with `!addsound` or `!addmusic` commands.
Alternatively, you can add all audio in the respective folders to the library with `!addallsounds` or `!addallmusic`, but then the audio file names will be used (instead of custom ones).
`!purgesounds` or `!purgemusic` can be used to clear the database.
 
*NOTE:
Sound files provided alongside this bot may come from copyrighted work. We do not claim to own rights to all of these sounds.*

## Package
**Organization:**  
PacketCloud [https://packetcloud.com]  

Authors:  
  Adrian Schuldhaus  
  Lucas Ciula  
  Cody Mendoza  

**Repository:**  
GitHub [https://github.com/packetcloud/alvis]  

**License:**  
Type: MIT  
(see LICENSE file)  

**Credited Dependencies:**  
Discord.js:  
  We use the Discord Node.js API ('discord.js') for interfacing with Discord's servers.  
  [https://discord.js.org]  

API.AI:  
  We make use of Google's Node.js 'apiai' package. This is used to interface with their servers to handle and classify bot chat queries.  
  [https://api.ai]  

r6stats.com:  
  We send web requests to api.r6stats.com to retrieve player stats for Rainbow Six Siege.  
  [https://r6stats.com]  
  [https://rainbow6.ubisoft.com]  

playsound:  
  Used to send search requests to Google Play Music for song lookup and stream URL retrieval, allowing for music playback.  

**Other Dependencies:**  
bufferutil: ^3.0.1  
libsodium: ^0.5.1  
libsodium-wrappers: ^0.5.1  
lowdb: ^0.14.0  
node-opus: ^0.2.2  
opusscript: 0.0.3  
uws: ^0.14.5  
ytdl-core: ^0.14.2  