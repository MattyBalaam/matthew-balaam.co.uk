export default {
	plugins: {
		"postcss-custom-media-generator": {
			"--break-horizontal-large-min": "(min-width: 1200px)",
			"--break-horizontal-min": "(min-width: 1000px)",
			"--break-vertical-max": "(max-width: 1000px)",
			"--break-medium-min": "(min-width: 600px)",
			"--break-medium-max": "(min-width: 599px)",
		},
		"postcss-preset-env": {},
	},
};
