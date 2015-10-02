self.addEventListener('message', function (event) {
    setTimeout(function () {
        self.postMessage('Worker is said to do: ' + event.data);
    }, 3000);
});