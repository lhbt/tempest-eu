// import React from 'react'
// import PropTypes from 'prop-types'
// import classNames from 'classnames'

// import './styles.scss'

// import Link from '../../atoms/Link'
// import Icon from '../../atoms/Icon'

// const currentYear = (new Date()).getFullYear()

// const Footer = ({ className, ...props }) => {
//   const footerClasses = classNames('site-footer', className)

//   return (
//     <footer className={footerClasses} {...props}>
//       <div className="site-footer__inner">
//         <div className="site-footer__flex">
//           <nav className="site-footer__nav site-footer__nav--public">
//             <ul className="site-footer__nav__list">
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/info/aboutafs.asp">About us</Link>
//               </li>
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/city_information/student_reviews.asp">Reviews</Link>
//               </li>
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/info/contactus.asp">Get in touch</Link>
//               </li>
//             </ul>
//             <ul className="site-footer__nav__list">
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/privatehousing/completelisting.asp">Private housing</Link>
//               </li>
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/studentprivatehalls/completelisting.asp">Private halls</Link>
//               </li>
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/notices/studentaccommodation.asp?nbcat=housemates">Housemates</Link>
//               </li>
//             </ul>
//           </nav>
//           <nav className="site-footer__nav site-footer__nav--business">
//             <ul className="site-footer__nav__list">
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/landlord/login.asp">Landlords</Link>
//               </li>
//               <li className="site-footer__nav__item">
//                 <Link className="site-footer__nav__link" href="/advertise.asp">Advertise</Link>
//               </li>
//             </ul>
//           </nav>
//           <nav className="site-footer__nav site-footer__nav--social">
//             <ul className="site-footer__nav__list">
//               <li className="site-footer__nav__item site-footer__nav__item--label">Social</li>
//               <li className="site-footer__nav__item site-footer__nav__item--inline">
//                 <Link className="site-footer__nav__link" href="https://www.facebook.com/accommodation4students" target="_blank">
//                   <span className="u-hidden-visually">Find us on Facebook</span>
//                   <Icon className="site-footer__nav__icon" icon="facebook" width="16" height="26" fill="#ffffff" />
//                 </Link>
//               </li>
//               <li className="site-footer__nav__item site-footer__nav__item--inline">
//                 <Link className="site-footer__nav__link" href="https://www.instagram.com/accommodation4students/ " target="_blank">
//                   <span className="u-hidden-visually">Follow us on Instagram</span>
//                   <Icon className="site-footer__nav__icon" icon="instagram" width="26" height="26" fill="#ffffff" />
//                 </Link>
//               </li>
//               <li className="site-footer__nav__item site-footer__nav__item--inline">
//                 <Link className="site-footer__nav__link" href="https://twitter.com/accomforstudent" target="_blank">
//                   <span className="u-hidden-visually">Tweet us on Twitter</span>
//                   <Icon className="site-footer__nav__icon" icon="twitter" width="30" height="25" fill="#ffffff" />
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <small className="site-footer__copy">© {currentYear} Accommodation for Students</small>
//       </div>
//     </footer>
//   )
// }

// Footer.propTypes = {
//   className: PropTypes.string,
// }

// export default Footer
