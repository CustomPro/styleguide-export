import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { verticallyCenterElementsCode } from '~/components/CodeSnippets.js';

export default function VerticallyCenter() {
    return (
        <section className="marginBottom-m">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Vertically center"} />

                <SectionDescription>
                    Center an element horizontally. The element must have a width declared.
                </SectionDescription>
            </div>

            <SectionExample>
                <div
                    className="padding-m"
                    style={{ height: '400px' }}>
                    <div
                        className="centered fontSize-m lineHeight-m verticallyCenter outlineStyle-none"
                        contentEditable="true"
                        placeholder="Type something..."
                        style={{ width: '200px' }}>
                        Click and type to see how the text magically centers itself vertically in the parent container.
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={verticallyCenterElementsCode} />
        </section>
    );
}
