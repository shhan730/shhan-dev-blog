import React, { useState, useEffect } from 'react';
import { Disqus } from 'gatsby-plugin-disqus';

const DisqusForMDX = ({ post }) => {
    const [disqusConfig, setDisqusConfig] = useState(null);

    useEffect(() => {
        if (window && post) {
            setDisqusConfig({
                url: `${window.location.href}`,
                identifier: post.id,
                title: post.title,
            });
        }
    }, [post]);

    if (!disqusConfig) return null;

    return <Disqus config={disqusConfig} />;
};

export default DisqusForMDX;
