import dynamic from "next/dynamic";
import { Component } from "react";
import { useRouter } from "next/router";

export default function PluginContainerPage() {
  const router = useRouter();

  if (!router?.query?.page) {
    return null;
  }

  const PluginComponent = dynamic(
    // () => import(`./../../node_modules/plugin/pages/${router.query.page}`),
    () => import(`./../../node_modules/plugin/pages/other-page.plugin.jsx`),
    {
      ssr: false,
      loading: () => <p>Loading...</p>
    }
  );

  return <PluginComponent />;
}

// interface Props {
//   query: {
//     page: string;
//   };
// }

// interface State {
//   PluginComponent: any;
// }

// export default class Page extends Component<Props, State> {
//   static getInitialProps({ query }) {
//     return { query };
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       PluginComponent: null
//     };
//   }

//   componentDidMount() {
//     const { query } = this.props;
//     this.setState({
//       PluginComponent: dynamic(
//         () =>
//           import(`./../../node_modules/plugin/pages/${query.page}.plugin.jsx`),
//         {
//           ssr: false,
//           loading: () => <p>Loading...</p>
//         }
//       )
//     });
//   }

//   render() {
//     const { PluginComponent } = this.state;
//     return <>{PluginComponent ? <PluginComponent /> : null}</>;
//   }
// }
