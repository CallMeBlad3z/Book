import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';

interface ResizableProps {
    direction: "horizontal" | "vertical";
    children?: React.ReactNode;
  }

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [window.innerWidth * 0.2, Infinity],
      maxConstraints: [window.innerWidth * 0.75, Infinity],
      height: Infinity,
      width: window.innerWidth * 0.75,
      resizeHandles: ["e"],
    };
  }
  else {
    resizableProps = {
      className: "resize-vertical",
      minConstraints: [Infinity, window.innerHeight * 0.1],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  }

    return <ResizableBox 
    maxConstraints={[Infinity, window.innerHeight * 0.9]}
    minConstraints={[Infinity, window.innerHeight * 0.25]}
    width={Infinity}
    height={300}
    resizeHandles={["s"]}
    >
      {children}
    </ResizableBox>;
}

export default Resizable;