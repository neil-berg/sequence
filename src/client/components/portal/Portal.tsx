/* global document */
import * as React from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

/**
 *
 * See: https://medium.com/@jc_perez_ch/dynamic-react-portals-with-hooks-ddeb127fa516
 */
const Portal = (props: PortalProps) => {
  const portalRoot = React.useRef(document.getElementById('portal'));
  React.useEffect(() => {
    // Remove children in portal root element during unmount
    // Remove a specified element without having to specify its parent node
    return () => {
      if (portalRoot.current.parentElement) {
        portalRoot.current.parentElement.removeChild(portalRoot.current);
      }
    };
  }, []);

  // Attach children element(s) to the portal root DOM node, not the
  // app root node that all other elements are attached to
  return ReactDOM.createPortal(props.children, portalRoot.current);
};

// const Portal = (props: PortalProps) => {
//   const portalRoot = document.getElementById('portal');
//   const portalElement = document.createElement('div');

//   React.useEffect(() => {
//     portalRoot.appendChild(portalElement);
//     return () => portalRoot.removeChild(portalElement);
//   }, [portalElement]);

//   return ReactDOM.createPortal(props.children, portalElement);
// };

// class Portal extends React.Component<PortalProps> {
//   private portalRoot: HTMLElement;
//   private portalElement: HTMLDivElement;

//   constructor(props: PortalProps) {
//     super(props);
//     this.portalRoot = document.getElementById('portal');
//     this.portalElement = document.createElement('div');
//   }

//   componentDidMount() {
//     this.portalRoot.appendChild(this.portalElement);
//   }

//   componentWillUnmount() {
//     this.portalRoot.removeChild(this.portalElement);
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, this.portalElement);
//   }
// }

export default Portal;
