import React from 'react';

import SectionCode from '~/components/SectionCode.react';
import SectionDescription from '~/components/SectionDescription.react';
import SectionExample from '~/components/SectionExample.react';
import SectionTitle from '~/components/SectionTitle.react';

import { buttonWithIconCode } from '~/components/CodeSnippets.js';

export default function ButtonWithIcon() {
    return (
        <section className="marginBottom-xl">
            <div className="marginBottom-l">
                <SectionTitle sectionTitle={"Button with icon"} />

                <SectionDescription>
                    Use a single class to define a size for your button.
                </SectionDescription>
            </div>

            <SectionExample>
                <div className="padding-m">
                    <div className="uiIcon uiIcon--m">
                        <a
                            className="button button--m button--ghost bg-marvel--hover"
                            href="#"
                            role="button">
                            Button
                        </a>

                        <svg
                            className="svgIcon fill-positive"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path d="M17 10h-3v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3v3c0 1.1.9 2 2 2s2-.9 2-2v-3h3c1.1 0 2-.9 2-2s-.9-2-2-2z" />
                        </svg>
                    </div>
                </div>
            </SectionExample>

            <SectionCode code={buttonWithIconCode} />
        </section>
    );
}
