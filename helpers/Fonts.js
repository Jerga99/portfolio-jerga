import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const montserrat = new FontFaceObserver('Montserrat');

  montserrat.load().then(() => {
    document.documentElement.classList.add('montserrat-loaded');
  });
}

export default Fonts;
