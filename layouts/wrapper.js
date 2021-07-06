import PrivateLayout from "./private";
import DefaultLayout from "./default";

const layouts = {
  default: DefaultLayout,
  private: PrivateLayout
};

const Wrapper = (props) => {
  const Layout = layouts[props.children.type.layout];
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default Wrapper;
