import React from 'react';

// resuable mock navbar with theme styling
const NavBar = (props) => {
  // inline way styling
  const styles = {
    general: {
      width: '100%',
      margin: '1rem 0',
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'center',
      color: '#000',
      backgroundColor: '#fff',
    },
    titles: {
      padding: '0 1rem',
    },
    dark: {
      color: '#fff',
      backgroundColor: '#000',
    },
    a: {
      textDecoration: 'none',
      color: props.textColor,
    },
  };

  const mergeStyling = {
    ...styles.general,
    ...(props.darkTheme ? styles.dark : {}),
  };

  return (
    <div>
      <ul style={mergeStyling}>
        {props.titles.map((title) => {
          const titleKey = title
            .trim()
            .toLowerCase()
            .replace(' ', '-');
          return (
            <li key={titleKey} style={styles.titles}>
              <a href={titleKey} style={styles.a}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
