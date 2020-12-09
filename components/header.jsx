import PropTypes from 'prop-types'

const Header = ({ menuItems }) => (
  <nav>
    <a href='#' className='brand'>
      <span>Daniel Berezin</span>
    </a>

    <input id='burgerMenu' type='checkbox' className='show' />
    <label htmlFor='burgerMenu' className='burger pseudo button'>
      &#8801;
    </label>
    <div className='menu'>
      {menuItems.map((item, i) => (
        <a href={item.href} key={i} className='pseudo button'>
          {item.title}
        </a>
      ))}
    </div>
  </nav>
)

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Header
