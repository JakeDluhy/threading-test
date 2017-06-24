const ffi = require('ffi');
const path = require('path');

const DllPath = path.resolve(__dirname, '../dll/ThreadedDll.dll');
// Map the library functions in the way that FFI expects
const DllMap = {
    'beginSession':     [ 'void', [ 'pointer' ] ],
    'endSession':       [ 'void', [] ],

    'startStreaming':   [ 'void', [] ],
    'stopStreaming':    [ 'void', [] ],
};
// Create the Library using ffi, the DLL, and the Function Table
const DllLib = ffi.Library(DllPath, DllMap);

class ThreadedDll {
	constructor(args) {
		this.frameReadyCB = ffi.Callback('void', [], () => {
			console.log('Frame Ready');
		});

		DllLib.beginSession(this.frameReadyCB);
	}

	startStreaming() {
		DllLib.startStreaming();
	}

	stopStreaming() {
		DllLib.stopStreaming();
	}

	endSession() {
		DllLib.endSession();
	}
}

module.exports = ThreadedDll;