module.exports = {
  prefix: 'gwpf-',
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'], // add your preferred file extensions here
  theme: {
		// Extend the default Tailwind theme.
		extend: {
			colors: {
        'primary': '#6E42D3',
      },
		},
	},
  plugins: [],
};
