import Banner from '../ReusableComponents/Banner';
import ReferenceQuote from './ReferenceQuote';
import '../Styles/Footer.css';

const slides = [
  {
    Component: ReferenceQuote,          // pass the component *function*
    props: {
      quote:
        'An asset to any business especially in the AI space',
      author: 'John White, Ex-CEO @ Chetwood Financial Limited ',
    },
    bgColor: '#004080',
  },
  {
    Component: ReferenceQuote,          // pass the component *function*
    props: {
      quote:
        'A bit of a knob',
      author: 'Rakeem Morgan-Cornibert, Head of Systems Analytics @ Intrum ',
    },
    bgColor: '#004080',
  }
];

export default function Footer() {
  return (
    /*  add the class ↓↓↓  */
    <footer className="footer">
      <Banner slides={slides} interval={15000} />
    </footer>
  );
}
