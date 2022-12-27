# CSS-Files
@charset "utf-8";

/******************************************************
	Default CSS file for the tree view - Version 1.2 (2022.08.01)
	
	Default settings: 
		#44325E				-	body text color     
		#007AEF				-	button color in buttons, title color in panels      
		#EFE7FC				-	secondary theme color - node question background
		#f5f5f5			-	light content section background
		#scale#	(not working!)	-	for changing font size, as the base is 16px (1rem), try to keep font size as an integer ex: ;  
									scaling to 110% will make 16px font 10% bigger, that's 17.6px
									scaling it to 112.5% , will make the base font even integer 18px, use: 
										$scale_value = $desired_font_size / $base_font_size;
										where $base_font_size = 16
	Theme defaults are:
		body_text	=	#ff00f7 (black-ish)
		primary 	=	#6200EE (purple)
		secondary	=	#3b1d65 (light purple)
		complement	=	#f5f5f5	(light gray)

	Note: 
		Call the custom-css.php file with these variables. Use like: 
		https://zingtree.com/css/custom-css.php?template=default-2&body_text=ff00f7&primary=6200EE&secondary=3b1d65&complement=f5f5f5		
		- remeber that localy https may not work, an you would need to use http:// protocole. 
		- you can "hard-code" it here: ..\website\public\deploy\tree.php ( look for: "<?= $css_include ?>", and replace with this css path) 

******************************************************/




/******************************************************
	Theme Settings
******************************************************/

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap');

:root {
	/* User vars */
	--color-body:  		#44325E;
	--color-primary:  	#007AEF;
	--color-secondary:  #EFE7FC;
	--color-light:		#f5f5f5; 

	/* Theme vars */
	--font-size:		18px;
	--border-color: 	rgba(0,0,0,0.15); 	/* opacitie-ed fits any color */
	--border-width:  	2px;
	--border-radius: 	5px;
	--font-family: 		Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;

	--color-danger: 	#e3342f;
	--color-success: 	#198754;
	--color-info: 		#6cb2eb;
	--color-warning: 	#ffc107;
	--color-dark: 		#343a40;

	--color-link:	 	var(--color-primary);

}

/******************************************************
	BODY MAIN
******************************************************/

html {
	font-family: sans-serif;
	font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body.zingtree {
	/* margin: 0 !important; */ /*Not sure why it's here*/
}

body {
	color: var(--color-body);
    font-size: var(--font-size);
    font-family: var(--font-family);
    line-height: 1.5;
}

p {
	margin-bottom: 20px;
}

a, a:active {
	color: var(--color-link);
}

a:hover {
	color: var(--color-link);
	text-decoration: underline;
}

b, strong {
	font-weight: 500;
}

h1, h2, h3, h4, h5, h6, 
.h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: var(--font-family);
    font-weight: 500;
}

hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 0;
    border-top: 1px solid rgba(0,0,0,0.15);
    width: auto;
}

input[type=text] {
	display: inline-block;
    width: auto;
    height: auto;
    padding: 7px 12px;
    font-size: var(--font-size);
    line-height: 1.5;
    color: var(--color-body);
    background-color: white;
    //background-image: none;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);

    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);

    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

table th {
	font-weight: 500;
}

.content-only > *:first-child {
	margin-top: 0;
}

/* fix for not correctly stacked rows & cols */
.row > .row {
	margin-left: 0;
	margin-right: 0;
}

/* most annoying <br> ever */
.button-node-content > div.col-md-12 > br {
	display: none;
}

/******************************************************
	BREADCRUMBS
******************************************************/
ol.breadcrumb {
	font-size: 14px;
	border: solid var(--border-width) var(--border-color);
	margin-bottom: 0;
}

ol.breadcrumb li a {
	color: var(--color-link);
}

/******************************************************
	HISTORY
******************************************************/

#zt_history {
	font-size: 14px;
}

/******************************************************
	BUTTON VALUES (including node in-context buttons)
******************************************************/

