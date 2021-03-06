const isProduction = process.env.NODE_ENV === 'production';

exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  { removeGeneratorTag = true, removeReactHelmetAttrs = true,
    noInlineStyles = false },
) => {
  if (isProduction) {
    let header = getHeadComponents();

    if (removeGeneratorTag) {
      header = header.filter((i) => i.type !== 'meta' || i.props.name !== 'generator');
    }

    if (removeReactHelmetAttrs) {
      const key = 'data-react-helmet';

      header.forEach((i) => {
        if (key in i.props) {
          i.props[key] = undefined;
        }
      });
    }

    if (noInlineStyles) {
      const key = 'data-href';

      header.forEach((i) => {
        if (i.type === 'style' && key in i.props) {
          i.type = 'link';
          i.props = {
            rel: 'stylesheet',
            href: i.props[key],
            type: 'text/css',
          };
        }
      });
    }

    replaceHeadComponents(header);
  }
};

exports.wrapRootElement = (
  { element },
  { removeGatsbyAnnouncer = false },
) => {
  if (isProduction && removeGatsbyAnnouncer) {
    element.props.children = element.props.children.filter(
      (i) => i.props.id !== 'gatsby-announcer',
    );

    return element;
  }
};
