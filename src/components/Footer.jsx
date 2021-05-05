import React from "react";
import './styles/footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <React.Fragment>
        <footer className="black">
            <p>Este es un proyecto de practica con el objetivo de afianzar conceptos de react js</p>
        </footer>
    </React.Fragment>;
  }
}

export default Footer;
