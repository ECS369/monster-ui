
require.config({
	paths: {
		async: 'js/lib/async',
		bootstrap: 'js/lib/bootstrap-2.3.1.min',
		'bootstrap-switch': 'js/lib/bootstrapSwitch-1.2',
		'bootstrap-clickover': 'js/lib/bootstrapx-clickover-1.0',
		datatables: 'js/lib/tables/jquery.dataTables-1.8',
		form2object: 'js/lib/form2object',
		handlebars: 'js/lib/handlebars-1.0.10',
		jquery: 'js/lib/jquery-1.9.1.min',
		jqueryui: 'js/lib/jquery-ui-1.10.3.custom.min',
		jstz: 'js/lib/jstz.min',
		monster: 'js/lib/monster',
		'monster-ui': 'js/lib/monster.ui',
		'monster-timezone': 'js/lib/monster.timezone',
		'monster-util': 'js/lib/monster.util',
		nicescroll: 'js/lib/jquery.nicescroll.min',
		'monster-apps': 'js/lib/monster.apps',
		plugins: 'js/plugins',
		postal: 'js/lib/postal-0.8.2',
		reqwest: 'js/lib/reqwest-0.7.3.min',
		toastr: 'js/lib/toastr-1.3.0.min',
		underscore: 'js/lib/underscore-1.4.4.min'
	},
	shim: {
		bootstrap: ['jqueryui'],
		'bootstrap-switch': ['bootstrap'],
		'bootstrap-clickover': ['bootstrap'],
		datatables: ['jquery'],
		jqueryui: ['jquery'],
		handlebars: {
			exports: 'Handlebars'
		},
		plugins: ['jquery'],
		underscore: {
			exports: '_'
		}
	},
	urlArgs: 'bust=' + (new Date()).getTime()
});

require(['jquery', 'monster', 'plugins', 'bootstrap', 'bootstrap-switch', 'bootstrap-clickover'], function($, monster){
	$.support.cors = true;

	require(['monster-util', 'monster-ui', 'monster-apps'], function(util, ui, apps){
		monster.util = util;
		monster.ui = ui;
		monster.apps = apps;

		$(function(){
			monster.apps.load('core', function(app){
				app.render($('#main section'));
			});
		});
	});
});
