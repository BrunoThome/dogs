import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Dogs';
    document
      .querySelector('meta[name=description]')
      .setAttribute('content', props.description || '');
    return () => {
      document.title = 'Dogs';
      document
        .querySelector('meta[name=description]')
        .setAttribute('content', '');
    };
  }, [props]);

  return <> </>;
};

export default Head;