.btn,
.btn-zingtree {
	font-size: var(--font-size);
	border-radius: var(--border-radius) !important;
	line-height: 1.5;
	padding-left: 15px;
	padding-right: 15px;
	border-color: transparent;
	border-width: var(--border-width);

	-webkit-transition: filter 150ms ease-in-out;
	transition: filter 150ms ease-in-out;
}

.btn-sm, .btn-group-sm > .btn {
	font-size: calc(var(--font-size) - 2px);	
}

.btn-xs, .btn-group-xs > .btn {
	font-size: calc(var(--font-size) - 4px);
}

.btn-lg, .btn-group-lg > .btn {
    padding: 10px 20px;
    font-size: calc(var(--font-size) + 2px);
    line-height: 1.4;
    border-radius: var(--border-radius) !important;
}

@media (max-width:640px) {
	.btn-lg, .btn-group-lg > .btn {
    	font-size: var(--font-size);
    	padding: 8px 20px;
	}
}

.btn:hover,
.btn:focus,
.btn-zingtree:hover,
.btn-zingtree:focus {
	filter: invert(0.06) brightness(0.9);
	border-color: transparent;
    outline: none !important;
}

.btn:active,
.btn-zingtree:active {
	filter: saturate(1);
	outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
	border-color: transparent;
}

.btn > .fe, .btn > .fa {
	vertical-align: middle;
	font-size: 16px;
}

/* fix for history btn */
#accordion-history .btn > .fa {
	margin-left: -2px;
	margin-right: -2px;
}

/* Buttons colors */

.btn-primary, .btn-zingtree,
.btn-primary:hover, .btn-zingtree:hover,
.btn-primary:active, .btn-zingtree:active,
.btn-primary:focus, .btn-zingtree:focus  { 
	background-color: var(--color-primary);
	color: white;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:active,
.btn-secondary:focus {

	background-color: var(--color-secondary);
	color: var(--color-body);
}

.btn-success,
.btn-success:hover,
.btn-success:active,
.btn-success:focus {

	background-color: var(--color-success);
}

.btn-danger,
.btn-danger:hover,
.btn-danger:active,
.btn-danger:focus {

	background-color: var(--color-danger);
}

.btn-warning,
.btn-warning:hover,
.btn-warning:active,
.btn-warning:focus {

	background-color: var(--color-warning);
	color: var(--color-body);
}

.btn-info,
.btn-info:hover,
.btn-info:active,
.btn-info:focus {

	background-color: var(--color-info);
}

.btn-dark,
.btn-dark:hover,
.btn-dark:active,
.btn-dark:focus {
	background-color: var(--color-dark);
	color: white;
}

.btn-zingtree {
	font-weight: 500;
    border-radius: var(--border-radius) !important;
}
.btn-zingtree.disabled {
  background-color: var(--color-primary);
  opacity: 0.4;
  
}

.btn-zingtree.btn-danger,
.btn-zingtree.btn-danger.disabled {
  background-color: var(--color-danger);
}

/******************************************************
	PERSISTENT BUTTONS
******************************************************/
.persistent-buttons .btn,
.btn-default {
    color: var(--color-body) !important;
    background-color: transparent;
    border: var(--border-width) solid var(--color-body);
    border-radius: var(--border-radius) !important;
    padding: 6px 15px;
}

.persistent-buttons .btn .fa,
.persistent-buttons .btn .fe,
.btn-default.btn .fa,
.btn-default.btn .fe,  {
    margin: 0 -2px;
}

.persistent-buttons .btn:hover,
.btn-default:hover {
    color: var(--color-body);
    background-color: rgba(0, 0, 0, 0.05);
  	border-color: var(--color-body);
}

.persistent-buttons .btn:active,
.btn-default:active {
    background-image: none;
    -webkit-box-shadow:  none;
    box-shadow: none;
    background-color: transparent;
}

.persistent-buttons small.hidden-print a {
	top: -7px;
    position: relative;
    padding: 0 5px;
}

/******************************************************
	PANELS
******************************************************/

.panel {
	margin: 0;
	padding: 0;

	border: solid var(--border-width) var(--border-color);
	border-radius: var(--border-radius);
}

.panel, .panel-heading {
	box-shadow: none;
}

.panel-primary > .panel-heading {
	background: none;
	border: none;
}

.panel-title {
	font-size: 16px;
	font-weight: 500;
	color:var(--color-body);	
}

.panel-title > a,
.panel-title .btn.btn-default.btn-xs  {
	padding: 4px 10px;
    font-size: 14px;
    border-radius: var(--border-radius) !important;
    color: #44325E;
    background-color: #ffffff;
    border: solid var(--border-width) var(--border-color);
    display: inline-block;
    margin-right: 6px;
    line-height: 1.5;
}
.panel-title > a:before {
	content: none !important;
}

.panel-group {
	margin-bottom: 0;
}

.panel-title > a > i,
.panel-title .btn-default {
	float: none;
}

.panel-title > a,
.panel-title .btn-default,
.panel-title > a > i:active,
.panel-title .btn-default:active {
	color: #44325E;
    box-shadow: none !important;
    -webkit-box-shadow:  none !important;
}

.panel-title > a:hover,
.panel-title .btn-default:hover {
	background-color: #ddd !important;
	border-color: #bbb !important;
    box-shadow: none !important;
    -webkit-box-shadow:  none !important;
}

.panel-title > a:focus,
.panel-title .btn-default:focus {
	outline: var(--border-width) solid #333;
}

/* hides an empty <p> in tree title */
#title_row > div > div > p {
	display: none;
}

