import ReactDOM from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  rootSelector: string;
};

const Portal = ({ children, rootSelector }: PortalProps) => {
  const rootElement = document.querySelector(rootSelector);

  if (!rootElement) {
    throw new Error("rootElement cannot be null");
  }

  return ReactDOM.createPortal(children, rootElement);
};

export default Portal;
