import React from 'react';

import PageTitle from '~/components/PageTitle.react';
import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { truncateTextCode } from '~/components/CodeSnippets.js';

export default function TextManipulation() {
    return (
        <div>
            <PageTitle title="Text manipulation" />

            <section className="marginBottom-m">
                <div className="marginBottom-m breakPointM-marginBottom-l">
                    <SectionTitle sectionTitle={"Truncate text"} />

                    <SectionDescription>
                        When text overflows its container, truncate the text and append 3 dots.
                    </SectionDescription>
                </div>

                <SectionExample>
                    <div className="padding-m">
                        <p className="fontSize-m lineHeight-m c-slate truncateText">
                            This text overflows its parent element and therefore
                            will be truncated and three dots will be appended. This
                            text overflows its parent element and therefore will be
                            truncated and three dots will be appended.
                        </p>
                    </div>
                </SectionExample>

                <SectionCode codeType="language-html" code={truncateTextCode} />
            </section>
        </div>
    );
}