.form-group label .text-danger {
    position: absolute;
    width: 8px;
    transform: translateX(-100%);
    margin-left: -4px;
    font-weight: 900;
}

/******************************************************
	NODE CONTENT
******************************************************/

h2#title,
#zt_title {
	font-size: var(--font-size);
	color: var(--color-body);
    line-height: 1.5;
    margin: 25px 0 0;
    text-align: left;
    font-weight: normal;
}

.panels-node-title,
.button-node-title {
	margin: 0;
	padding: 0;
}

.panels-node-title h3,
.button-node-title h3 {
	font-size: var(--font-size);
	font-weight: 500;
	margin-top: 10px;
	margin-bottom: 20px;
    padding-right: 50px;
	position: relative;
}

#node-title > .pull-right { /* fix for link icon */
	position: absolute;
	top: -3px;
	right: 0;
}

.button-node-content,
.panel-body.panels-node-content {
	border: solid var(--border-width) var(--border-color);
	border-radius: var(--border-radius);
	padding: 20px 20px 20px 50px;
	margin: 0 0 25px;
	background: var(--color-light);
	position: relative;
}

.button-node-content:before,
.panel-body.panels-node-content:before  {
	content: '\f10d';
    font-family: 'FontAwesome';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 32px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.2);
}

.panel-body.panels-node-content {
	padding-left: 65px;
}

@media (max-width:640px) {
	.button-node-content:before,
	.panel-body.panels-node-content:before  {
		display: none;
	}
	.button-node-content,
	.panel-body.panels-node-content {
		padding-left: 20px;
	} 
}

#qa-area.well.button-node-question,
#qa-area.list-group.panels-node-question {
    background-color: var(--color-secondary);
    border: solid var(--border-width) var(--border-color);
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
	padding: 20px 20px 0px;
	border-radius: var(--border-radius);
}

ul#qa-area {
    background-color: var(--color-primary);
    padding-top: 12px;
    padding-bottom: 16px;
}

/******************************************************
	LAYOUT:  BUTTONS NODE
******************************************************/

.button-node-title > [class*='col-'] {
	padding: 0;
}

.button-node-question .answers br {
	display: none;
}

.button-node-question .answers .btn {
	margin-bottom: 20px;
	border-color: transparent;
}

#question_area {
	position: relative;
	padding-left: 45px;
    margin-bottom: 25px;
}

#question_area:before {
	content: '\f059';
    font-family: 'FontAwesome';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 32px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.25);
}

@media (max-width:640px) {
	#question_area {
		padding-left: 5px;
	}
	#question_area:before   {
    	display: none;
	}
}

