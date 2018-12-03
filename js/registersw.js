if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./js/sw.js')
	.then(() => {
		console.log('Registration complete');
	})
	.catch(() => {
		console.log('Registration failed');
	});
}
