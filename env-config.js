const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://filipjerga.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://filipjerga.herokuapp.com',
  'process.env.CLIENT_ID': 'NfvS9nw81ItncHJKPHCaAvwD9ChNWYn3'
}
