// import React, { Children } from 'react';
import NextLink from 'next/link';

console.log('NextLink: ', NextLink);

class Link extends NextLink {
  render() {
    let { children } = this.props;
    const { href, as } = this;
    // Deprecated. Warning shown by propType check. If the childen provided is a string
    // (<Link>example</Link>) we wrap it in an <a> tag
    if (typeof children === 'string') {
      children = <a>{children}</a>;
    }

    // This will return the first child, if multiple are provided it will throw an error
    const child = Children.only(children);
    const props = {
      onClick: this.linkClicked,
    };

    // If child is an <a> tag and doesn't have a href attribute we specify it so that
    // repetition is not needed by the user
    // if (child.type === 'a' && !('href' in child.props)) {
    props.href = as || href;
    console.log('props.href: ', props.href);
    // }

    // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.
    // if (
    //   props.href &&
    //   typeof __NEXT_DATA__ !== 'undefined' &&
    //   __NEXT_DATA__.nextExport
    // ) {
    //   props.href = _rewriteUrlForNextExport(props.href);
    // }

    return React.cloneElement(child, props);
  }
}

export default NextLink;
