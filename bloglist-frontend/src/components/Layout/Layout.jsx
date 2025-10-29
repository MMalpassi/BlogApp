import { useLocation } from 'react-router-dom';
import bgLogin from '../../static/images/bg-login.jpg';
import bgMain from '../../static/images/bg-main.jpg';
import bgFooter from '../../static/images/bg-footer.jpg';

function Layout({ user, children }) {
  const location = useLocation();

  // Fondo según login o ruta
  const isLogin = user === null;
  const isUsers = location.pathname.startsWith('/users');
  const isBlogs = location.pathname.startsWith('/blogs');

  let backgroundImage;
  if (isLogin) backgroundImage = bgLogin;
  else if (isUsers || isBlogs) backgroundImage = bgMain;
  else backgroundImage = bgMain;

  return (
    <div className="layout">

      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="app-content">{children}</div>

      <footer
        className="footer"
        style={{ backgroundImage: `url(${bgFooter})` }}
      >
        <p>© 2025 - Reblogger App</p>
      </footer>
    </div>
  );
}

export default Layout;
