const CustomStyle = () => {
  return (
    <custom-style class="display-none">{`
/* To 463px (next query overtakes 464px): */
@media all and (max-width: 464px) {
	.site-map.main {
		margin: calc(1em + var(--header-height)) 1em 3em 1em;
	}
}
/* From 464px: */
@media all and (min-width: 464px) {
	.site-map.main {
		margin: calc(1em + var(--header-height)) auto 3em auto;
		width: 432px;
	}
}

.site-map a:link {
	background: transparent;
}

.site-map p {
	margin-top: 1em;
}

.site-map h2 {
	font-size: 1.5em;
	margin: .25em 0 0 0;
	text-align: center;
}

/*
.site-map h2 > p,
.site-map p ~ p {
	margin: 0;
	padding: 0;
}
*/

/* Limit paragraph width to @62 characters (ch unit wouldn't work here): */
/* We have to chain .main to .site-map to increase the specificity to make the styling work */
.site-map.main p {
	max-width: 27em;
}

  `}</custom-style>
  );
};

export default CustomStyle;
