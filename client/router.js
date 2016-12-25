Router.configure({
	layoutTemplate: 'franklinLayout'
})

Router.route('/', {name: 'goodnesList'});
Router.route('/create', {name: 'inputForm'});
Router.route('/detail', {name: 'goodnesDetail'});

const f = funcrion(a){
	return a*a
}