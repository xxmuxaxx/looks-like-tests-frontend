import { List, Image } from "components/shared";

import "./TestImages.scss";

type TestImagesProps = {
  items?: string[];
};

const TestImages = ({ items }: TestImagesProps) =>
  items ? (
    <List
      className="test-images"
      items={items}
      renderItem={(src, index) => (
        <li key={`image-${src}-${index}`} className="test-images__item">
          <div className="test-images__wrapper">
            <Image src={src} className="test-images__image" />
          </div>
        </li>
      )}
    />
  ) : null;

export default TestImages;
