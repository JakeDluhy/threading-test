const ThreadedDll = require('./ThreadedDll');

setTimeout(() => {
	const threaded = new ThreadedDll();
	console.log('start stream');
	threaded.startStreaming();

	setTimeout(() => {
		console.log('stop stream');
		threaded.stopStreaming();
		console.log('end session');
		threaded.endSession();
	}, 1000);
}, 2000);