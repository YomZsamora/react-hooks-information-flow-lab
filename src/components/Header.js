import React from 'react';

function Header({changeColorMode, isDarkMode}) {
    return (
        <header>
        	<h2>Shopster</h2>
        	<button onClick={changeColorMode}>
          		{isDarkMode ? "Dark" : "Light"} Mode
        	</button>
      	</header>
    );
}

export default Header;