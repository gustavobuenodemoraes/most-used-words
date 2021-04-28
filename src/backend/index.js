const { ipcMain } = require('electron');

ipcMain.on('process-subtitles', (event, arg) => {
    console.log(arg);

    event.reply('process-subtitles',
        [
            { name: "i", amount: 123 },
            { name: "you", amount: 900 },
            { name: "he", amount: 853 },
            { name: "she", amount: 553 },
            { name: "it", amount: 53 },
        ]
    )
});