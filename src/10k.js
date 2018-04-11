
// Opera Mini Extreme Savings mode filtering.
if ( navigator.userAgent.indexOf('Presto/') > -1 && navigator.userAgent.indexOf('Opera Mini/') > -1 ) {
	document.querySelector('style').firstChild.textContent = '';
	throw new Error(':(');
}


function handle_class(el, classname, action) {
	switch (action) {
		// add
		case 'a' :
			el.classList.add(classname);
			break;
		// remove
		case 'r' :
			el.classList.remove(classname);
			break;
	}
}

function up() {
	// FF fix
	if( !!document.documentElement.scrollTop ) { document.documentElement.scrollTop = 0; }
	if ( !!document.body.scrollTop ) { document.body.scrollTop = 0; }
}

function router() {

	var url_hash = window.location.hash.substring(1);
	var current_block = ( !!url_hash && (blocks.indexOf(url_hash) > -1) )
		? url_hash
		: blocks[0];

	for ( var i=0; i < blocks.length; i++ ) {
		var action = ( blocks[i] == current_block ) ? 'r' : 'a';
		handle_class( document.querySelector('#' + blocks[i]), 'c', action );
	}

	up();
}

var blocks = [];
var sections = document.querySelectorAll('header > nav ul li');
for ( var i = 0; i < sections.length; i++ ) {
	var s = sections[i].querySelector('a').href.split('#')[1];
	blocks.push(s);
	document.querySelector('#' + s).classList.add('c');
}

[].forEach.call( document.querySelectorAll('#j ul li a'), function(el){
	el.setAttribute('data-u', '@' + el.href.split('twitter.com/')[1] );
	el.classList.add('u');
});

[].forEach.call( document.querySelectorAll('a[href^="//"]'), function(el) {
	el.setAttribute('target', '_blank');
	el.setAttribute('title', el.text +' : '+el.href);
});

window.onload = window.onhashchange = function() { router(); }