h3.node-question-text {
	margin: 0;
	padding: 0;
}

h3.node-question-text br {
    display: none;
}

#node-question{
    display: block;
    font-size: 26px;
    line-height: 1.3;
    margin: 0;
    color: var(--color-body);
}

@media (max-width:640px) {
	#node-question {
		font-size: 22px;
	}
    .button-node-content {
    	padding: 20px 10px;
    }
    .button-node-content:before {
    	display: none;
    }
}

/******************************************************
	LAYOUT:  PANELS NODE (LIST)
******************************************************/

.panel.panels-node {
	border: none;
}

a.btn-zingtree.list-group-item {
    padding: 10px 50px 10px 20px;
    font-size: calc(var(--font-size) + 2px);
    line-height: 1.4;
}

@media (max-width:640px) {
	a.btn-zingtree.list-group-item  {
    	font-size: var(--font-size);
    	padding: 8px 20px;
	}
	a.btn-zingtree.list-group-item:after  {
    	display: none;
	}
}

/*question-panels*/
li.list-group-item.list-group-item-question {
    background:  none;
    padding: 0;
    margin: 0 !!important;
    border-radius: 0;
    border: 0;
}

.list-group-item-question i.fa {
	display: none;
}

.list-group-item-question h4 {
	margin: 0;    
}

/* answers */

.panels-node-question .answers .list-group-item {
	margin: 0 0 20px;
	border-color: transparent;
	border: none;
}

.panels-node-question .btn-zingtree.list-group-item {
	background-color: var(--color-primary);
}

.panels-node-question .btn-zingtree.list-group-item > strong > i {
	display: none;
}

.panels-node-question .btn-zingtree.list-group-item > strong {
	margin-left: -4.98px; /* fix to remove &nbsp; > width, depends on the font size! */
}

.panels-node-question .btn-zingtree.list-group-item.list-group-item-danger {
	background-color: var(--color-danger);
	color: white;
}
.panels-node-question .btn-zingtree.list-group-item.list-group-item-danger:after {
	content:"\f05e";
}
.panels-node-question .btn-zingtree.list-group-item.ztdisabled {
	opacity: 0.4;
	
}

/* arrows */
.answers a.list-group-item:after {
	content: '\f054';
    font-family: 'FontAwesome';
    color: white;
    position: absolute;
    right: 40px;
    top: 15px;
    opacity: 0;
    font-size: 18px;
    line-height: 18px;
    transform: scale(0);
    -webkit-transition: all 150ms ease-in-out ;
    transition: all 150ms ease-in-out;
}

.answers a.list-group-item:hover:after {
	right: 15px;
    opacity: 1;
    transform: scale(1);
}

a.list-group-item {
	color: white;
}

/* Confirmation box (in "More" section) */

.zt-confirmation {
	display: block;
    padding: 10px 16px;
    background: #ffebeb;
    border: solid 1px #efbcbc;
    border-radius: 10px;
    margin: 10px 0  20px;
}

.zt-confirmation br {
	display: none;
}

.zt-confirmation label {
	font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-style: normal;
    cursor: pointer;
}

.zt-confirmation input {
	vertical-align: top;
	margin-right: 10px;
}

/******************************************************
	RESPONSIVE MEDIA QUERIES
******************************************************/

@media (max-width:767px) {
    .button-node .answers [class*=col-sm-] {
        width: 50%;
    }
}

@media (max-width:400px) {
    .button-node .answers [class*=col-sm-], .button-node .answers .col-md-offset-3.col-md-6 a {
        width: 100%;
    }
}

/******************************************************
	ANIMATIONS
******************************************************/

@-webkit-keyframes arrow-move {
     0% {
     opacity: 0;
     right: 0.8em;
    }
    80% {
     opacity: 1;
     right:0.5em;
    }
     100% {
     opacity: 0;
    }
}
 @keyframes arrow-move {
     0% {
     opacity: 0;
     right: 0.8em;
    }
     80% {
     opacity: 1;
     right: 0.5em;
    }
     100% {
     opacity: 0;
    }
}
