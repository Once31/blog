import { useStoreState } from "easy-peasy";

const Footer = () => {
  const postCount = useStoreState((state) => state.postCount);
  return <footer className="Footer">{postCount} &hearts; Blog Posts</footer>;
};

export default Footer;
