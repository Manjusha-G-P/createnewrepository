describe('Protractor Demo', () => {
	it('Should navigate to Demo Page', () => {
		browser.get('https://www.google.com/');
		browser.getCurrentUrl().then((url) => {
			expect(url).toBe('https://www.google.com/');
		});
	});
});
