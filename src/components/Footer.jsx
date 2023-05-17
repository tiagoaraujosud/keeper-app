
function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();

    return (
      <div className="App">
        <p>Copyright {currentYear}</p>
      </div>
    );
  }
  
  export default Footer;