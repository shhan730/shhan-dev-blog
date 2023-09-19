import React from 'react';
import DiscussionEmbed from 'gatsby-plugin-disqus';

const DisqusComponent = ({ id, title, url }) => {
    const disqusConfig = {
        url: url,
        identifier: id,
        title: title,
    };

    return <DiscussionEmbed config={disqusConfig} />;
};

export default DisqusComponent;
