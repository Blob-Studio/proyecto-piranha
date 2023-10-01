import { GiPiranha, GiFrontTeeth } from 'react-icons/gi';
import { BsShopWindow, BsFillPersonVcardFill, BsCart4} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { PiTelevision } from 'react-icons/pi'

const navigation = [
  {
    label: <><GiPiranha className="mr-4"/>Home</>,
    href: '/',
  },
  {
    label: <><BsShopWindow className="mr-4"/>Kiosco</>,
    links: [
      {
        label: <><BsFillPersonVcardFill className="mr-4"/>Suscripción</>,
        href: '/subscription'
      },
      {
        label: <><BsCart4 className="mr-4"/>Shop</>,
        href: '/kiosco'
      }
    ]
  },
  {
    label: <><PiTelevision className="mr-4"/>TV</>,
    href: '/tv'
  },
  {
    label: <><GiFrontTeeth className="mr-4"/>Voraz</>,
    href: '/voraz'
  },
  {
    label: <><AiOutlineMail className="mr-4"/>Contacto</>,
    href: '/contact'
  },
];

export default navigation;