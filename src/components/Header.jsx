import assets from '../assets';

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <img src={assets.logo} alt='logo' />
        <a className='login-btn' href="#!">Войти</a>
      </div>
    </header>
  );
};
