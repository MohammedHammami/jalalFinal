import React from 'react';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom
import { FaShoppingCart } from 'react-icons/fa'; // استيراد أيقونة سلة الشراء من react-icons
import logo from '../img/logo.png'; // تأكد من تحديث المسار حسب موقع ملف الشعار
import './Navbar.css'; // استيراد ملف الأنماط CSS

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link to="/" className="navbar-logo">
      <img src={logo} alt="Logo" />
    </Link>
    <Link to="/my-order" className="navbar-icon">
      <FaShoppingCart />
    </Link>
  </nav>

  );
};

export default Navbar;
