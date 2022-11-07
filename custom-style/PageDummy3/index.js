const CustomStyle = () => {
  return (
    <custom-style class="display-none">{`
/* To 463px (next query overtakes 464px): */
@media all and (max-width: 464px) {
	.dummy-3.main {
		margin: calc(1em + var(--header-height)) 1em 3em 1em;
	}
}
/* From 464px: */
@media all and (min-width: 464px) {
	.dummy-3.main {
		margin: calc(1em + var(--header-height)) auto 3em auto;
		width: 432px;
	}
}

.dummy-3 a:link {
	background: transparent;
}

.dummy-3 p {
	margin-top: 1em;
}

.dummy-3 h2 {
	font-size: 1.5em;
	margin: .25em 0 0 0;
	text-align: center;
}

/*
.dummy-3 h2 > p,
.dummy-3 p ~ p {
	margin: 0;
	padding: 0;
}
*/

/* Limit paragraph width to @62 characters (ch unit wouldn't work here): */
/* We have to chain .main to .dummy-3 to increase the specificity to make the styling work */
.dummy-3.main p {
	max-width: 27em;
}

  `}</custom-style>
  );
};

export default CustomStyle;
