module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
        "future-background":"url('https://cdn.discordapp.com/attachments/817048198022430761/921779239517319218/blue-5457731_1.jpg')"        
            }),
    },
  },
  plugins: [],
}
