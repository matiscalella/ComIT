let logPlease = require('logplease');
let LogPlease = logPlease.create('mensaje');
LogPlease.debug(`Hola Mundo`);
LogPlease.info('Información de último momento, Node.js es lo más!!');
LogPlease.warn('Tirando warnings como campeones');
LogPlease.error('Algo no está bien!!!');