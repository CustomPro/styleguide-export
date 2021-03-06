import React from 'react';

export default function SectionDescription({ children }) {
    SectionDescription.propTypes = {
        children: React.PropTypes.node.isRequired,
    };

    return (
        <p className="lineHeight-l fontSize-l fontWeight-3 c-silver">
            { children }
        </p>
    );
}
