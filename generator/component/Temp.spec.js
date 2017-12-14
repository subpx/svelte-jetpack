describe('<%= name %> component', () => {
  context('<%= name %>', function() {
      it('can return greeting "<%= name %>"', function() {
        expect(helpers.hello('Tom')).to.eq('<%= name %>');
      });
    })
});
